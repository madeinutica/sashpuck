"use client";

import React, { useState } from 'react';
import { CustomerProject } from '../../lib/customerProjects';
import { 
  createProjectTemplate, 
  centralNYCoordinates, 
  validateProject,
  addProjectsToFile 
} from '../../lib/projectManager';

export default function ProjectManager() {
  const [newProject, setNewProject] = useState({
    title: '',
    city: '',
    serviceType: 'windows' as const,
    customerName: '',
    description: '',
    featured: false,
    address: '',
    investment: '',
    timeframe: '',
    rating: 5
  });

  const [generatedProjects, setGeneratedProjects] = useState<CustomerProject[]>([]);
  const [exportCode, setExportCode] = useState('');

  const handleInputChange = (field: string, value: any) => {
    setNewProject(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const generateProject = () => {
    try {
      const template = createProjectTemplate(
        newProject.title || `${newProject.serviceType} Installation`,
        newProject.city,
        newProject.serviceType,
        {
          customerName: newProject.customerName,
          description: newProject.description,
          featured: newProject.featured,
          address: newProject.address,
          investment: newProject.investment,
          timeframe: newProject.timeframe,
          rating: newProject.rating
        }
      );

      const validation = validateProject(template);
      if (!validation.isValid) {
        alert('Validation errors:\\n' + validation.errors.join('\\n'));
        return;
      }

      const completeProject = template as CustomerProject;
      setGeneratedProjects(prev => [...prev, completeProject]);
      
      // Reset form
      setNewProject({
        title: '',
        city: '',
        serviceType: 'windows',
        customerName: '',
        description: '',
        featured: false,
        address: '',
        investment: '',
        timeframe: '',
        rating: 5
      });
    } catch (error) {
      alert(`Error: ${(error as Error).message}`);
    }
  };

  const generateBulkProjects = () => {
    const cities = ['Syracuse', 'Utica', 'Rome', 'Auburn', 'Oneida', 'Fulton', 'Oswego', 'Cortland'];
    const services: Array<'windows' | 'siding' | 'bathrooms' | 'doors' | 'combination'> = 
      ['windows', 'siding', 'bathrooms', 'doors', 'combination'];
    
    const bulkProjects: CustomerProject[] = [];
    
    for (let i = 0; i < 15; i++) {
      const city = cities[i % cities.length];
      const service = services[i % services.length];
      const featured = i < 3; // First 3 are featured
      
      try {
        const template = createProjectTemplate(
          `${service.charAt(0).toUpperCase() + service.slice(1)} Project - ${city}`,
          city,
          service,
          { featured }
        );
        
        const completeProject = template as CustomerProject;
        bulkProjects.push(completeProject);
      } catch (error) {
        console.error(`Error creating project for ${city}:`, error);
      }
    }
    
    setGeneratedProjects(prev => [...prev, ...bulkProjects]);
  };

  const exportProjects = () => {
    if (generatedProjects.length === 0) {
      alert('No projects to export');
      return;
    }
    
    const code = addProjectsToFile(generatedProjects);
    setExportCode(code);
  };

  const clearProjects = () => {
    setGeneratedProjects([]);
    setExportCode('');
  };

  return (
    <div style={{ padding: '2rem' }}>
      {/* Manual Project Creation */}
      <div style={{ 
        background: '#f9fafb', 
        padding: '1.5rem', 
        borderRadius: '8px', 
        marginBottom: '2rem',
        border: '1px solid #e5e7eb'
      }}>
        <h2 style={{ marginBottom: '1rem', color: '#374151' }}>Add New Project</h2>
        
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
          <div>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>
              Project Title:
            </label>
            <input
              type="text"
              value={newProject.title}
              onChange={(e) => handleInputChange('title', e.target.value)}
              placeholder="e.g., Window Replacement - Historic Home"
              style={{ 
                width: '100%', 
                padding: '0.5rem', 
                border: '1px solid #d1d5db', 
                borderRadius: '4px' 
              }}
            />
          </div>
          
          <div>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>
              City:
            </label>
            <select
              value={newProject.city}
              onChange={(e) => handleInputChange('city', e.target.value)}
              style={{ 
                width: '100%', 
                padding: '0.5rem', 
                border: '1px solid #d1d5db', 
                borderRadius: '4px' 
              }}
            >
              <option value="">Select City</option>
              {Object.keys(centralNYCoordinates).map(city => (
                <option key={city} value={city}>{city}</option>
              ))}
            </select>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
          <div>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>
              Service Type:
            </label>
            <select
              value={newProject.serviceType}
              onChange={(e) => handleInputChange('serviceType', e.target.value)}
              style={{ 
                width: '100%', 
                padding: '0.5rem', 
                border: '1px solid #d1d5db', 
                borderRadius: '4px' 
              }}
            >
              <option value="windows">Windows</option>
              <option value="siding">Siding</option>
              <option value="bathrooms">Bathrooms</option>
              <option value="doors">Doors</option>
              <option value="combination">Combination</option>
            </select>
          </div>
          
          <div>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>
              Customer Name:
            </label>
            <input
              type="text"
              value={newProject.customerName}
              onChange={(e) => handleInputChange('customerName', e.target.value)}
              placeholder="e.g., Sarah Johnson"
              style={{ 
                width: '100%', 
                padding: '0.5rem', 
                border: '1px solid #d1d5db', 
                borderRadius: '4px' 
              }}
            />
          </div>
          
          <div>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>
              Rating:
            </label>
            <select
              value={newProject.rating}
              onChange={(e) => handleInputChange('rating', parseInt(e.target.value))}
              style={{ 
                width: '100%', 
                padding: '0.5rem', 
                border: '1px solid #d1d5db', 
                borderRadius: '4px' 
              }}
            >
              <option value={5}>5 Stars</option>
              <option value={4}>4 Stars</option>
              <option value={3}>3 Stars</option>
            </select>
          </div>
        </div>

        <div style={{ marginBottom: '1rem' }}>
          <label style={{ display: 'flex', alignItems: 'center', fontWeight: '500' }}>
            <input
              type="checkbox"
              checked={newProject.featured}
              onChange={(e) => handleInputChange('featured', e.target.checked)}
              style={{ marginRight: '0.5rem' }}
            />
            Featured Project
          </label>
        </div>

        <div style={{ display: 'flex', gap: '1rem' }}>
          <button
            onClick={generateProject}
            disabled={!newProject.city}
            style={{
              background: newProject.city ? '#ff4444' : '#9ca3af',
              color: 'white',
              padding: '0.75rem 1.5rem',
              border: 'none',
              borderRadius: '4px',
              cursor: newProject.city ? 'pointer' : 'not-allowed',
              fontWeight: '500'
            }}
          >
            Add Project
          </button>
          
          <button
            onClick={generateBulkProjects}
            style={{
              background: '#059669',
              color: 'white',
              padding: '0.75rem 1.5rem',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              fontWeight: '500'
            }}
          >
            Generate 15 Sample Projects
          </button>
        </div>
      </div>

      {/* Generated Projects */}
      {generatedProjects.length > 0 && (
        <div style={{ marginBottom: '2rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
            <h2 style={{ color: '#374151' }}>Generated Projects ({generatedProjects.length})</h2>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <button
                onClick={exportProjects}
                style={{
                  background: '#2563eb',
                  color: 'white',
                  padding: '0.5rem 1rem',
                  border: 'none',
                  borderRadius: '4px',
                  cursor: 'pointer',
                  fontWeight: '500'
                }}
              >
                Export Code
              </button>
              <button
                onClick={clearProjects}
                style={{
                  background: '#dc2626',
                  color: 'white',
                  padding: '0.5rem 1rem',
                  border: 'none',
                  borderRadius: '4px',
                  cursor: 'pointer',
                  fontWeight: '500'
                }}
              >
                Clear All
              </button>
            </div>
          </div>
          
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', 
            gap: '1rem',
            maxHeight: '400px',
            overflowY: 'auto',
            background: '#f3f4f6',
            padding: '1rem',
            borderRadius: '8px'
          }}>
            {generatedProjects.map((project, index) => (
              <div 
                key={project.id} 
                style={{ 
                  background: 'white', 
                  padding: '1rem', 
                  borderRadius: '6px',
                  border: '1px solid #e5e7eb',
                  fontSize: '0.9rem'
                }}
              >
                <h4 style={{ margin: '0 0 0.5rem 0', color: '#1f2937' }}>{project.title}</h4>
                <p style={{ margin: '0 0 0.25rem 0', color: '#6b7280' }}>
                  📍 {project.location.city}, NY
                </p>
                <p style={{ margin: '0 0 0.25rem 0', color: '#6b7280' }}>
                  🔧 {project.serviceType}
                </p>
                <p style={{ margin: '0 0 0.25rem 0', color: '#6b7280' }}>
                  👤 {project.testimonial.customerName}
                </p>
                {project.featured && (
                  <span style={{ 
                    background: '#fbbf24', 
                    color: '#92400e', 
                    padding: '0.125rem 0.375rem', 
                    borderRadius: '4px', 
                    fontSize: '0.75rem',
                    fontWeight: '500'
                  }}>
                    Featured
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Export Code */}
      {exportCode && (
        <div style={{ marginBottom: '2rem' }}>
          <h2 style={{ marginBottom: '1rem', color: '#374151' }}>Export Code</h2>
          <div style={{ position: 'relative' }}>
            <textarea
              value={exportCode}
              readOnly
              style={{
                width: '100%',
                height: '300px',
                fontFamily: 'monospace',
                fontSize: '0.8rem',
                padding: '1rem',
                background: '#1f2937',
                color: '#f9fafb',
                border: '1px solid #374151',
                borderRadius: '6px',
                resize: 'vertical'
              }}
            />
            <button
              onClick={() => navigator.clipboard.writeText(exportCode)}
              style={{
                position: 'absolute',
                top: '0.5rem',
                right: '0.5rem',
                background: '#374151',
                color: 'white',
                border: 'none',
                padding: '0.5rem',
                borderRadius: '4px',
                cursor: 'pointer',
                fontSize: '0.8rem'
              }}
            >
              Copy
            </button>
          </div>
          <p style={{ marginTop: '0.5rem', color: '#6b7280', fontSize: '0.9rem' }}>
            Copy this code and paste it into <code>/lib/customerProjects.ts</code> to add the projects to your map.
          </p>
        </div>
      )}
    </div>
  );
}