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

export const sampleProjects: CustomerProject[] = [
  {
    id: 'baldwinsville-doors-2024',
    title: 'Patio Door Replacement - Ranch Home',
    location: {
      address: '742 Willow Lane',
      city: 'Baldwinsville',
      state: 'NY',
      coordinates: {
        latitude: 43.1687,
        longitude: -76.3427
      }
    },
    serviceType: 'doors',
    featured: false,
    completedDate: '2024-08-28',
    projectDetails: {
      description: 'Sliding patio door replacement for improved access and energy efficiency',
      challengesSolved: ['Difficult operation', 'Air leaks', 'Security concerns', 'Outdated style'],
      productsUsed: ['Energy efficient patio door', 'Low-E glass', 'Secure locking system', 'Weather sealing'],
      timeframe: '1 day',
      investment: '$3,500 - $4,500'
    },
    photos: {
      before: [
        '/images/logo.png'
      ],
      after: [
        '/images/logo.png'
      ]
    },
    testimonial: {
      customerName: 'Steven Miller',
      rating: 4,
      quote: 'The new patio door operates so smoothly and looks great. Much better than our old sliding door. Professional installation.',
      location: 'Baldwinsville, NY'
    },
    results: {
      energySavings: '25% improvement in door efficiency',
      aestheticImpact: 'Modern, clean appearance',
      functionalImpact: 'Smooth operation and better security'
    }
  }
];

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