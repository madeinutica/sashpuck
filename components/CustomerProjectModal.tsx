"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { CustomerProject, serviceTypeConfig } from '../lib/customerProjects';

interface CustomerProjectModalProps {
  project: CustomerProject | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function CustomerProjectModal({ project, isOpen, onClose }: CustomerProjectModalProps) {
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
  const [showBefore, setShowBefore] = useState(false);

  if (!isOpen || !project) return null;

  const allPhotos = showBefore ? project.photos.before : project.photos.after;
  const serviceConfig = serviceTypeConfig[project.serviceType];

  const nextPhoto = () => {
    setCurrentPhotoIndex((prev) => (prev + 1) % allPhotos.length);
  };

  const prevPhoto = () => {
    setCurrentPhotoIndex((prev) => (prev - 1 + allPhotos.length) % allPhotos.length);
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="project-modal" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Close modal">
          ✕
        </button>

        <div className="modal-header">
          <div className="project-title-section">
            <h2 className="project-title">{project.title}</h2>
            <div className="project-meta">
              <span className="project-location">
                📍 {project.location.city}, {project.location.state}
              </span>
              <div 
                className="service-badge modal-badge"
                style={{ backgroundColor: serviceConfig.color }}
              >
                {serviceConfig.icon} {serviceConfig.label}
              </div>
              {project.featured && (
                <div className="featured-badge">
                  ⭐ Featured Project
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="modal-content">
          <div className="modal-gallery">
            <div className="gallery-controls">
              <button 
                className={`before-after-toggle ${showBefore ? 'active' : ''}`}
                onClick={() => {
                  setShowBefore(true);
                  setCurrentPhotoIndex(0);
                }}
              >
                Before
              </button>
              <button 
                className={`before-after-toggle ${!showBefore ? 'active' : ''}`}
                onClick={() => {
                  setShowBefore(false);
                  setCurrentPhotoIndex(0);
                }}
              >
                After
              </button>
            </div>

            <div className="photo-gallery">
              <div className="photo-container">
                <Image 
                  src={allPhotos[currentPhotoIndex]} 
                  alt={`${project.title} - ${showBefore ? 'Before' : 'After'}`}
                  width={600} height={400}
                  className="gallery-photo"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = '/images/misc/energy-icon.png'; // Fallback image
                  }}
                />
                
                {allPhotos.length > 1 && (
                  <>
                    <button className="photo-nav prev" onClick={prevPhoto} aria-label="Previous photo">
                      ‹
                    </button>
                    <button className="photo-nav next" onClick={nextPhoto} aria-label="Next photo">
                      ›
                    </button>
                  </>
                )}
                
                <div className="photo-indicator">
                  {currentPhotoIndex + 1} of {allPhotos.length}
                </div>
              </div>

              <div className="photo-thumbnails">
                {allPhotos.map((photo, index) => (
                  <button
                    key={index}
                    className={`thumbnail ${index === currentPhotoIndex ? 'active' : ''}`}
                    onClick={() => setCurrentPhotoIndex(index)}
                  >
                    <Image 
                      src={photo} 
                      alt={`Thumbnail ${index + 1}`} 
                      width={100} 
                      height={75}
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = '/images/misc/energy-icon.png'; // Fallback image
                      }}
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="modal-details">
            <div className="project-description">
              <h3>Project Overview</h3>
              <p>{project.projectDetails.description}</p>
            </div>

            <div className="project-challenges">
              <h3>Challenges Solved</h3>
              <ul>
                {project.projectDetails.challengesSolved.map((challenge, index) => (
                  <li key={index}>{challenge}</li>
                ))}
              </ul>
            </div>

            <div className="project-products">
              <h3>Products & Materials</h3>
              <div className="products-grid">
                {project.projectDetails.productsUsed.map((product, index) => (
                  <span key={index} className="product-tag">
                    {product}
                  </span>
                ))}
              </div>
            </div>

            <div className="project-specs">
              <div className="spec-item">
                <strong>Timeline:</strong> {project.projectDetails.timeframe}
              </div>
            </div>

            {project.results && (
              <div className="project-results">
                <h3>Results Achieved</h3>
                <div className="results-grid">
                  {project.results.energySavings && (
                    <div className="result-item">
                      <span className="result-icon">⚡</span>
                      <span className="result-text">{project.results.energySavings}</span>
                    </div>
                  )}
                  {project.results.aestheticImpact && (
                    <div className="result-item">
                      <span className="result-icon">✨</span>
                      <span className="result-text">{project.results.aestheticImpact}</span>
                    </div>
                  )}
                  {project.results.functionalImpact && (
                    <div className="result-item">
                      <span className="result-icon">🔧</span>
                      <span className="result-text">{project.results.functionalImpact}</span>
                    </div>
                  )}
                </div>
              </div>
            )}

            <div className="customer-testimonial">
              <h3>Customer Review</h3>
              <div className="testimonial-content">
                <div className="testimonial-rating">
                  {Array.from({ length: project.testimonial.rating }).map((_, i) => (
                    <span key={i} className="star">⭐</span>
                  ))}
                  <span className="rating-number">({project.testimonial.rating}/5)</span>
                </div>
                <blockquote className="testimonial-quote">
                  &quot;{project.testimonial.quote}&quot;
                </blockquote>
                <cite className="testimonial-author">
                  — {project.testimonial.customerName}, {project.testimonial.location}
                </cite>
              </div>
            </div>

            <div className="modal-actions">
              <button className="cta-button primary">
                📞 Call (315) 624-7344
              </button>
              <a href="/contact" className="cta-button secondary">
                📅 Schedule Free Consultation
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}