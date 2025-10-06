// Project Management Utilities for SASH Customer Projects
import { CustomerProject } from './customerProjects';

// Helper to generate unique IDs
export function generateProjectId(city: string, serviceType: string, year: string = '2024'): string {
  const citySlug = city.toLowerCase().replace(/\s+/g, '-');
  const serviceSlug = serviceType.toLowerCase().replace(/\s+/g, '-');
  return `${citySlug}-${serviceSlug}-${year}`;
}

// Central NY coordinates lookup for common cities
export const centralNYCoordinates: Record<string, { lat: number; lng: number }> = {
  'Syracuse': { lat: 43.0481, lng: -76.1474 },
  'Utica': { lat: 43.1009, lng: -75.2327 },
  'Rome': { lat: 43.2128, lng: -75.4557 },
  'Auburn': { lat: 42.9317, lng: -76.5661 },
  'Oneida': { lat: 43.0909, lng: -75.6513 },
  'Fulton': { lat: 43.3181, lng: -76.4152 },
  'Oswego': { lat: 43.4553, lng: -76.5105 },
  'Cortland': { lat: 42.6014, lng: -76.1807 },
  'Watertown': { lat: 43.9748, lng: -75.9107 },
  'Geneva': { lat: 42.8709, lng: -76.9783 },
  'Canandaigua': { lat: 42.8873, lng: -77.2880 },
  'Ithaca': { lat: 42.4430, lng: -76.5019 },
  'Elmira': { lat: 42.0898, lng: -76.8077 },
  'Batavia': { lat: 42.9980, lng: -78.1875 },
  'Rochester': { lat: 43.1566, lng: -77.6088 },
  'Liverpool': { lat: 43.1064, lng: -76.2177 },
  'Baldwinsville': { lat: 43.1587, lng: -76.3327 },
  'Camillus': { lat: 43.0392, lng: -76.3041 },
  'Cicero': { lat: 43.1684, lng: -76.1168 },
  'Clay': { lat: 43.1834, lng: -76.1710 },
  'DeWitt': { lat: 43.0392, lng: -76.0696 },
  'East Syracuse': { lat: 43.0654, lng: -76.0774 },
  'Fayetteville': { lat: 43.0301, lng: -76.0096 },
  'Manlius': { lat: 43.0001, lng: -75.9788 },
  'Marcellus': { lat: 42.9826, lng: -76.3402 },
  'North Syracuse': { lat: 43.1368, lng: -76.1335 },
  'Skaneateles': { lat: 42.9473, lng: -76.4294 },
  'Tully': { lat: 42.7970, lng: -76.1099 }
};

// Sample project template generator
export function createProjectTemplate(
  title: string,
  city: string,
  serviceType: 'windows' | 'siding' | 'bathrooms' | 'doors' | 'combination',
  options: Partial<{
    featured: boolean;
    customerName: string;
    address: string;
    description: string;
    investment: string;
    timeframe: string;
    rating: number;
    year: string;
  }> = {}
): Partial<CustomerProject> {
  const coords = centralNYCoordinates[city];
  if (!coords) {
    throw new Error(`City "${city}" not found in coordinates database`);
  }

  const year = options.year || '2024';
  const id = generateProjectId(city, serviceType, year);

  return {
    id,
    title,
    location: {
      address: options.address || `123 Main Street`,
      city,
      state: 'NY',
      coordinates: {
        latitude: coords.lat + (Math.random() - 0.5) * 0.01, // Add small random offset
        longitude: coords.lng + (Math.random() - 0.5) * 0.01
      }
    },
    serviceType,
    featured: options.featured || false,
    completedDate: `${year}-${String(Math.floor(Math.random() * 12) + 1).padStart(2, '0')}-15`,
    projectDetails: {
      description: options.description || `Professional ${serviceType} installation in ${city}, NY`,
      challengesSolved: getDefaultChallenges(serviceType),
      productsUsed: getDefaultProducts(serviceType),
      timeframe: options.timeframe || getDefaultTimeframe(serviceType),
      investment: options.investment || getDefaultInvestment(serviceType)
    },
    photos: getDefaultPhotos(serviceType),
    testimonial: {
      customerName: options.customerName || getRandomCustomerName(),
      rating: options.rating || 5,
      quote: getDefaultTestimonial(serviceType),
      location: `${city}, NY`
    },
    results: getDefaultResults(serviceType)
  };
}

// Helper functions for default data
function getDefaultChallenges(serviceType: string): string[] {
  const challenges: Record<string, string[]> = {
    windows: ['Old inefficient windows', 'High energy bills', 'Drafts and air leaks', 'Outdated appearance'],
    siding: ['Weather damage', 'Maintenance requirements', 'Fading and wear', 'Poor insulation'],
    bathrooms: ['Outdated fixtures', 'Limited accessibility', 'Water damage', 'Poor lighting'],
    doors: ['Security concerns', 'Energy inefficiency', 'Weather damage', 'Outdated style'],
    combination: ['Multiple home improvement needs', 'Coordinated timing', 'Consistent quality', 'Budget optimization']
  };
  return challenges[serviceType] || challenges.combination;
}

