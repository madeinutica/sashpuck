"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from "next/image";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false);
  const [isWindowsDropdownOpen, setIsWindowsDropdownOpen] = useState(false);
  const [isSidingDropdownOpen, setIsSidingDropdownOpen] = useState(false);
  const [isBathsDropdownOpen, setIsBathsDropdownOpen] = useState(false);
  const [isDoorsDropdownOpen, setIsDoorsDropdownOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const toggleAboutDropdown = () => {
    setIsAboutDropdownOpen(!isAboutDropdownOpen);
  };

  const closeAboutDropdown = () => {
    setIsAboutDropdownOpen(false);
  };

  const toggleWindowsDropdown = () => {
    setIsWindowsDropdownOpen(!isWindowsDropdownOpen);
  };

  const closeWindowsDropdown = () => {
    setIsWindowsDropdownOpen(false);
  };

  const toggleSidingDropdown = () => {
    setIsSidingDropdownOpen(!isSidingDropdownOpen);
  };

  const closeSidingDropdown = () => {
    setIsSidingDropdownOpen(false);
  };

  const toggleBathsDropdown = () => {
    setIsBathsDropdownOpen(!isBathsDropdownOpen);
  };

  const closeBathsDropdown = () => {
    setIsBathsDropdownOpen(false);
  };

  const toggleDoorsDropdown = () => {
    setIsDoorsDropdownOpen(!isDoorsDropdownOpen);
  };

  const closeDoorsDropdown = () => {
    setIsDoorsDropdownOpen(false);
  };

  return (
    <div className="header">
      {/* Top black bar */}
      <div className="top-bar">
        <div className="top-bar-content">
          <div className="contact-info">
            <span className="phone-icon">📞</span>
            <span>Call Us: (315) 624-7344</span>
          </div>
          <div className="hiring-info">
            <span className="hiring-text">Now Hiring:</span>
            <span>We&#39;re looking for motivated installers. No experience necessary.</span>
          </div>
          <div className="social-icons">
            <a href="https://www.facebook.com/NYSash/" className="social-icon facebook" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
            <a href="https://www.instagram.com/newyorksash/?hl=en" className="social-icon instagram" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Main navigation bar */}
      <div className="nav-bar">
        <div className="nav-content">
          {/* Logo */}
          <Link href="/" className="logo" onClick={closeMobileMenu}>
            <Image src="/images/misc/logo.png" alt="New York Sash Logo" width={65} height={65} style={{ width: "auto" }} />
          </Link>

          {/* Desktop Navigation menu */}
          <nav className="nav-menu desktop-nav">
            <div 
              className="nav-item dropdown"
              onMouseEnter={() => setIsAboutDropdownOpen(true)}
              onMouseLeave={() => setIsAboutDropdownOpen(false)}
            >
              <Link href="/about" className="nav-link">
                <span>About Us</span>
                <span className="dropdown-arrow">⌄</span>
              </Link>
              <div className={`dropdown-menu ${isAboutDropdownOpen ? 'active' : ''}`}>
                <Link href="/about" className="dropdown-item" onClick={closeAboutDropdown}>
                  About Us
                </Link>
                <Link href="/showroom" className="dropdown-item" onClick={closeAboutDropdown}>
                  Showroom
                </Link>
                <Link href="/team" className="dropdown-item" onClick={closeAboutDropdown}>
                  Meet Our Team
                </Link>
                <Link href="/careers" className="dropdown-item" onClick={closeAboutDropdown}>
                  Job Openings
                </Link>
              </div>
            </div>
            <div 
              className="nav-item dropdown"
              onMouseEnter={() => setIsWindowsDropdownOpen(true)}
              onMouseLeave={() => setIsWindowsDropdownOpen(false)}
            >
              <Link href="/windows" className="nav-link">
                <span>Windows</span>
                <span className="dropdown-arrow">⌄</span>
              </Link>
              <div className={`dropdown-menu ${isWindowsDropdownOpen ? 'active' : ''}`}>
                <Link href="/windows" className="dropdown-item" onClick={closeWindowsDropdown}>
                  All Windows
                </Link>
                <Link href="/windows/double-hung" className="dropdown-item" onClick={closeWindowsDropdown}>
                  Double Hung Windows
                </Link>
                <Link href="/windows/bay-bow-picture" className="dropdown-item" onClick={closeWindowsDropdown}>
                  Bay, Bow & Picture Windows
                </Link>
                <Link href="/windows/slider" className="dropdown-item" onClick={closeWindowsDropdown}>
                  Slider Windows
                </Link>
                <Link href="/windows/awning" className="dropdown-item" onClick={closeWindowsDropdown}>
                  Awning Windows
                </Link>
                <Link href="/windows/hopper" className="dropdown-item" onClick={closeWindowsDropdown}>
                  Hopper Windows
                </Link>
              </div>
            </div>
            <div 
              className="nav-item dropdown"
              onMouseEnter={() => setIsSidingDropdownOpen(true)}
              onMouseLeave={() => setIsSidingDropdownOpen(false)}
            >
              <Link href="/siding" className="nav-link">
                <span>Siding</span>
                <span className="dropdown-arrow">⌄</span>
              </Link>
              <div className={`dropdown-menu ${isSidingDropdownOpen ? 'active' : ''}`}>
                <Link href="/siding" className="dropdown-item" onClick={closeSidingDropdown}>
                  All Siding
                </Link>
                <Link href="/siding/engineered-wood" className="dropdown-item" onClick={closeSidingDropdown}>
                  Engineered Wood Siding
                </Link>
                <Link href="/siding/reinforced-vinyl" className="dropdown-item" onClick={closeSidingDropdown}>
                  Reinforced Vinyl Siding
                </Link>
                <Link href="/siding/traditional-vinyl" className="dropdown-item" onClick={closeSidingDropdown}>
                  Traditional Vinyl Siding
                </Link>
                <Link href="/siding/cedar-shake-vinyl" className="dropdown-item" onClick={closeSidingDropdown}>
                  Cedar Shake Vinyl Siding
                </Link>
                <Link href="/siding/board-batten" className="dropdown-item" onClick={closeSidingDropdown}>
                  Board & Batten Vertical Vinyl
                </Link>
                <Link href="/siding/stacked-stone" className="dropdown-item" onClick={closeSidingDropdown}>
                  Stacked Stone Siding
                </Link>
              </div>
            </div>
            <div 
              className="nav-item dropdown"
              onMouseEnter={() => setIsBathsDropdownOpen(true)}
              onMouseLeave={() => setIsBathsDropdownOpen(false)}
            >
              <Link href="/baths" className="nav-link">
                <span>Baths</span>
                <span className="dropdown-arrow">⌄</span>
              </Link>
              <div className={`dropdown-menu ${isBathsDropdownOpen ? 'active' : ''}`}>
                <Link href="/baths" className="dropdown-item" onClick={closeBathsDropdown}>
                  All Baths
                </Link>
                <Link href="/baths/tub-to-shower" className="dropdown-item" onClick={closeBathsDropdown}>
                  Tub To Shower Conversion
                </Link>
                <Link href="/baths/safety-tubs" className="dropdown-item" onClick={closeBathsDropdown}>
                  Safety Tubs
                </Link>
                <Link href="/baths/shower-doors" className="dropdown-item" onClick={closeBathsDropdown}>
                  Shower Doors
                </Link>
                <Link href="/baths/toilets" className="dropdown-item" onClick={closeBathsDropdown}>
                  Toilets
                </Link>
                <Link href="/baths/accessories" className="dropdown-item" onClick={closeBathsDropdown}>
                  Accessories
                </Link>
                <Link href="/baths/color-texture" className="dropdown-item" onClick={closeBathsDropdown}>
                  Color & Texture Options
                </Link>
              </div>
            </div>
            <div 
              className="nav-item dropdown"
              onMouseEnter={() => setIsDoorsDropdownOpen(true)}
              onMouseLeave={() => setIsDoorsDropdownOpen(false)}
            >
              <Link href="/doors" className="nav-link">
                <span>Doors</span>
                <span className="dropdown-arrow">⌄</span>
              </Link>
              <div className={`dropdown-menu ${isDoorsDropdownOpen ? 'active' : ''}`}>
                <Link href="/doors" className="dropdown-item" onClick={closeDoorsDropdown}>
                  All Doors
                </Link>
                <Link href="/doors/entry-doors" className="dropdown-item" onClick={closeDoorsDropdown}>
                  Entry Doors
                </Link>
                <Link href="/doors/storm-doors" className="dropdown-item" onClick={closeDoorsDropdown}>
                  Storm Doors
                </Link>
                <Link href="/doors/patio-doors" className="dropdown-item" onClick={closeDoorsDropdown}>
                  Patio Doors
                </Link>
              </div>
            </div>
            <Link href="/showroom" className="nav-item" onClick={closeMobileMenu}>Showroom</Link>
            <Link href="/careers" className="nav-item" onClick={closeMobileMenu}>Careers</Link>
            <Link href="/contact" className="nav-item" onClick={closeMobileMenu}>Contact</Link>
            <Link href="/win" className="nav-item" onClick={closeMobileMenu}>Win</Link>
          </nav>

          {/* Desktop Action buttons */}
          <div className="action-buttons desktop-actions">
            <Link href="/coming-soon" className="chat-button" style={{ textDecoration: "none" }}>
              Chat with AI
            </Link>
            <Link href="/coming-soon" className="login-button" style={{ textDecoration: "none" }}>
              Client Login
            </Link>
          </div>

          {/* Mobile hamburger menu button */}
          <button 
            className="mobile-menu-toggle"
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            <div className={`hamburger ${isMobileMenuOpen ? 'active' : ''}`}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        <div className={`mobile-nav ${isMobileMenuOpen ? 'active' : ''}`}>
          <div className="mobile-nav-content">
            <div className="mobile-nav-item dropdown-mobile">
              <button 
                className="mobile-nav-toggle"
                onClick={toggleAboutDropdown}
              >
                About Us
                <span className={`dropdown-arrow ${isAboutDropdownOpen ? 'active' : ''}`}>⌄</span>
              </button>
              <div className={`mobile-dropdown ${isAboutDropdownOpen ? 'active' : ''}`}>
                <Link href="/about" className="mobile-dropdown-item" onClick={closeMobileMenu}>
                  About Us
                </Link>
                <Link href="/showroom" className="mobile-dropdown-item" onClick={closeMobileMenu}>
                  Showroom
                </Link>
                <Link href="/team" className="mobile-dropdown-item" onClick={closeMobileMenu}>
                  Meet Our Team
                </Link>
                <Link href="/careers" className="mobile-dropdown-item" onClick={closeMobileMenu}>
                  Job Openings
                </Link>
              </div>
            </div>
            <div className="mobile-nav-item dropdown-mobile">
              <button 
                className="mobile-nav-toggle"
                onClick={toggleWindowsDropdown}
              >
                Windows
                <span className={`dropdown-arrow ${isWindowsDropdownOpen ? 'active' : ''}`}>⌄</span>
              </button>
              <div className={`mobile-dropdown ${isWindowsDropdownOpen ? 'active' : ''}`}>
                <Link href="/windows" className="mobile-dropdown-item" onClick={closeMobileMenu}>
                  All Windows
                </Link>
                <Link href="/windows/double-hung" className="mobile-dropdown-item" onClick={closeMobileMenu}>
                  Double Hung Windows
                </Link>
                <Link href="/windows/bay-bow-picture" className="mobile-dropdown-item" onClick={closeMobileMenu}>
                  Bay, Bow & Picture Windows
                </Link>
                <Link href="/windows/slider" className="mobile-dropdown-item" onClick={closeMobileMenu}>
                  Slider Windows
                </Link>
                <Link href="/windows/awning" className="mobile-dropdown-item" onClick={closeMobileMenu}>
                  Awning Windows
                </Link>
                <Link href="/windows/hopper" className="mobile-dropdown-item" onClick={closeMobileMenu}>
                  Hopper Windows
                </Link>
              </div>
            </div>
            <div className="mobile-nav-item dropdown-mobile">
              <button 
                className="mobile-nav-toggle"
                onClick={toggleSidingDropdown}
              >
                Siding
                <span className={`dropdown-arrow ${isSidingDropdownOpen ? 'active' : ''}`}>⌄</span>
              </button>
              <div className={`mobile-dropdown ${isSidingDropdownOpen ? 'active' : ''}`}>
                <Link href="/siding" className="mobile-dropdown-item" onClick={closeMobileMenu}>
                  All Siding
                </Link>
                <Link href="/siding/engineered-wood" className="mobile-dropdown-item" onClick={closeMobileMenu}>
                  Engineered Wood Siding
                </Link>
                <Link href="/siding/reinforced-vinyl" className="mobile-dropdown-item" onClick={closeMobileMenu}>
                  Reinforced Vinyl Siding
                </Link>
                <Link href="/siding/traditional-vinyl" className="mobile-dropdown-item" onClick={closeMobileMenu}>
                  Traditional Vinyl Siding
                </Link>
                <Link href="/siding/cedar-shake-vinyl" className="mobile-dropdown-item" onClick={closeMobileMenu}>
                  Cedar Shake Vinyl Siding
                </Link>
                <Link href="/siding/board-batten" className="mobile-dropdown-item" onClick={closeMobileMenu}>
                  Board & Batten Vertical Vinyl
                </Link>
                <Link href="/siding/stacked-stone" className="mobile-dropdown-item" onClick={closeMobileMenu}>
                  Stacked Stone Siding
                </Link>
              </div>
            </div>
            <div className="mobile-nav-item dropdown-mobile">
              <button 
                className="mobile-nav-toggle"
                onClick={toggleBathsDropdown}
              >
                Baths
                <span className={`dropdown-arrow ${isBathsDropdownOpen ? 'active' : ''}`}>⌄</span>
              </button>
              <div className={`mobile-dropdown ${isBathsDropdownOpen ? 'active' : ''}`}>
                <Link href="/baths" className="mobile-dropdown-item" onClick={closeMobileMenu}>
                  All Baths
                </Link>
                <Link href="/baths/tub-to-shower" className="mobile-dropdown-item" onClick={closeMobileMenu}>
                  Tub To Shower Conversion
                </Link>
                <Link href="/baths/safety-tubs" className="mobile-dropdown-item" onClick={closeMobileMenu}>
                  Safety Tubs
                </Link>
                <Link href="/baths/shower-doors" className="mobile-dropdown-item" onClick={closeMobileMenu}>
                  Shower Doors
                </Link>
                <Link href="/baths/toilets" className="mobile-dropdown-item" onClick={closeMobileMenu}>
                  Toilets
                </Link>
                <Link href="/baths/accessories" className="mobile-dropdown-item" onClick={closeMobileMenu}>
                  Accessories
                </Link>
                <Link href="/baths/color-texture" className="mobile-dropdown-item" onClick={closeMobileMenu}>
                  Color & Texture Options
                </Link>
              </div>
            </div>
            <div className="mobile-nav-item dropdown-mobile">
              <button 
                className="mobile-nav-toggle"
                onClick={toggleDoorsDropdown}
              >
                Doors
                <span className={`dropdown-arrow ${isDoorsDropdownOpen ? 'active' : ''}`}>⌄</span>
              </button>
              <div className={`mobile-dropdown ${isDoorsDropdownOpen ? 'active' : ''}`}>
                <Link href="/doors" className="mobile-dropdown-item" onClick={closeMobileMenu}>
                  All Doors
                </Link>
                <Link href="/doors/entry-doors" className="mobile-dropdown-item" onClick={closeMobileMenu}>
                  Entry Doors
                </Link>
                <Link href="/doors/storm-doors" className="mobile-dropdown-item" onClick={closeMobileMenu}>
                  Storm Doors
                </Link>
                <Link href="/doors/patio-doors" className="mobile-dropdown-item" onClick={closeMobileMenu}>
                  Patio Doors
                </Link>
              </div>
            </div>
            
            {/* Mobile Action Buttons */}
            <div className="mobile-actions">
              <Link href="/coming-soon" className="mobile-chat-button" onClick={closeMobileMenu} style={{ textDecoration: "none" }}>
                Chat with AI
              </Link>
              <Link href="/coming-soon" className="mobile-login-button" onClick={closeMobileMenu} style={{ textDecoration: "none" }}>
                Client Login
              </Link>
              <a href="tel:315-624-7344" className="mobile-phone-button" onClick={closeMobileMenu}>
                📞 Call (315) 624-7344
              </a>
            </div>
          </div>
        </div>

        {/* Mobile menu overlay */}
        {isMobileMenuOpen && (
          <div className="mobile-menu-overlay" onClick={closeMobileMenu}></div>
        )}
      </div>
    </div>
  );
}