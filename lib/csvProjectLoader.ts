// CSV Parser and Project Data Transformer
import { CustomerProject } from './customerProjects';

// CSV Row interface based on your Project Mapit export
interface ProjectCSVRow {
  name: string;
  street: string;
  city: string;
  state: string;
  zip: string;
  country: string;
  lat: string;
  lng: string;
  created: string;
  emails: string;
}

// Parse CSV string into array of objects
function parseCSV(csvText: string): ProjectCSVRow[] {
  const lines = csvText.trim().split('\n');
  const headers = lines[0].split(',').map(h => h.replace(/"/g, ''));

  return lines.slice(1).map(line => {
    const values = line.split(',').map(v => v.replace(/"/g, ''));
    const row: any = {};

    headers.forEach((header, index) => {
      row[header] = values[index] || '';
    });

    return row as ProjectCSVRow;
  });
}

// Transform CSV data to CustomerProject format
function transformCSVToProjects(csvRows: ProjectCSVRow[]): CustomerProject[] {
  return csvRows.map((row, index) => {
    // Generate service type based on project name or location
    const serviceType = determineServiceType(row.name);

    // Create project ID from name and location
    const projectId = `${row.name.toLowerCase().replace(/[^a-z0-9]/g, '-')}-${row.city.toLowerCase()}-${index}`;

    return {
      id: projectId,
      title: row.name || `Project in ${row.city}`,
      location: {
        address: row.street || '',
        city: row.city || '',
        state: row.state || 'NY',
        coordinates: {
          latitude: parseFloat(row.lat) || 43.0,
          longitude: parseFloat(row.lng) || -75.9
        }
      },
      serviceType,
      featured: index < 10, // Mark first 10 as featured
      completedDate: formatDate(row.created),
      projectDetails: {
        description: generateProjectDescription(row.name, serviceType),
        challengesSolved: generateChallenges(serviceType),
        productsUsed: generateProducts(serviceType),
        timeframe: '1-2 weeks',
        investment: generateInvestmentRange(serviceType)
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
        customerName: generateCustomerName(row.city),
        rating: Math.floor(Math.random() * 2) + 4, // 4-5 stars
        quote: generateTestimonial(serviceType),
        location: `${row.city}, NY`
      },
      results: {
        energySavings: serviceType === 'windows' ? 'Up to 30% reduction in heating/cooling costs' : undefined,
        aestheticImpact: 'Modern, updated appearance that increases home value',
        functionalImpact: 'Improved comfort and functionality'
      }
    };
  });
}

// Helper functions for data generation
function determineServiceType(projectName: string): CustomerProject['serviceType'] {
  const name = projectName.toLowerCase();

  if (name.includes('window')) return 'windows';
  if (name.includes('siding') || name.includes('vinyl') || name.includes('exterior')) return 'siding';
  if (name.includes('bath') || name.includes('shower') || name.includes('tub')) return 'bathrooms';
  if (name.includes('door')) return 'doors';

  // Rotate through service types for variety
  const services: CustomerProject['serviceType'][] = ['windows', 'siding', 'bathrooms', 'doors', 'combination'];
  return services[Math.floor(Math.random() * services.length)];
}

function formatDate(dateString: string): string {
  try {
    return new Date(dateString).toISOString().split('T')[0];
  } catch {
    return new Date().toISOString().split('T')[0];
  }
}

function generateProjectDescription(name: string, serviceType: string): string {
  const descriptions = {
    windows: `Complete window replacement project for ${name}, featuring energy-efficient windows that reduce heating and cooling costs while improving comfort.`,
    siding: `Exterior siding upgrade for ${name}, providing better protection from the elements and a modern, attractive appearance.`,
    bathrooms: `Bathroom remodeling project for ${name}, creating a more functional and comfortable space with modern fixtures and finishes.`,
    doors: `Entry door replacement for ${name}, enhancing curb appeal and providing better security and insulation.`,
    combination: `Comprehensive home improvement project for ${name}, combining multiple services for a complete transformation.`
  };

  return descriptions[serviceType] || descriptions.windows;
}

function generateChallenges(serviceType: string): string[] {
  const challenges = {
    windows: ['Poor insulation', 'High energy bills', 'Difficult to clean', 'Outdated appearance'],
    siding: ['Weather damage', 'Poor insulation', 'Faded appearance', 'Maintenance issues'],
    bathrooms: ['Outdated fixtures', 'Poor functionality', 'Water damage', 'Limited space'],
    doors: ['Poor security', 'Energy loss', 'Outdated appearance', 'Maintenance issues'],
    combination: ['Multiple issues', 'Coordinated timeline', 'Budget management', 'Quality control']
  };

  return challenges[serviceType] || challenges.windows;
}

function generateProducts(serviceType: string): string[] {
  const products = {
    windows: ['Triple-pane windows', 'Low-E glass', 'Vinyl frames', 'Custom sizing'],
    siding: ['Vinyl siding', 'Insulation', 'Trim work', 'Professional installation'],
    bathrooms: ['Modern fixtures', 'Tile work', 'Vanity cabinets', 'Lighting upgrades'],
    doors: ['Steel entry doors', 'Hardware upgrades', 'Weatherstripping', 'Keyless entry'],
    combination: ['Multiple premium products', 'Coordinated materials', 'Professional installation', 'Quality finishes']
  };

  return products[serviceType] || products.windows;
}

function generateInvestmentRange(serviceType: string): string {
  const ranges = {
    windows: '$8,000 - $15,000',
    siding: '$12,000 - $25,000',
    bathrooms: '$6,000 - $18,000',
    doors: '$2,000 - $6,000',
    combination: '$20,000 - $50,000'
  };

  return ranges[serviceType] || ranges.windows;
}

function generateCustomerName(city: string): string {
  const firstNames = ['John', 'Mary', 'Robert', 'Jennifer', 'Michael', 'Sarah', 'David', 'Lisa', 'James', 'Patricia'];
  const lastNames = ['Smith', 'Johnson', 'Williams', 'Brown', 'Jones', 'Garcia', 'Miller', 'Davis', 'Rodriguez', 'Martinez'];

  const firstName = firstNames[Math.floor(Math.random() * firstNames.length)];
  const lastName = lastNames[Math.floor(Math.random() * lastNames.length)];

  return `${firstName} ${lastName}`;
}

function generateTestimonial(serviceType: string): string {
  const testimonials = {
    windows: "The new windows have made such a difference in our energy bills and comfort. We're so happy with the results!",
    siding: "Our home looks amazing and the siding has held up perfectly through the winter. Great quality work!",
    bathrooms: "The bathroom remodel exceeded our expectations. It's beautiful and so much more functional now.",
    doors: "The new entry doors are gorgeous and make our home feel so much more secure and welcoming.",
    combination: "The entire project was handled professionally from start to finish. Our home has been completely transformed!"
  };

  return testimonials[serviceType] || testimonials.windows;
}

// Main function to load projects from CSV
export async function loadProjectsFromCSV(csvContent: string): Promise<CustomerProject[]> {
  try {
    const csvRows = parseCSV(csvContent);
    const projects = transformCSVToProjects(csvRows);

    console.log(`Loaded ${projects.length} projects from CSV`);
    return projects;
  } catch (error) {
    console.error('Error parsing CSV:', error);
    return [];
  }
}

// Export for use in components
export { parseCSV, transformCSVToProjects };