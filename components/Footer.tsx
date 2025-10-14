"use client";

import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3 className="footer-heading">ABOUT</h3>
          <ul className="footer-links">
            <li><Link href="/about">About Us</Link></li>
            <li><Link href="/careers">Careers</Link></li>
            <li><Link href="/warranty">Warranty</Link></li>
            <li><Link href="/testimonials">Testimonials</Link></li>
            <li><Link href="/certifications">Certifications</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3 className="footer-heading">EXPLORE</h3>
          <ul className="footer-links">
            <li><Link href="/windows">Windows</Link></li>
            <li><Link href="/doors">Doors</Link></li>
            <li><Link href="/siding">Siding</Link></li>
            <li><Link href="/baths">Bathroom Remodeling</Link></li>
            <li><Link href="/gallery">Photo Gallery</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3 className="footer-heading">LINKS</h3>
          <ul className="footer-links">
            <li><Link href="/contact">Contact Us</Link></li>
            <li><Link href="/financing">Financing</Link></li>
            <li><Link href="/faq">FAQ</Link></li>
            <li><Link href="/maintenance">Maintenance Tips</Link></li>
            <li><Link href="/energy">Energy Savings</Link></li>
            <li><Link href="/consultation">Free Consultation</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3 className="footer-heading">BLOG</h3>
          <ul className="footer-links">
            <li><Link href="/blog/home-improvement">Home Improvement</Link></li>
            <li><Link href="/blog/window-care">Window Care</Link></li>
            <li><Link href="/blog/bathroom-trends">Bathroom Trends</Link></li>
            <li><Link href="/blog/seasonal-tips">Seasonal Tips</Link></li>
            <li><Link href="/blog/diy-guides">DIY Guides</Link></li>
          </ul>
        </div>

        <div className="footer-section footer-contact">
          <h3 className="footer-heading">CONTACT</h3>
          <div className="contact-info">
            <p>349 Oriskany Blvd, Whitesboro</p>
            <p>NY 13492</p>
            <p>info@newyorksash.com</p>
            <p>(315) 624-7344</p>
          </div>
          <div className="social-icons">
            <a href="https://www.facebook.com/NYSash/" className="social-icon facebook" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
            <a href="https://www.youtube.com/@NewYorkSash" className="social-icon youtube" aria-label="YouTube" target="_blank" rel="noopener noreferrer">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
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

      <div className="footer-bottom">
        <div className="footer-bottom-content">
          <p>Copyright © 2025 All Rights Reserved.</p>
          <div className="footer-bottom-links">
            <Link href="/terms">Terms & Condition</Link>
            <span>|</span>
            <Link href="/privacy">Privacy</Link>
            <span>|</span>
            <Link href="/support">Support</Link>
            <span>|</span>
            <Link href="/accessibility">Accessibility</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}