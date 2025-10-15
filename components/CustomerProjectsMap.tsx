"use client";

import React, { useState, useEffect, useRef, useCallback } from 'react';
import { CustomerProject, serviceTypeConfig, mapConfig } from '../lib/customerProjects';

// Mapbox GL JS types (simplified)
declare global {
  interface Window {
    mapboxgl: any;
  }
}

interface CustomerProjectsMapProps {
  projects: CustomerProject[];
  onProjectSelect?: (project: CustomerProject) => void;
}

export default function CustomerProjectsMap({ projects, onProjectSelect }: CustomerProjectsMapProps) {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<any>(null);
  const [selectedProject, setSelectedProject] = useState<CustomerProject | null>(null);
  const [mapLoaded, setMapLoaded] = useState(false);
  const [hoveredProject, setHoveredProject] = useState<CustomerProject | null>(null);
  const [mapError, setMapError] = useState<string | null>(null);

  // Load Mapbox GL JS
  useEffect(() => {
    if (typeof window !== 'undefined' && !window.mapboxgl) {
      const script = document.createElement('script');
      script.src = 'https://api.mapbox.com/mapbox-gl-js/v2.15.0/mapbox-gl.js';
      script.onload = () => setMapLoaded(true);
      script.onerror = () => setMapError('Failed to load map library');
      document.head.appendChild(script);

      const link = document.createElement('link');
      link.href = 'https://api.mapbox.com/mapbox-gl-js/v2.15.0/mapbox-gl.css';
      link.rel = 'stylesheet';
      document.head.appendChild(link);
    } else if (window.mapboxgl) {
      setMapLoaded(true);
    }
  }, [setMapLoaded, setMapError]);

  const fitMapToBounds = useCallback(() => {
    if (!map.current || projects.length === 0) return;

    const bounds = new window.mapboxgl.LngLatBounds();
    projects.forEach(project => {
      const lng = project.location?.coordinates?.longitude;
      const lat = project.location?.coordinates?.latitude;
      if (typeof lng === 'number' && typeof lat === 'number' && !isNaN(lng) && !isNaN(lat)) {
        bounds.extend([lng, lat]);
      }
    });

    map.current.fitBounds(bounds, {
      padding: 50,
      maxZoom: 12
    });
  }, [projects]);

  const addProjectMarkers = useCallback(() => {
    if (!map.current) return;

    projects.forEach((project) => {
      const lng = project.location?.coordinates?.longitude;
      const lat = project.location?.coordinates?.latitude;
      if (typeof lng === 'number' && typeof lat === 'number' && !isNaN(lng) && !isNaN(lat)) {
        // Create simple red pin marker (just the pointer)
        const markerElement = document.createElement('div');
        markerElement.className = 'custom-marker';
        markerElement.style.cssText = `
          width: 0;
          height: 0;
          border-left: 12px solid transparent;
          border-right: 12px solid transparent;
          border-top: 20px solid #ff4444;
          cursor: pointer;
          position: relative;
          filter: drop-shadow(0 2px 4px rgba(0,0,0,0.3));
          ${project.featured ? 'filter: drop-shadow(0 2px 4px rgba(0,0,0,0.3)) drop-shadow(0 0 0 2px #ffffff);' : ''}
        `;

        // Hover effects (no transform change to prevent movement)
        markerElement.addEventListener('mouseenter', () => {
          markerElement.style.filter = project.featured 
            ? 'brightness(1.1) drop-shadow(0 2px 4px rgba(0,0,0,0.3)) drop-shadow(0 0 0 2px #ffffff)'
            : 'brightness(1.1) drop-shadow(0 2px 4px rgba(0,0,0,0.3))';
          setHoveredProject(project);
        });

        markerElement.addEventListener('mouseleave', () => {
          markerElement.style.filter = project.featured 
            ? 'drop-shadow(0 2px 4px rgba(0,0,0,0.3)) drop-shadow(0 0 0 2px #ffffff)'
            : 'drop-shadow(0 2px 4px rgba(0,0,0,0.3))';
          setHoveredProject(null);
        });

        // Click handler
        markerElement.addEventListener('click', () => {
          setSelectedProject(project);
          if (onProjectSelect) {
            onProjectSelect(project);
          }
        });

        // Add marker to map
        new window.mapboxgl.Marker(markerElement)
          .setLngLat([lng, lat])
          .addTo(map.current);
      }
    });
  }, [projects, onProjectSelect]);

  // Initialize map
  useEffect(() => {
    if (mapLoaded && mapContainer.current && !map.current && !mapError) {
      try {
        window.mapboxgl.accessToken = mapConfig.apiKey;
        
        map.current = new window.mapboxgl.Map({
          container: mapContainer.current,
          style: 'mapbox://styles/mapbox/light-v11',
          center: [mapConfig.center.longitude, mapConfig.center.latitude],
          zoom: mapConfig.zoom
        });

        map.current.on('load', () => {
          addProjectMarkers();
          fitMapToBounds();
        });

        map.current.on('error', (e: any) => {
          console.error('Map error:', e);
          setMapError('Failed to load map');
        });
      } catch (error) {
        console.error('Error initializing map:', error);
        setMapError('Failed to initialize map');
      }
    }
  }, [mapLoaded, projects, mapError, addProjectMarkers, fitMapToBounds]);

  const getServiceStats = () => {
    const stats = Object.keys(serviceTypeConfig).map(serviceType => {
      const count = projects.filter(p => p.serviceType === serviceType).length;
      return {
        type: serviceType,
        count,
        config: serviceTypeConfig[serviceType as keyof typeof serviceTypeConfig]
      };
    }).filter(stat => stat.count > 0);

    return stats;
  };

  const serviceStats = getServiceStats();

  return (
    <div className="customer-projects-map">
      <div className="map-container-wrapper">
        <div className="map-main">
          <div 
            ref={mapContainer} 
            className="map-container"
            style={{ width: '100%', height: '500px', minHeight: '500px' }}
          />
          
          {!mapLoaded && !mapError && (
            <div className="map-loading">
              <div className="loading-spinner"></div>
              <p>Loading interactive map...</p>
            </div>
          )}

          {mapError && (
            <div className="map-loading">
              <div className="map-error">
                <p>⚠️ Map temporarily unavailable</p>
                <p>Please check your internet connection and refresh the page.</p>
              </div>
            </div>
          )}

          {hoveredProject && (
            <div className="map-tooltip">
              <h4>{hoveredProject.title}</h4>
              <p className="tooltip-location">
                {hoveredProject.location.city}, {hoveredProject.location.state}
              </p>
              <div className="tooltip-rating">
                {Array.from({ length: hoveredProject.testimonial.rating }).map((_, i) => (
                  <span key={i} className="star">⭐</span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}