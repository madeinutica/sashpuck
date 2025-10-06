"use client";

import React, { useState, useEffect } from 'react';
import { CustomerProject, sampleProjects } from '../lib/customerProjects';

interface CustomerMapGalleryProps {
  projects?: CustomerProject[];
  showFeaturedOnly?: boolean;
  title?: string;
  subtitle?: string;
}

export default function CustomerMapGallery({ 
  projects = sampleProjects,
  showFeaturedOnly = false,
  title = "Our Recent Projects",
  subtitle = "See the amazing transformations we've completed across Central New York"
}: CustomerMapGalleryProps) {
  const [selectedProject, setSelectedProject] = useState<CustomerProject | null>(null);
  const [mapComponent, setMapComponent] = useState<React.ComponentType<any> | null>(null);
  const [modalComponent, setModalComponent] = useState<React.ComponentType<any> | null>(null);
  const [isClient, setIsClient] = useState(false);
  
  const displayProjects = showFeaturedOnly 
    ? projects.filter(project => project.featured)
    : projects;

  useEffect(() => {
    setIsClient(true);
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
  }, []);

  const handleProjectSelect = (project: CustomerProject) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  if (!isClient) {
    return (
      <div className="customer-map-gallery">
        <div className="map-loading">
          <div className="loading-spinner"></div>
          <p>Loading interactive map...</p>
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
            projects: displayProjects,
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

      <div className="featured-projects-container">
        <div className="featured-projects">
          <h3>Featured Projects</h3>
          <div className="featured-grid">
            {displayProjects.filter(p => p.featured).slice(0, 3).map(project => (
              <div 
                key={project.id} 
                className="featured-card"
                onClick={() => setSelectedProject(project)}
              >
                <div className="featured-image">
                  <img 
                    src={project.photos.after[0]} 
                    alt={project.title}
                    loading="lazy"
                  />
                </div>
                <div className="featured-content">
                  <h4>{project.title}</h4>
                  <p className="featured-location">{project.location.city}, NY</p>
                </div>
              </div>
            ))}
          </div>
        </div>
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