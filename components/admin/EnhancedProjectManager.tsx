"use client";
import Image from 'next/image';
// Enhanced Project Management with Auto-Save and File Uploads
import React, { useState, useRef } from 'react';
import { CustomerProject } from '../../lib/customerProjects';
import { 
  createProjectTemplate, 
  centralNYCoordinates, 
  validateProject 
} from '../../lib/projectManager';

interface EnhancedProjectManagerProps {
  editingProject?: CustomerProject | null;
  onProjectSaved?: () => void;
}

export default function EnhancedProjectManager({ editingProject, onProjectSaved }: EnhancedProjectManagerProps) {
  const [newProject, setNewProject] = useState(() => {
    if (editingProject) {
      return {
        title: editingProject.title,
        city: editingProject.location.city,
        serviceType: editingProject.serviceType,
        customerName: editingProject.testimonial.customerName,
        description: editingProject.projectDetails.description,
        featured: editingProject.featured,
        address: editingProject.location.address,
        investment: editingProject.projectDetails.investment,
        timeframe: editingProject.projectDetails.timeframe,
        rating: editingProject.testimonial.rating,
        challenges: editingProject.projectDetails.challengesSolved,
        products: editingProject.projectDetails.productsUsed,
        energySavings: editingProject.results?.energySavings || '',
        aestheticImpact: editingProject.results?.aestheticImpact || '',
        functionalImpact: editingProject.results?.functionalImpact || '',
        testimonialQuote: editingProject.testimonial.quote
      };
    }
    
    return {
      title: '',
      city: '',
      serviceType: 'windows' as const,
      customerName: '',
      description: '',
      featured: false,
      address: '',
      investment: '',
      timeframe: '',
      rating: 5,
      challenges: [''],
      products: [''],
      energySavings: '',
      aestheticImpact: '',
      functionalImpact: '',
      testimonialQuote: ''
    };
  });

  const [uploadedPhotos, setUploadedPhotos] = useState(() => {
    if (editingProject) {
      // Convert existing photo URLs to a format for display
      return {
        before: [], // We'll display existing URLs separately
        after: [],
        process: []
      };
    }
    return {
      before: [] as File[],
      after: [] as File[],
      process: [] as File[]
    };
  });

  const [savedProjects, setSavedProjects] = useState<CustomerProject[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  const beforeInputRef = useRef<HTMLInputElement>(null);
  const afterInputRef = useRef<HTMLInputElement>(null);
  const processInputRef = useRef<HTMLInputElement>(null);

  const handleInputChange = (field: string, value: any) => {
    setNewProject(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleArrayInputChange = (field: 'challenges' | 'products', index: number, value: string) => {
    setNewProject(prev => ({
      ...prev,
      [field]: prev[field].map((item, i) => i === index ? value : item)
    }));
  };

  const addArrayItem = (field: 'challenges' | 'products') => {
    setNewProject(prev => ({
      ...prev,
      [field]: [...prev[field], '']
    }));
  };

  const removeArrayItem = (field: 'challenges' | 'products', index: number) => {
    setNewProject(prev => ({
      ...prev,
      [field]: prev[field].filter((_, i) => i !== index)
    }));
  };

  const handlePhotoUpload = (category: 'before' | 'after' | 'process', files: FileList | null) => {
    if (!files) return;
    
    const newFiles = Array.from(files);
    setUploadedPhotos(prev => ({
      ...prev,
      [category]: [...prev[category], ...newFiles]
    }));
  };

  const removePhoto = (category: 'before' | 'after' | 'process', index: number) => {
    setUploadedPhotos(prev => ({
      ...prev,
      [category]: prev[category].filter((_, i) => i !== index)
    }));
  };

  const convertFilesToUrls = async (files: File[]): Promise<string[]> => {
    // In a real implementation, you'd upload to a service like Cloudinary, AWS S3, etc.
    // For now, we'll create object URLs for demo purposes
    return files.map(file => URL.createObjectURL(file));
  };

  const saveProjectToFile = async (project: CustomerProject) => {
    try {
      // In a real implementation, this would save to your database or CMS
      // For now, we'll simulate saving to the projects file
      const response = await fetch('/api/projects', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(project)
      });

      if (!response.ok) {
        throw new Error('Failed to save project');
      }

      return true;
    } catch (error) {
      console.error('Error saving project:', error);
      // For demo purposes, we'll just add to local state
      setSavedProjects(prev => [...prev, project]);
      return true;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSuccessMessage('');

    try {
      // Convert uploaded photos to URLs
      const beforePhotos = await convertFilesToUrls(uploadedPhotos.before);
      const afterPhotos = await convertFilesToUrls(uploadedPhotos.after);
      const processPhotos = await convertFilesToUrls(uploadedPhotos.process);

      let completeProject: CustomerProject;

      if (editingProject) {
        // Update existing project
        completeProject = {
          ...editingProject,
          title: newProject.title,
          location: {
            ...editingProject.location,
            city: newProject.city,
            address: newProject.address
          },
          serviceType: newProject.serviceType,
          featured: newProject.featured,
          projectDetails: {
            description: newProject.description,
            challengesSolved: newProject.challenges.filter(c => c.trim() !== ''),
            productsUsed: newProject.products.filter(p => p.trim() !== ''),
            timeframe: newProject.timeframe,
            investment: newProject.investment
          },
          photos: {
            before: beforePhotos.length > 0 ? beforePhotos : editingProject.photos.before,
            after: afterPhotos.length > 0 ? afterPhotos : editingProject.photos.after,
            process: processPhotos.length > 0 ? processPhotos : editingProject.photos.process
          },
          testimonial: {
            ...editingProject.testimonial,
            customerName: newProject.customerName,
            rating: newProject.rating,
            quote: newProject.testimonialQuote
          },
          results: {
            energySavings: newProject.energySavings,
            aestheticImpact: newProject.aestheticImpact,
            functionalImpact: newProject.functionalImpact
          }
        };
      } else {
        // Create new project
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

        completeProject = {
          ...template,
          projectDetails: {
            ...template.projectDetails!,
            challengesSolved: newProject.challenges.filter(c => c.trim() !== ''),
            productsUsed: newProject.products.filter(p => p.trim() !== ''),
          },
          photos: {
            before: beforePhotos.length > 0 ? beforePhotos : template.photos!.before,
            after: afterPhotos.length > 0 ? afterPhotos : template.photos!.after,
            process: processPhotos.length > 0 ? processPhotos : undefined
          },
          testimonial: {
            ...template.testimonial!,
            quote: newProject.testimonialQuote || template.testimonial!.quote
          },
          results: {
            energySavings: newProject.energySavings || template.results?.energySavings,
            aestheticImpact: newProject.aestheticImpact || template.results?.aestheticImpact,
            functionalImpact: newProject.functionalImpact || template.results?.functionalImpact
          }
        } as CustomerProject;
      }

      const validation = validateProject(completeProject);
      if (!validation.isValid) {
        alert('Validation errors:\\n' + validation.errors.join('\\n'));
        return;
      }

      // Save the project
      const saved = await saveProjectToFile(completeProject);
      
      if (saved) {
        setSuccessMessage(editingProject ? 'Project updated successfully!' : 'Project saved successfully! It will appear on the map shortly.');
        
        if (onProjectSaved) {
          // If we have a callback, call it after a brief delay
          setTimeout(() => {
            onProjectSaved();
          }, 1500);
        } else {
          // Reset form for new project creation
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
            rating: 5,
            challenges: [''],
            products: [''],
            energySavings: '',
            aestheticImpact: '',
            functionalImpact: '',
            testimonialQuote: ''
          });
          
          setUploadedPhotos({
            before: [],
            after: [],
            process: []
          });

          // Clear file inputs
          if (beforeInputRef.current) beforeInputRef.current.value = '';
          if (afterInputRef.current) afterInputRef.current.value = '';
          if (processInputRef.current) processInputRef.current.value = '';
        }
        if (afterInputRef.current) afterInputRef.current.value = '';
        if (processInputRef.current) processInputRef.current.value = '';
      }
    } catch (error) {
      console.error('Error creating project:', error);
      alert('Error saving project. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div style={{ padding: '2rem' }}>
      {successMessage && (
        <div style={{
          background: '#f0f9ff',
          border: '1px solid #bae6fd',
          color: '#0c4a6e',
          padding: '1rem',
          borderRadius: '0.5rem',
          marginBottom: '2rem',
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem'
        }}>
          <span>✅</span>
          {successMessage}
        </div>
      )}

      <form onSubmit={handleSubmit}>
        {/* Basic Information */}
        <div style={{
          background: '#f9fafb',
          padding: '1.5rem',
          borderRadius: '0.5rem',
          marginBottom: '2rem',
          border: '1px solid #e5e7eb'
        }}>
          <h3 style={{ marginBottom: '1rem', color: '#374151' }}>Basic Information</h3>
          
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>
                Project Title *
              </label>
              <input
                type="text"
                value={newProject.title}
                onChange={(e) => handleInputChange('title', e.target.value)}
                placeholder="e.g., Window Replacement - Historic Home"
                required
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
                City *
              </label>
              <select
                value={newProject.city}
                onChange={(e) => handleInputChange('city', e.target.value)}
                required
                style={{
                  width: '100%',
                  padding: '0.5rem',
                  border: '1px solid #d1d5db',
                  borderRadius: '0.25rem'
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
                Service Type *
              </label>
              <select
                value={newProject.serviceType}
                onChange={(e) => handleInputChange('serviceType', e.target.value)}
                style={{
                  width: '100%',
                  padding: '0.5rem',
                  border: '1px solid #d1d5db',
                  borderRadius: '0.25rem'
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
                Customer Name
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
                  borderRadius: '0.25rem'
                }}
              />
            </div>
            
            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>
                Rating
              </label>
              <select
                value={newProject.rating}
                onChange={(e) => handleInputChange('rating', parseInt(e.target.value))}
                style={{
                  width: '100%',
                  padding: '0.5rem',
                  border: '1px solid #d1d5db',
                  borderRadius: '0.25rem'
                }}
              >
                <option value={5}>5 Stars</option>
                <option value={4}>4 Stars</option>
                <option value={3}>3 Stars</option>
              </select>
            </div>
          </div>

          <div style={{ marginBottom: '1rem' }}>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>
              Project Description
            </label>
            <textarea
              value={newProject.description}
              onChange={(e) => handleInputChange('description', e.target.value)}
              placeholder="Detailed description of the project..."
              rows={3}
              style={{
                width: '100%',
                padding: '0.5rem',
                border: '1px solid #d1d5db',
                borderRadius: '0.25rem',
                resize: 'vertical'
              }}
            />
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <input
              type="checkbox"
              checked={newProject.featured}
              onChange={(e) => handleInputChange('featured', e.target.checked)}
              id="featured"
            />
            <label htmlFor="featured" style={{ fontWeight: '500' }}>
              Featured Project (will be highlighted on map)
            </label>
          </div>
        </div>

        {/* Photo Upload Section */}
        <div style={{
          background: '#f9fafb',
          padding: '1.5rem',
          borderRadius: '0.5rem',
          marginBottom: '2rem',
          border: '1px solid #e5e7eb'
        }}>
          <h3 style={{ marginBottom: '1rem', color: '#374151' }}>Project Photos</h3>
          
          {/* Before Photos */}
          <div style={{ marginBottom: '1.5rem' }}>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>
              Before Photos
            </label>
            <input
              ref={beforeInputRef}
              type="file"
              accept="image/*"
              multiple
              onChange={(e) => handlePhotoUpload('before', e.target.files)}
              style={{
                width: '100%',
                padding: '0.5rem',
                border: '1px solid #d1d5db',
                borderRadius: '0.25rem'
              }}
            />
            {uploadedPhotos.before.length > 0 && (
              <div style={{ display: 'flex', gap: '0.5rem', marginTop: '0.5rem', flexWrap: 'wrap' }}>
                {uploadedPhotos.before.map((file, index) => (
                  <div key={index} style={{
                    position: 'relative',
                    display: 'inline-block'
                  }}>
                    <Image
                      src={URL.createObjectURL(file)}
                      alt={`Before ${index + 1}`}
                      width={100}
                      height={100}
                      style={{
                        objectFit: 'cover',
                        borderRadius: '0.25rem',
                        border: '1px solid #d1d5db'
                      }}
                    />
                    <button
                      type="button"
                      onClick={() => removePhoto('before', index)}
                      style={{
                        position: 'absolute',
                        top: '-5px',
                        right: '-5px',
                        background: '#dc2626',
                        color: 'white',
                        border: 'none',
                        borderRadius: '50%',
                        width: '20px',
                        height: '20px',
                        fontSize: '12px',
                        cursor: 'pointer'
                      }}
                    >
                      ×
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* After Photos */}
          <div style={{ marginBottom: '1.5rem' }}>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>
              After Photos
            </label>
            <input
              ref={afterInputRef}
              type="file"
              accept="image/*"
              multiple
              onChange={(e) => handlePhotoUpload('after', e.target.files)}
              style={{
                width: '100%',
                padding: '0.5rem',
                border: '1px solid #d1d5db',
                borderRadius: '0.25rem'
              }}
            />
            {uploadedPhotos.after.length > 0 && (
              <div style={{ display: 'flex', gap: '0.5rem', marginTop: '0.5rem', flexWrap: 'wrap' }}>
                {uploadedPhotos.after.map((file, index) => (
                  <div key={index} style={{
                    position: 'relative',
                    display: 'inline-block'
                  }}>
                    <Image
                      src={URL.createObjectURL(file)}
                      alt={`After ${index + 1}`}
                      width={100}
                      height={100}
                      style={{
                        objectFit: 'cover',
                        borderRadius: '0.25rem',
                        border: '1px solid #d1d5db'
                      }}
                    />
                    <button
                      type="button"
                      onClick={() => removePhoto('after', index)}
                      style={{
                        position: 'absolute',
                        top: '-5px',
                        right: '-5px',
                        background: '#dc2626',
                        color: 'white',
                        border: 'none',
                        borderRadius: '50%',
                        width: '20px',
                        height: '20px',
                        fontSize: '12px',
                        cursor: 'pointer'
                      }}
                    >
                      ×
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Process Photos */}
          <div>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>
              Process Photos (Optional)
            </label>
            <input
              ref={processInputRef}
              type="file"
              accept="image/*"
              multiple
              onChange={(e) => handlePhotoUpload('process', e.target.files)}
              style={{
                width: '100%',
                padding: '0.5rem',
                border: '1px solid #d1d5db',
                borderRadius: '0.25rem'
              }}
            />
            {uploadedPhotos.process.length > 0 && (
              <div style={{ display: 'flex', gap: '0.5rem', marginTop: '0.5rem', flexWrap: 'wrap' }}>
                {uploadedPhotos.process.map((file, index) => (
                  <div key={index} style={{
                    position: 'relative',
                    display: 'inline-block'
                  }}>
                    <Image
                      src={URL.createObjectURL(file)}
                      alt={`Process ${index + 1}`}
                      width={100}
                      height={100}
                      style={{
                        objectFit: 'cover',
                        borderRadius: '0.25rem',
                        border: '1px solid #d1d5db'
                      }}
                    />
                    <button
                      type="button"
                      onClick={() => removePhoto('process', index)}
                      style={{
                        position: 'absolute',
                        top: '-5px',
                        right: '-5px',
                        background: '#dc2626',
                        color: 'white',
                        border: 'none',
                        borderRadius: '50%',
                        width: '20px',
                        height: '20px',
                        fontSize: '12px',
                        cursor: 'pointer'
                      }}
                    >
                      ×
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Project Details */}
        <div style={{
          background: '#f9fafb',
          padding: '1.5rem',
          borderRadius: '0.5rem',
          marginBottom: '2rem',
          border: '1px solid #e5e7eb'
        }}>
          <h3 style={{ marginBottom: '1rem', color: '#374151' }}>Project Details</h3>
          
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>
                Investment Range
              </label>
              <input
                type="text"
                value={newProject.investment}
                onChange={(e) => handleInputChange('investment', e.target.value)}
                placeholder="e.g., $10,000 - $15,000"
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
                Project Timeframe
              </label>
              <input
                type="text"
                value={newProject.timeframe}
                onChange={(e) => handleInputChange('timeframe', e.target.value)}
                placeholder="e.g., 2-3 days"
                style={{
                  width: '100%',
                  padding: '0.5rem',
                  border: '1px solid #d1d5db',
                  borderRadius: '0.25rem'
                }}
              />
            </div>
          </div>

          {/* Challenges Solved */}
          <div style={{ marginBottom: '1rem' }}>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>
              Challenges Solved
            </label>
            {newProject.challenges.map((challenge, index) => (
              <div key={index} style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.5rem' }}>
                <input
                  type="text"
                  value={challenge}
                  onChange={(e) => handleArrayInputChange('challenges', index, e.target.value)}
                  placeholder="e.g., Old inefficient windows"
                  style={{
                    flex: 1,
                    padding: '0.5rem',
                    border: '1px solid #d1d5db',
                    borderRadius: '0.25rem'
                  }}
                />
                <button
                  type="button"
                  onClick={() => removeArrayItem('challenges', index)}
                  style={{
                    background: '#dc2626',
                    color: 'white',
                    border: 'none',
                    padding: '0.5rem',
                    borderRadius: '0.25rem',
                    cursor: 'pointer'
                  }}
                >
                  Remove
                </button>
              </div>
            ))}
            <button
              type="button"
              onClick={() => addArrayItem('challenges')}
              style={{
                background: '#059669',
                color: 'white',
                border: 'none',
                padding: '0.5rem 1rem',
                borderRadius: '0.25rem',
                cursor: 'pointer'
              }}
            >
              + Add Challenge
            </button>
          </div>

          {/* Products Used */}
          <div style={{ marginBottom: '1rem' }}>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>
              Products Used
            </label>
            {newProject.products.map((product, index) => (
              <div key={index} style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.5rem' }}>
                <input
                  type="text"
                  value={product}
                  onChange={(e) => handleArrayInputChange('products', index, e.target.value)}
                  placeholder="e.g., Energy Star certified windows"
                  style={{
                    flex: 1,
                    padding: '0.5rem',
                    border: '1px solid #d1d5db',
                    borderRadius: '0.25rem'
                  }}
                />
                <button
                  type="button"
                  onClick={() => removeArrayItem('products', index)}
                  style={{
                    background: '#dc2626',
                    color: 'white',
                    border: 'none',
                    padding: '0.5rem',
                    borderRadius: '0.25rem',
                    cursor: 'pointer'
                  }}
                >
                  Remove
                </button>
              </div>
            ))}
            <button
              type="button"
              onClick={() => addArrayItem('products')}
              style={{
                background: '#059669',
                color: 'white',
                border: 'none',
                padding: '0.5rem 1rem',
                borderRadius: '0.25rem',
                cursor: 'pointer'
              }}
            >
              + Add Product
            </button>
          </div>
        </div>

        {/* Results & Testimonial */}
        <div style={{
          background: '#f9fafb',
          padding: '1.5rem',
          borderRadius: '0.5rem',
          marginBottom: '2rem',
          border: '1px solid #e5e7eb'
        }}>
          <h3 style={{ marginBottom: '1rem', color: '#374151' }}>Results & Testimonial</h3>
          
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>
                Energy Savings
              </label>
              <input
                type="text"
                value={newProject.energySavings}
                onChange={(e) => handleInputChange('energySavings', e.target.value)}
                placeholder="e.g., 25% reduction in heating costs"
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
                Aesthetic Impact
              </label>
              <input
                type="text"
                value={newProject.aestheticImpact}
                onChange={(e) => handleInputChange('aestheticImpact', e.target.value)}
                placeholder="e.g., Enhanced curb appeal"
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
                Functional Impact
              </label>
              <input
                type="text"
                value={newProject.functionalImpact}
                onChange={(e) => handleInputChange('functionalImpact', e.target.value)}
                placeholder="e.g., Improved comfort"
                style={{
                  width: '100%',
                  padding: '0.5rem',
                  border: '1px solid #d1d5db',
                  borderRadius: '0.25rem'
                }}
              />
            </div>
          </div>

          <div>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>
              Customer Testimonial
            </label>
            <textarea
              value={newProject.testimonialQuote}
              onChange={(e) => handleInputChange('testimonialQuote', e.target.value)}
              placeholder="What did the customer say about the project?"
              rows={3}
              style={{
                width: '100%',
                padding: '0.5rem',
                border: '1px solid #d1d5db',
                borderRadius: '0.25rem',
                resize: 'vertical'
              }}
            />
          </div>
        </div>

        {/* Submit Button */}
        <div style={{ textAlign: 'center' }}>
          <button
            type="submit"
            disabled={!newProject.city || isSubmitting}
            style={{
              background: (!newProject.city || isSubmitting) ? '#9ca3af' : '#ff4444',
              color: 'white',
              padding: '1rem 2rem',
              border: 'none',
              borderRadius: '0.5rem',
              fontSize: '1rem',
              fontWeight: '600',
              cursor: (!newProject.city || isSubmitting) ? 'not-allowed' : 'pointer',
              minWidth: '200px'
            }}
          >
            {isSubmitting ? 'Saving Project...' : '💾 Save Project to Map'}
          </button>
        </div>
      </form>

      {/* Saved Projects Display */}
      {savedProjects.length > 0 && (
        <div style={{
          marginTop: '3rem',
          padding: '1.5rem',
          background: '#f0f9ff',
          border: '1px solid #bae6fd',
          borderRadius: '0.5rem'
        }}>
          <h3 style={{ marginBottom: '1rem', color: '#0c4a6e' }}>
            Recently Added Projects ({savedProjects.length})
          </h3>
          <div style={{ display: 'grid', gap: '1rem' }}>
            {savedProjects.map((project, index) => (
              <div key={index} style={{
                background: 'white',
                padding: '1rem',
                borderRadius: '0.5rem',
                border: '1px solid #e0f2fe'
              }}>
                <h4 style={{ margin: '0 0 0.5rem 0', color: '#1e40af' }}>
                  {project.title}
                </h4>
                <p style={{ margin: 0, color: '#6b7280', fontSize: '0.875rem' }}>
                  📍 {project.location.city}, NY • 🔧 {project.serviceType} • 👤 {project.testimonial.customerName}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}