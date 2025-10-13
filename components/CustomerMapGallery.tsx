"use client";

import React, { useState, useEffect } from 'react';
import { CustomerProject } from '../lib/customerProjects';
import { loadProjectsFromCSV } from '../lib/csvProjectLoader';

interface CustomerMapGalleryProps {
  projects?: CustomerProject[];
  title?: string;
  subtitle?: string;
  csvContent?: string; // Add CSV content prop
}

export default function CustomerMapGallery({
  projects: initialProjects = [],
  title = "Our Recent Projects",
  subtitle = "See the amazing transformations we've completed across Central New York",
  csvContent
}: CustomerMapGalleryProps) {
  const [selectedProject, setSelectedProject] = useState<CustomerProject | null>(null);
  const [mapComponent, setMapComponent] = useState<React.ComponentType<any> | null>(null);
  const [modalComponent, setModalComponent] = useState<React.ComponentType<any> | null>(null);
  const [isClient, setIsClient] = useState(false);
  const [loadedProjects, setLoadedProjects] = useState<CustomerProject[]>(initialProjects);
  const [isLoadingProjects, setIsLoadingProjects] = useState(true);

  useEffect(() => {
    setIsClient(true);

    const loadProjects = () => {
      // First try to load projects from API
      setIsLoadingProjects(true);
      fetch(`/api/projects?t=${Date.now()}`)
        .then(response => response.json())
        .then(data => {
          if (data.success && data.projects && data.projects.length > 0) {
            setLoadedProjects(data.projects);
            setIsLoadingProjects(false);
            return;
          }
          // If API doesn't have projects, fall back to CSV
          loadFromCSV();
        })
        .catch(error => {
          console.error('Failed to load projects from API:', error);
          // Fall back to CSV loading
          loadFromCSV();
        });
    };

    const loadFromCSV = () => {
      if (!csvContent) {
        fetch('/projects.csv')
          .then(response => response.text())
          .then(csvText => loadProjectsFromCSV(csvText))
          .then(csvProjects => {
            if (csvProjects.length > 0) {
              setLoadedProjects(csvProjects);
            }
            setIsLoadingProjects(false);
          })
          .catch(error => {
            console.error('Failed to load projects from CSV:', error);
            setIsLoadingProjects(false);
          });
      } else {
        loadProjectsFromCSV(csvContent)
          .then(csvProjects => {
            if (csvProjects.length > 0) {
              setLoadedProjects(csvProjects);
            }
            setIsLoadingProjects(false);
          })
          .catch(error => {
            console.error('Failed to load projects from CSV:', error);
            setIsLoadingProjects(false);
          });
      }
    };

    // Load projects immediately
    loadProjects();

    // Set up periodic refresh every 2 minutes to catch updates
    const refreshInterval = setInterval(loadProjects, 2 * 60 * 1000);

    // Listen for project updates from admin panel
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === 'projectsLastUpdated') {
        loadProjects();
      }
    };

    window.addEventListener('storage', handleStorageChange);

    // Dynamically import components only on client side
    import('./CustomerProjectsMap').then((module) => {
      setMapComponent(() => module.default);
    }).catch((error) => {
      console.error('Failed to load map component:', error);
    });

    import('./CustomerProjectModal').then((module) => {
      setModalComponent(() => module.default);
    }).catch((error) => {
      console.error('Failed to load modal component:', error);
    });

    // Cleanup
    return () => {
      clearInterval(refreshInterval);
      window.removeEventListener('storage', handleStorageChange);
    };
  }, [csvContent]);

  const handleProjectSelect = (project: CustomerProject) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  if (!isClient || isLoadingProjects) {
    return (
      <div className="customer-map-gallery">
        <div className="map-loading">
          <div className="loading-spinner"></div>
          <p>{isLoadingProjects ? 'Loading project data...' : 'Loading interactive map...'}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="customer-map-gallery">
      <div className="map-header-container">
        <div className="map-header">
          <h2 className="map-title">{title}</h2>
          <p className="map-subtitle">{subtitle}</p>
        </div>
      </div>
      
      <div className="map-full-width">
        {mapComponent ? (
          React.createElement(mapComponent, {
            projects: loadedProjects,
            onProjectSelect: handleProjectSelect
          })
        ) : (
          <div className="map-fallback">
            <div className="map-loading">
              <div className="loading-spinner"></div>
              <p>Loading interactive map...</p>
            </div>
          </div>
        )}
      </div>
      
      {modalComponent && selectedProject && (
        React.createElement(modalComponent, {
          project: selectedProject,
          isOpen: !!selectedProject,
          onClose: handleCloseModal
        })
      )}
    </div>
  );
}