function getDefaultProducts(serviceType: string): string[] {
  const products: Record<string, string[]> = {
    windows: ['Energy Star certified windows', 'LowE glass with argon fill', 'Vinyl frames', 'Professional installation'],
    siding: ['Insulated vinyl siding', 'Moisture barrier', 'Trim and accessories', 'Lifetime warranty'],
    bathrooms: ['Acrylic bath systems', 'Modern fixtures', 'Tile surrounds', 'Efficient lighting'],
    doors: ['Fiberglass entry doors', 'Multi-point locking', 'Weather stripping', 'Decorative glass'],
    combination: ['Multiple premium products', 'Coordinated installation', 'Comprehensive warranty', 'Professional project management']
  };
  return products[serviceType] || products.combination;
}

function getDefaultTimeframe(serviceType: string): string {
  const timeframes: Record<string, string> = {
    windows: '2-3 days',
    siding: '5-7 days',
    bathrooms: '3-5 days',
    doors: '1 day',
    combination: '1-2 weeks'
  };
  return timeframes[serviceType] || '1 week';
}

function getDefaultInvestment(serviceType: string): string {
  const investments: Record<string, string> = {
    windows: '$8,000 - $15,000',
    siding: '$12,000 - $20,000',
    bathrooms: '$6,000 - $12,000',
    doors: '$1,500 - $3,500',
    combination: '$15,000 - $35,000'
  };
  return investments[serviceType] || '$10,000 - $20,000';
}

function getDefaultPhotos(serviceType: string) {
  return {
    before: [
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop',
      'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=400&fit=crop'
    ],
    after: [
      'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=400&fit=crop',
      'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=600&h=400&fit=crop'
    ]
  };
}

function getDefaultTestimonial(serviceType: string): string {
  const testimonials: Record<string, string> = {
    windows: 'The new windows have completely transformed our home. We\'re already seeing lower energy bills and the house feels so much more comfortable!',
    siding: 'Our home looks brand new! The quality of work was exceptional and the crew was professional throughout the entire process.',
    bathrooms: 'We love our new bathroom! The transformation exceeded our expectations and the installation was completed quickly with minimal disruption.',
    doors: 'The new front door makes such a difference in both security and curb appeal. Great quality and expert installation.',
    combination: 'SASH handled our complete home renovation beautifully. Everything was coordinated perfectly and the results are amazing!'
  };
  return testimonials[serviceType] || testimonials.combination;
}

function getDefaultResults(serviceType: string) {
  const results: Record<string, any> = {
    windows: {
      energySavings: '25% reduction in heating costs',
      aestheticImpact: 'Dramatically improved curb appeal',
      functionalImpact: 'Enhanced comfort and noise reduction'
    },
    siding: {
      energySavings: '20% improvement in insulation',
      aestheticImpact: 'Complete exterior transformation',
      functionalImpact: 'Maintenance-free exterior protection'
    },
    bathrooms: {
      aestheticImpact: 'Modern, spa-like atmosphere',
      functionalImpact: 'Improved accessibility and storage'
    },
    doors: {
      energySavings: '15% reduction in air infiltration',
      aestheticImpact: 'Enhanced entryway appearance',
      functionalImpact: 'Improved security and weatherproofing'
    },
    combination: {
      energySavings: '30% overall energy improvement',
      aestheticImpact: 'Complete home transformation',
      functionalImpact: 'Enhanced comfort, security, and value'
    }
  };
  return results[serviceType] || results.combination;
}

function getRandomCustomerName(): string {
  const firstNames = ['Sarah', 'Mike', 'Jennifer', 'David', 'Lisa', 'Robert', 'Mary', 'John', 'Patricia', 'James', 'Linda', 'William', 'Barbara', 'Richard', 'Susan'];
  const lastNames = ['Johnson', 'Smith', 'Williams', 'Brown', 'Jones', 'Garcia', 'Miller', 'Davis', 'Rodriguez', 'Martinez', 'Hernandez', 'Lopez', 'Gonzalez', 'Wilson', 'Anderson'];
  
  const firstName = firstNames[Math.floor(Math.random() * firstNames.length)];
  const lastName = lastNames[Math.floor(Math.random() * lastNames.length)];
  
  return `${firstName} ${lastName}`;
}

// Validation function
export function validateProject(project: Partial<CustomerProject>): { isValid: boolean; errors: string[] } {
  const errors: string[] = [];
  
  if (!project.id) errors.push('Project ID is required');
  if (!project.title) errors.push('Project title is required');
  if (!project.location?.city) errors.push('City is required');
  if (!project.location?.coordinates?.latitude) errors.push('Latitude coordinate is required');
  if (!project.location?.coordinates?.longitude) errors.push('Longitude coordinate is required');
  if (!project.serviceType) errors.push('Service type is required');
  
  return {
    isValid: errors.length === 0,
    errors
  };
}

// Export utility to add projects to the existing array
export function addProjectsToFile(newProjects: CustomerProject[]): string {
  // This generates the code to add to customerProjects.ts
  const projectsCode = newProjects.map(project => 
    `  ${JSON.stringify(project, null, 2).replace(/\n/g, '\n  ')}`
  ).join(',\n');
  
  return `// Add these projects to the sampleProjects array in customerProjects.ts:\n\n${projectsCode}`;
}