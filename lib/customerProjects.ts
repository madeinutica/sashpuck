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

// Sample Projects Data - Central New York Focus
export const sampleProjects: CustomerProject[] = [
  {
    id: 'syracuse-windows-2024',
    title: 'Complete Window Replacement - Historic Home',
    location: {
      address: '123 James Street',
      city: 'Syracuse',
      state: 'NY',
      coordinates: {
        latitude: 43.0481,
        longitude: -76.1474
      }
    },
    serviceType: 'windows',
    featured: true,
    completedDate: '2024-08-15',
    projectDetails: {
      description: 'Full home window replacement in a beautiful 1920s colonial home. Upgraded from single-pane windows to energy-efficient double-hung windows while maintaining the historic character.',
      challengesSolved: [
        'Preserved historic architectural details',
        'Eliminated drafts and energy loss',
        'Improved home security with modern locking systems',
        'Reduced outside noise by 60%'
      ],
      productsUsed: [
        'Premium Double-Hung Windows',
        'Low-E Glass Coating',
        'Argon Gas Fill',
        'Custom Colonial Grids'
      ],
      timeframe: '3 days',
      investment: '$15,000 - $20,000'
    },
    photos: {
      before: [
        'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800&h=600&fit=crop'
      ],
      after: [
        'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop'
      ]
    },
    testimonial: {
      customerName: 'Michael & Sarah Thompson',
      rating: 5,
      quote: 'New York Sash transformed our home! The new windows look amazing and our energy bills have dropped by 40%. The team was professional, clean, and finished exactly when they said they would.',
      location: 'Syracuse, NY'
    },
    results: {
      energySavings: '40% reduction in heating costs',
      aestheticImpact: 'Enhanced curb appeal and home value',
      functionalImpact: 'Improved operation and security'
    }
  },
  {
    id: 'utica-siding-2024',
    title: 'Vinyl Siding Installation - Ranch Home',
    location: {
      address: '456 Sunset Drive',
      city: 'Utica',
      state: 'NY',
      coordinates: {
        latitude: 43.1009,
        longitude: -75.2327
      }
    },
    serviceType: 'siding',
    featured: false,
    completedDate: '2024-07-22',
    projectDetails: {
      description: 'Complete siding replacement on a 1960s ranch home. Upgraded from aging wood siding to maintenance-free vinyl siding with improved insulation.',
      challengesSolved: [
        'Eliminated constant maintenance and painting',
        'Improved home insulation and energy efficiency',
        'Enhanced weather resistance',
        'Modernized exterior appearance'
      ],
      productsUsed: [
        'Premium Vinyl Siding',
        'Insulated Backing',
        'Seamless Trim Work',
        'Upgraded Fascia and Soffit'
      ],
      timeframe: '5 days',
      investment: '$18,000 - $25,000'
    },
    photos: {
      before: [
        'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop'
      ],
      after: [
        'https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=800&h=600&fit=crop'
      ]
    },
    testimonial: {
      customerName: 'Robert Johnson',
      rating: 5,
      quote: 'The siding installation exceeded our expectations. Our home looks brand new and we love that we never have to paint again. Excellent workmanship!',
      location: 'Utica, NY'
    },
    results: {
      energySavings: '25% improvement in insulation',
      aestheticImpact: 'Complete exterior transformation',
      functionalImpact: 'Maintenance-free exterior'
    }
  },
  {
    id: 'rome-bathroom-2024',
    title: 'Luxury Bathroom Remodel',
    location: {
      address: '789 Heritage Lane',
      city: 'Rome',
      state: 'NY',
      coordinates: {
        latitude: 43.2128,
        longitude: -75.4557
      }
    },
    serviceType: 'bathrooms',
    featured: true,
    completedDate: '2024-09-10',
    projectDetails: {
      description: 'Complete master bathroom renovation with luxury fixtures, walk-in shower, and elegant tile work. Transformed an outdated bathroom into a spa-like retreat.',
      challengesSolved: [
        'Eliminated outdated fixtures and design',
        'Improved accessibility with walk-in shower',
        'Enhanced storage and functionality',
        'Created luxury spa-like atmosphere'
      ],
      productsUsed: [
        'Walk-in Shower System',
        'Premium Tile and Stone',
        'High-End Fixtures',
        'Custom Vanity'
      ],
      timeframe: '8 days',
      investment: '$25,000 - $35,000'
    },
    photos: {
      before: [
        'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800&h=600&fit=crop'
      ],
      after: [
        'https://images.unsplash.com/photo-1620626011761-996317b8d101?w=800&h=600&fit=crop'
      ]
    },
    testimonial: {
      customerName: 'Jennifer Davis',
      rating: 5,
      quote: 'Our new bathroom is absolutely stunning! The team at New York Sash created exactly what we envisioned. Every detail was perfect.',
      location: 'Rome, NY'
    },
    results: {
      aestheticImpact: 'Complete luxury transformation',
      functionalImpact: 'Improved accessibility and storage'
    }
  },
  {
    id: 'auburn-doors-2024',
    title: 'Entry Door Replacement',
    location: {
      address: '321 Elm Street',
      city: 'Auburn',
      state: 'NY',
      coordinates: {
        latitude: 42.9317,
        longitude: -76.5661
      }
    },
    serviceType: 'doors',
    featured: false,
    completedDate: '2024-06-18',
    projectDetails: {
      description: 'Replaced old entry door with a beautiful steel door featuring decorative glass and enhanced security features.',
      challengesSolved: [
        'Improved home security',
        'Enhanced curb appeal',
        'Better energy efficiency',
        'Eliminated drafts and air leaks'
      ],
      productsUsed: [
        'Steel Entry Door',
        'Decorative Glass Insert',
        'Multi-Point Locking System',
        'Weather Stripping'
      ],
      timeframe: '1 day',
      investment: '$3,000 - $5,000'
    },
    photos: {
      before: [
        'https://images.unsplash.com/photo-1449844908441-8829872d2607?w=800&h=600&fit=crop'
      ],
      after: [
        'https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?w=800&h=600&fit=crop'
      ]
    },
    testimonial: {
      customerName: 'Mark Wilson',
      rating: 5,
      quote: 'The new door looks fantastic and feels so much more secure. Installation was quick and professional.',
      location: 'Auburn, NY'
    },
    results: {
      aestheticImpact: 'Enhanced front entrance appeal',
      functionalImpact: 'Improved security and efficiency'
    }
  },
  {
    id: 'oneida-combination-2024',
    title: 'Whole Home Transformation',
    location: {
      address: '654 Oak Avenue',
      city: 'Oneida',
      state: 'NY',
      coordinates: {
        latitude: 43.0928,
        longitude: -75.6513
      }
    },
    serviceType: 'combination',
    featured: true,
    completedDate: '2024-09-25',
    projectDetails: {
      description: 'Complete exterior renovation including new windows, siding, and entry door. A total home transformation that dramatically improved curb appeal and energy efficiency.',
      challengesSolved: [
        'Outdated exterior appearance',
        'High energy costs',
        'Multiple maintenance issues',
        'Poor curb appeal affecting home value'
      ],
      productsUsed: [
        'Energy Star Windows',
        'Insulated Vinyl Siding',
        'Steel Entry Door',
        'Trim and Shutters'
      ],
      timeframe: '10 days',
      investment: '$40,000 - $50,000'
    },
    photos: {
      before: [
        'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop'
      ],
      after: [
        'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop'
      ]
    },
    testimonial: {
      customerName: 'David & Lisa Martinez',
      rating: 5,
      quote: 'We cannot believe this is the same house! New York Sash transformed our home completely. The quality and attention to detail is outstanding.',
      location: 'Oneida, NY'
    },
    results: {
      energySavings: '50% reduction in energy costs',
      aestheticImpact: 'Complete exterior transformation',
      functionalImpact: 'Improved comfort and home value'
    }
  },
  {
    id: 'auburn-windows-2024',
    title: 'Energy Efficient Windows - Colonial Home',
    location: {
      address: '456 South Street',
      city: 'Auburn',
      state: 'NY',
      coordinates: {
        latitude: 42.9417,
        longitude: -76.5761
      }
    },
    serviceType: 'windows',
    featured: true,
    completedDate: '2024-08-15',
    projectDetails: {
      description: 'Complete window replacement for a beautiful Colonial home in Auburn, NY',
      challengesSolved: ['Old single-pane windows', 'High energy bills', 'Poor insulation', 'Difficulty opening'],
      productsUsed: ['Triple-pane windows', 'LowE coating', 'Argon gas fill', 'Vinyl frames'],
      timeframe: '2 days',
      investment: '$12,000 - $16,000'
    },
    photos: {
      before: [
        'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800&h=600&fit=crop'
      ],
      after: [
        'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=800&h=600&fit=crop'
      ]
    },
    testimonial: {
      customerName: 'Jennifer Wilson',
      rating: 5,
      quote: 'The new windows have made such a difference! Our home is warmer in winter and cooler in summer. The installation team was fantastic.',
      location: 'Auburn, NY'
    },
    results: {
      energySavings: '35% reduction in heating costs',
      aestheticImpact: 'Enhanced home curb appeal',
      functionalImpact: 'Improved comfort and noise reduction'
    }
  },
  {
    id: 'fulton-doors-2024',
    title: 'Front Door Replacement - Craftsman Style',
    location: {
      address: '789 Maple Avenue',
      city: 'Fulton',
      state: 'NY',
      coordinates: {
        latitude: 43.3281,
        longitude: -76.4252
      }
    },
    serviceType: 'doors',
    featured: false,
    completedDate: '2024-09-10',
    projectDetails: {
      description: 'Beautiful front door installation for a Craftsman-style home in Fulton',
      challengesSolved: ['Old weathered door', 'Security concerns', 'Energy loss', 'Poor appearance'],
      productsUsed: ['Fiberglass door', 'Decorative glass', 'Multi-point locking', 'Weather stripping'],
      timeframe: '1 day',
      investment: '$2,500 - $3,500'
    },
    photos: {
      before: [
        'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop'
      ],
      after: [
        'https://images.unsplash.com/photo-1571055107559-3e67626fa8be?w=800&h=600&fit=crop'
      ]
    },
    testimonial: {
      customerName: 'Robert Chen',
      rating: 5,
      quote: 'Love our new front door! It looks amazing and we feel much more secure. Great quality and professional installation.',
      location: 'Fulton, NY'
    },
    results: {
      energySavings: '20% improvement in entryway insulation',
      aestheticImpact: 'Dramatic curb appeal enhancement',
      functionalImpact: 'Enhanced security and weather protection'
    }
  },
  {
    id: 'oswego-siding-2024',
    title: 'Complete Siding Renovation - Lake House',
    location: {
      address: '321 Lakeshore Drive',
      city: 'Oswego',
      state: 'NY',
      coordinates: {
        latitude: 43.4653,
        longitude: -76.5205
      }
    },
    serviceType: 'siding',
    featured: false,
    completedDate: '2024-07-20',
    projectDetails: {
      description: 'Full siding replacement for a beautiful lakefront property in Oswego',
      challengesSolved: ['Weather damage', 'Maintenance needs', 'Outdated appearance', 'Poor insulation'],
      productsUsed: ['Insulated vinyl siding', 'Moisture barrier', 'Trim work', 'Soffit and fascia'],
      timeframe: '6 days',
      investment: '$18,000 - $24,000'
    },
    photos: {
      before: [
        'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800&h=600&fit=crop'
      ],
      after: [
        'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=800&h=600&fit=crop'
      ]
    },
    testimonial: {
      customerName: 'Amanda Johnson',
      rating: 5,
      quote: 'Our lake house looks incredible! The new siding has transformed the entire property. Excellent workmanship and materials.',
      location: 'Oswego, NY'
    },
    results: {
      energySavings: '25% improvement in insulation',
      aestheticImpact: 'Complete exterior transformation',
      functionalImpact: 'Weather protection and low maintenance'
    }
  },
  {
    id: 'cortland-bathrooms-2024',
    title: 'Master Bathroom Remodel - Modern Design',
    location: {
      address: '654 Hill Street',
      city: 'Cortland',
      state: 'NY',
      coordinates: {
        latitude: 42.6114,
        longitude: -76.1907
      }
    },
    serviceType: 'bathrooms',
    featured: true,
    completedDate: '2024-08-05',
    projectDetails: {
      description: 'Complete master bathroom renovation with modern fixtures and design',
      challengesSolved: ['Outdated fixtures', 'Poor lighting', 'Limited storage', 'Accessibility needs'],
      productsUsed: ['Acrylic tub liner', 'Modern vanity', 'LED lighting', 'Tile surrounds'],
      timeframe: '4 days',
      investment: '$8,000 - $12,000'
    },
    photos: {
      before: [
        'https://images.unsplash.com/photo-1620626011761-996317b8d101?w=800&h=600&fit=crop'
      ],
      after: [
        'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=800&h=600&fit=crop'
      ]
    },
    testimonial: {
      customerName: 'Patricia Rodriguez',
      rating: 5,
      quote: 'Our bathroom is like a spa now! The team did an amazing job and finished everything on schedule. Highly recommend!',
      location: 'Cortland, NY'
    },
    results: {
      aestheticImpact: 'Spa-like modern design',
      functionalImpact: 'Improved storage and accessibility'
    }
  },
  {
    id: 'watertown-combination-2024',
    title: 'Whole Home Renovation - Victorian Style',
    location: {
      address: '987 Washington Street',
      city: 'Watertown',
      state: 'NY',
      coordinates: {
        latitude: 43.9848,
        longitude: -75.9207
      }
    },
    serviceType: 'combination',
    featured: false,
    completedDate: '2024-06-30',
    projectDetails: {
      description: 'Complete home renovation including windows, siding, and front door for a Victorian home',
      challengesSolved: ['Multiple improvement needs', 'Historic preservation', 'Energy efficiency', 'Coordinated timeline'],
      productsUsed: ['Period-appropriate windows', 'Cedar shake siding', 'Victorian-style door', 'Professional coordination'],
      timeframe: '2 weeks',
      investment: '$35,000 - $45,000'
    },
    photos: {
      before: [
        'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&h=600&fit=crop'
      ],
      after: [
        'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop'
      ]
    },
    testimonial: {
      customerName: 'Charles & Mary Davis',
      rating: 5,
      quote: 'New York Sash restored the beauty of our Victorian home while making it energy efficient. Outstanding project management and craftsmanship!',
      location: 'Watertown, NY'
    },
    results: {
      energySavings: '45% improvement in energy efficiency',
      aestheticImpact: 'Historic charm with modern performance',
      functionalImpact: 'Complete home transformation'
    }
  },
  {
    id: 'liverpool-windows-2024',
    title: 'Bay Window Installation - Contemporary Home',
    location: {
      address: '159 Elm Street',
      city: 'Liverpool',
      state: 'NY',
      coordinates: {
        latitude: 43.1164,
        longitude: -76.2277
      }
    },
    serviceType: 'windows',
    featured: false,
    completedDate: '2024-09-25',
    projectDetails: {
      description: 'Beautiful bay window installation in a contemporary Liverpool home',
      challengesSolved: ['Limited natural light', 'Outdated windows', 'Energy efficiency', 'Design enhancement'],
      productsUsed: ['Custom bay windows', 'Low-E glass', 'Energy Star rated', 'Professional installation'],
      timeframe: '2 days',
      investment: '$8,000 - $10,000'
    },
    photos: {
      before: [
        'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop'
      ],
      after: [
        'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop'
      ]
    },
    testimonial: {
      customerName: 'Karen Thompson',
      rating: 5,
      quote: 'The bay windows are gorgeous! They\'ve completely changed our living room. So much more light and the quality is excellent.',
      location: 'Liverpool, NY'
    },
    results: {
      energySavings: '30% improvement in window efficiency',
      aestheticImpact: 'Dramatic interior transformation',
      functionalImpact: 'Increased natural light and space'
    }
  },
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
        'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop'
      ],
      after: [
        'https://images.unsplash.com/photo-1571055107559-3e67626fa8be?w=800&h=600&fit=crop'
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