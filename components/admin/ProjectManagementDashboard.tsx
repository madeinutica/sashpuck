"use client";

import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { CustomerProject } from '../../lib/customerProjects';
import { mapAllCSVRowsToCustomerProjects, parseCSV } from '../../lib/csvProjectLoader';
import EnhancedProjectManager from './EnhancedProjectManager';

interface ProjectListProps {
  onEditProject: (project: CustomerProject) => void;
  onDeleteProject: (projectId: string) => void;
  onRefreshProjects: () => void;
  refreshTrigger: number;
}

function ProjectList({ onEditProject, onDeleteProject, onRefreshProjects, refreshTrigger }: ProjectListProps) {
  const [projects, setProjects] = useState<CustomerProject[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterService, setFilterService] = useState('all');
  const [sortBy, setSortBy] = useState('newest');

  const refreshProjects = useCallback(() => {
    // Update localStorage to trigger frontend refresh
    localStorage.setItem('projectsLastUpdated', Date.now().toString());
    onRefreshProjects();
  }, [onRefreshProjects]);

  useEffect(() => {
    // Load projects from API instead of CSV
    fetch(`/api/projects?t=${Date.now()}`)
      .then(response => response.json())
      .then(data => {
        if (data.success && data.projects) {
          setProjects(data.projects);
        } else {
          // Fallback to CSV if API fails
          fetch('/projects.csv')
            .then(res => res.text())
            .then(csvText => {
              const csvRows = parseCSV(csvText);
              const mappedProjects = mapAllCSVRowsToCustomerProjects(csvRows);
              setProjects(mappedProjects);
            })
            .catch(error => {
              console.error('Error loading CSV fallback:', error);
            });
        }
      })
      .catch(error => {
        console.error('Error loading projects from API:', error);
        // Fallback to CSV
        fetch('/projects.csv')
          .then(res => res.text())
          .then(csvText => {
            const csvRows = parseCSV(csvText);
            const mappedProjects = mapAllCSVRowsToCustomerProjects(csvRows);
            setProjects(mappedProjects);
          })
          .catch(csvError => {
            console.error('Error loading CSV fallback:', csvError);
          });
      })
      .finally(() => {
        setLoading(false);
      });
  }, [refreshTrigger]);

  // Listen for project updates from other tabs/windows
  useEffect(() => {
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === 'projectsLastUpdated') {
        // Trigger refresh
        refreshProjects();
      }
    };

    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, [refreshProjects]);

  const handleDelete = async (projectId: string) => {
    if (!confirm('Are you sure you want to delete this project? This action cannot be undone.')) {
      return;
    }

    try {
      const response = await fetch(`/api/projects/${projectId}`, {
        method: 'DELETE'
      });

      if (response.ok) {
        // Refresh projects from API after successful deletion
        onRefreshProjects();
        onDeleteProject(projectId);
      } else {
        alert('Failed to delete project');
      }
    } catch (error) {
      console.error('Error deleting project:', error);
      alert('Error deleting project');
    }
  };

  // Filter and sort projects
  const filteredProjects = projects.filter(project => {
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.location.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.testimonial.customerName.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesService = filterService === 'all' || project.serviceType === filterService;
    
    return matchesSearch && matchesService;
  });

  const sortedProjects = [...filteredProjects].sort((a, b) => {
    switch (sortBy) {
      case 'newest':
        return new Date(b.completedDate).getTime() - new Date(a.completedDate).getTime();
      case 'oldest':
        return new Date(a.completedDate).getTime() - new Date(b.completedDate).getTime();
      case 'title':
        return a.title.localeCompare(b.title);
      case 'city':
        return a.location.city.localeCompare(b.location.city);
      case 'rating':
        return b.testimonial.rating - a.testimonial.rating;
      default:
        return 0;
    }
  });

  if (loading) {
    return (
      <div style={{ padding: '2rem', textAlign: 'center' }}>
        <div style={{
          width: '40px',
          height: '40px',
          border: '3px solid #e5e7eb',
          borderTop: '3px solid #ff4444',
          borderRadius: '50%',
          animation: 'spin 1s linear infinite',
          margin: '0 auto 1rem'
        }} />
        <p>Loading projects...</p>
      </div>
    );
  }

  return (
    <div style={{ padding: '2rem' }}>
      {/* Header */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '2rem'
      }}>
        <div>
          <h2 style={{ margin: '0 0 0.5rem 0', color: '#1f2937' }}>
            All Projects ({projects.length})
          </h2>
          <p style={{ margin: 0, color: '#6b7280' }}>
            Manage your customer projects and testimonials
          </p>
        </div>
      </div>

      {/* Filters and Search */}
      <div style={{
        background: '#f9fafb',
        padding: '1.5rem',
        borderRadius: '0.5rem',
        marginBottom: '2rem',
        border: '1px solid #e5e7eb'
      }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr auto auto', gap: '1rem', alignItems: 'end' }}>
          <div>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>
              Search Projects
            </label>
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search by title, city, or customer name..."
              style={{
                width: '100%',
                padding: '0.5rem',
                border: '1px solid #d1d5db',
                borderRadius: '0.25rem'
              }}
            />
          </div>
          
          <div>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>
              Service Type
            </label>
            <select
              value={filterService}
              onChange={(e) => setFilterService(e.target.value)}
              style={{
                padding: '0.5rem',
                border: '1px solid #d1d5db',
                borderRadius: '0.25rem',
                minWidth: '150px'
              }}
            >
              <option value="all">All Services</option>
              <option value="windows">Windows</option>
              <option value="siding">Siding</option>
              <option value="bathrooms">Bathrooms</option>
              <option value="doors">Doors</option>
              <option value="combination">Combination</option>
            </select>
          </div>
          
          <div>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>
              Sort By
            </label>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              style={{
                padding: '0.5rem',
                border: '1px solid #d1d5db',
                borderRadius: '0.25rem',
                minWidth: '150px'
              }}
            >
              <option value="newest">Newest First</option>
              <option value="oldest">Oldest First</option>
              <option value="title">Title A-Z</option>
              <option value="city">City A-Z</option>
              <option value="rating">Highest Rating</option>
            </select>
          </div>
        </div>
      </div>

      {/* Projects Grid */}
      {sortedProjects.length === 0 ? (
        <div style={{
          textAlign: 'center',
          padding: '3rem',
          background: '#f9fafb',
          borderRadius: '0.5rem',
          border: '2px dashed #d1d5db'
        }}>
          <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🔍</div>
          <h3 style={{ color: '#374151', marginBottom: '0.5rem' }}>No projects found</h3>
          <p style={{ color: '#6b7280' }}>
            {searchTerm || filterService !== 'all' 
              ? 'Try adjusting your search or filters'
              : 'No projects have been added yet'
            }
          </p>
        </div>
      ) : (
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(400px, 1fr))',
          gap: '1.5rem'
        }}>
          {sortedProjects.map((project) => (
            <div key={project.id} style={{
              background: 'white',
              border: '1px solid #e5e7eb',
              borderRadius: '0.75rem',
              overflow: 'hidden',
              boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
              transition: 'transform 0.2s ease, box-shadow 0.2s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 1px 3px rgba(0, 0, 0, 0.1)';
            }}>
              {/* Project Image */}
              {project.photos.after[0] && (
                <div style={{ height: '200px', position: 'relative' }}>
                  <Image
                    src={project.photos.after[0]}
                    alt={project.title}
                    width={400}
                    height={200}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                  {project.featured && (
                    <div style={{
                      position: 'absolute',
                      top: '0.5rem',
                      right: '0.5rem',
                      background: '#fbbf24',
                      color: '#92400e',
                      padding: '0.25rem 0.75rem',
                      borderRadius: '1rem',
                      fontSize: '0.75rem',
                      fontWeight: '600'
                    }}>
                      ⭐ Featured
                    </div>
                  )}
                </div>
              )}

              {/* Project Content */}
              <div style={{ padding: '1.5rem' }}>
                <div style={{ marginBottom: '1rem' }}>
                  <h3 style={{
                    margin: '0 0 0.5rem 0',
                    color: '#1f2937',
                    fontSize: '1.125rem',
                    fontWeight: '600'
                  }}>
                    {project.title}
                  </h3>
                  
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.5rem' }}>
                    <span style={{ color: '#6b7280', fontSize: '0.875rem' }}>
                      📍 {project.location.city}, NY
                    </span>
                    <span style={{ color: '#6b7280', fontSize: '0.875rem' }}>
                      🔧 {project.serviceType}
                    </span>
                  </div>
                  
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <span style={{ color: '#6b7280', fontSize: '0.875rem' }}>
                      👤 {project.testimonial.customerName}
                    </span>
                    <div style={{ display: 'flex' }}>
                      {Array.from({ length: project.testimonial.rating }).map((_, i) => (
                        <span key={i} style={{ color: '#fbbf24', fontSize: '0.875rem' }}>⭐</span>
                      ))}
                    </div>
                  </div>
                </div>

                <p style={{
                  color: '#6b7280',
                  fontSize: '0.875rem',
                  margin: '0 0 1rem 0',
                  lineHeight: '1.4',
                  display: '-webkit-box',
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: 'vertical',
                  overflow: 'hidden'
                }}>
                  {project.projectDetails.description}
                </p>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ color: '#6b7280', fontSize: '0.75rem' }}>
                    {new Date(project.completedDate).toLocaleDateString()}
                  </span>
                  
                  <div style={{ display: 'flex', gap: '0.5rem' }}>
                    <button
                      onClick={() => onEditProject(project)}
                      style={{
                        background: '#2563eb',
                        color: 'white',
                        border: 'none',
                        padding: '0.5rem 1rem',
                        borderRadius: '0.25rem',
                        fontSize: '0.75rem',
                        fontWeight: '500',
                        cursor: 'pointer'
                      }}
                    >
                      ✏️ Edit
                    </button>
                    <button
                      onClick={() => handleDelete(project.id)}
                      style={{
                        background: '#dc2626',
                        color: 'white',
                        border: 'none',
                        padding: '0.5rem 1rem',
                        borderRadius: '0.25rem',
                        fontSize: '0.75rem',
                        fontWeight: '500',
                        cursor: 'pointer'
                      }}
                    >
                      🗑️ Delete
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default function ProjectManagementDashboard() {
  const [currentView, setCurrentView] = useState<'list' | 'add' | 'edit'>('list');
  const [editingProject, setEditingProject] = useState<CustomerProject | null>(null);
  const [refreshTrigger, setRefreshTrigger] = useState(0);

  const handleEditProject = (project: CustomerProject) => {
    setEditingProject(project);
    setCurrentView('edit');
  };

  const handleDeleteProject = (projectId: string) => {
    // Project already removed from list in ProjectList component
    console.log('Project deleted:', projectId);
  };

  const handleRefreshProjects = () => {
    // Update localStorage to trigger frontend refresh
    localStorage.setItem('projectsLastUpdated', Date.now().toString());
    setRefreshTrigger(prev => prev + 1);
  };

  const handleProjectSaved = () => {
    handleRefreshProjects();
    setCurrentView('list');
    setEditingProject(null);
  };

  return (
    <div>
      {/* Navigation Tabs */}
      <div style={{
        background: 'white',
        borderBottom: '1px solid #e5e7eb',
        padding: '0 2rem'
      }}>
        <div style={{ display: 'flex', gap: '2rem' }}>
          <button
            onClick={() => setCurrentView('list')}
            style={{
              background: 'none',
              border: 'none',
              padding: '1rem 0',
              fontSize: '0.875rem',
              fontWeight: '500',
              color: currentView === 'list' ? '#ff4444' : '#6b7280',
              borderBottom: currentView === 'list' ? '2px solid #ff4444' : '2px solid transparent',
              cursor: 'pointer'
            }}
          >
            📋 All Projects
          </button>
          <button
            onClick={() => {
              setCurrentView('add');
              setEditingProject(null);
            }}
            style={{
              background: 'none',
              border: 'none',
              padding: '1rem 0',
              fontSize: '0.875rem',
              fontWeight: '500',
              color: currentView === 'add' ? '#ff4444' : '#6b7280',
              borderBottom: currentView === 'add' ? '2px solid #ff4444' : '2px solid transparent',
              cursor: 'pointer'
            }}
          >
            ➕ Add New Project
          </button>
          {currentView === 'edit' && (
            <button
              style={{
                background: 'none',
                border: 'none',
                padding: '1rem 0',
                fontSize: '0.875rem',
                fontWeight: '500',
                color: '#ff4444',
                borderBottom: '2px solid #ff4444',
                cursor: 'default'
              }}
            >
              ✏️ Edit Project
            </button>
          )}
        </div>
      </div>

      {/* Content */}
      {currentView === 'list' && (
        <ProjectList 
          onEditProject={handleEditProject}
          onDeleteProject={handleDeleteProject}
          onRefreshProjects={handleRefreshProjects}
          refreshTrigger={refreshTrigger}
        />
      )}
      
      {(currentView === 'add' || currentView === 'edit') && (
        <EnhancedProjectManager 
          editingProject={editingProject}
          onProjectSaved={handleProjectSaved}
        />
      )}
    </div>
  );
}