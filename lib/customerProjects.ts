// Customer Projects Data Structure
export interface CustomerProject {
  id: string;
  title: string;
  location: {
    address: string;
    city: string;
    state: string;
    coordinates: {
      latitude: number;
      longitude: number;
    };
  };

  serviceType: 'windows' | 'siding' | 'bathrooms' | 'doors' | 'combination';
  featured: boolean;
  completedDate: string;
  projectDetails: {
    description: string;
    challengesSolved: string[];
    productsUsed: string[];
    timeframe: string;
    investment: string;
  };
  photos: {
    before: string[];
    after: string[];
    process?: string[];
  };
  testimonial: {
    customerName: string;
    rating: number;
    quote: string;
    location: string;
  };
  results: {
    energySavings?: string;
    aestheticImpact?: string;
    functionalImpact?: string;
  };
}

// Default empty array - data is loaded via API routes
export const sampleProjects: CustomerProject[] = [];

// Service Type Configuration
export const serviceTypeConfig = {
  windows: {
    color: '#2563eb',
    label: 'Windows',
    icon: '🪟'
  },
  siding: {
    color: '#16a34a',
    label: 'Siding',
    icon: '🏠'
  },
  bathrooms: {
    color: '#dc2626',
    label: 'Bathrooms',
    icon: '🛁'
  },
  doors: {
    color: '#ca8a04',
    label: 'Doors',
    icon: '🚪'
  },
  combination: {
    color: '#7c3aed',
    label: 'Full Home',
    icon: '🏡'
  }
};

// Map Configuration
export const mapConfig = {
  center: { latitude: 43.0, longitude: -75.9 },
  zoom: 8,
  apiKey: 'pk.eyJ1IjoiZWZsb3JlenNhc2giLCJhIjoiY21mcHJkYjR5MGo0cjJtb2xoZjd4Zmd2ZyJ9.mu2PN6vioX71RvV5J-HhWA'
};