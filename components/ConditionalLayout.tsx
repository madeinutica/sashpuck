"use client";

import React, { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import Header from './Header';
import Footer from './Footer';
import CustomerMapGallery from './CustomerMapGallery';

interface ConditionalLayoutProps {
  children: React.ReactNode;
}

export default function ConditionalLayout({ children }: ConditionalLayoutProps) {
  const pathname = usePathname();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // During SSR, render the full layout to avoid hydration mismatches
  if (!isClient) {
    return (
      <>
        <Header />
        <main>{children}</main>
        <CustomerMapGallery 
          title="Our Recent Projects"
          subtitle="See the amazing transformations we've completed across Central New York"
        />
        <Footer />
      </>
    );
  }

  // Client-side: Check if we're on an admin page
  const isAdminPage = pathname?.startsWith('/admin');

  if (isAdminPage) {
    // Admin pages: Only render the children (no header, footer, or map)
    return <>{children}</>;
  }

  // Regular pages: Full layout with header, footer, and map
  return (
    <>
      <Header />
      <main>{children}</main>
      <CustomerMapGallery 
        title="Our Recent Projects"
        subtitle="See the amazing transformations we've completed across Central New York"
      />
      <Footer />
    </>
  );
}