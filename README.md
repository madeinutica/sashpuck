# New York Sash - Puck CMS Website

A modern, content-managed website for New York Sash home improvement company built with Next.js 15 and Puck CMS.

## 🏠 About New York Sash

New York Sash is Central New York's premier home improvement company, serving customers since 1979 with premium windows, siding, bathroom remodeling, and entry door services.

## 🚀 Features

- **Dynamic Content Management**: Built with Puck CMS for easy content editing
- **Responsive Design**: Mobile-first approach with modern styling
- **SEO Optimized**: Proper metadata and structured content
- **Video Integration**: YouTube video embeds throughout
- **Component-Based**: Modular Puck components for flexible layouts
- **TypeScript**: Full type safety and developer experience
- **Performance**: Optimized with Next.js 15 App Router

## 🛠️ Tech Stack

- **Framework**: Next.js 15.5.4 with App Router
- **CMS**: Puck - Visual page builder and content management
- **Language**: TypeScript
- **Styling**: Inline React styles with responsive design
- **Database**: JSON file-based storage (database.json)
- **Deployment**: Ready for Vercel deployment

## 📦 Project Structure

```
├── app/                    # Next.js App Router pages
│   ├── [...]puckPath]/    # Dynamic Puck pages
│   ├── about/             # About page
│   ├── windows/           # Windows service page
│   └── puck/              # Puck admin interface
├── components/            # React components
├── lib/                   # Utility functions
├── public/                # Static assets
├── puck.config.tsx        # Puck component definitions
├── database.json          # Content storage
└── README.md

```

## 🎨 Puck Components

### Home Page Components
- **HeroSection**: Main hero with video and CTAs
- **PromoBanner**: Contest/promotional banners
- **StatsSection**: Company statistics display
- **ServicesGrid**: Service offerings with before/after images
- **TestimonialsGrid**: Customer testimonials with videos
- **ServiceAreas**: Geographic coverage
- **CallToAction**: Contact sections

### Windows Page Components
- **WindowsHero**: Windows-specific hero with features
- **WindowsFeatures**: Product feature highlights
- **WindowsInstallation**: Installation process info
- **WindowsTestimonials**: Customer video testimonials

### About Page Components
- **AboutHero**: Company overview with stats
- **CompanyOverview**: Detailed company information
- **CompanyTimeline**: Historical company timeline
- **CoreValues**: Company values and principles
- **CertificationsAwards**: Industry recognition
- **TeamSection**: Team member profiles
- **CommunityInvolvement**: Community activities

## 🎯 Key Pages

- **Homepage** (`/`): Company overview and services
- **Windows** (`/windows`): Windows product and service details
- **About** (`/about`): Company history, team, and values
- **Admin** (`/puck`): Content management interface

## 💻 Development

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Getting Started

1. **Clone the repository**
   ```bash
   git clone [repository-url]
   cd sashpuck
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   - Website: http://localhost:3000
   - Admin: http://localhost:3000/puck

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 📝 Content Management

### Using Puck CMS

1. **Access Admin**: Navigate to `/puck` 
2. **Edit Pages**: Select any page to edit content
3. **Add Components**: Drag and drop components from the sidebar
4. **Configure**: Use the properties panel to customize content
5. **Publish**: Save changes to update the live site

### Component Configuration

Each Puck component includes:
- **Fields**: Editable properties (text, images, arrays)
- **Default Props**: Initial content and styling
- **Render Function**: React component with inline styling

## 🔧 Customization

### Adding New Components

1. **Define Type**: Add to component types in `puck.config.tsx`
2. **Add Fields**: Configure editable properties
3. **Set Defaults**: Provide default content
4. **Create Render**: Build the React component
5. **Update Database**: Add content to `database.json`

### Styling

Components use inline React styles for:
- Responsive design with CSS Grid and Flexbox
- Consistent color scheme (primary: #dc143c)
- Professional typography and spacing
- Smooth animations and transitions

## 🚀 Deployment

### Vercel (Recommended)

1. **Connect Repository**: Link your GitHub repo to Vercel
2. **Configure Build**:
   - Framework: Next.js
   - Build Command: `npm run build`
   - Output Directory: `.next`
3. **Deploy**: Automatic deployment on git push

### Environment Variables

No environment variables required for basic functionality.

## 📞 Support & Contact

For questions about this implementation or New York Sash services:

- **Phone**: (315) 624-7344
- **Service Area**: Central New York
- **Website**: [Company Website]

## 📄 License

This project is proprietary to New York Sash. All rights reserved.

---

Built with ❤️ for Central New York homeowners

## Usage

Run the generator and enter `next` when prompted

```
npx create-puck-app my-app
```

Start the server

```
yarn dev
```

Navigate to the homepage at https://localhost:3000. To edit the homepage, access the Puck editor at https://localhost:3000/edit.

You can do this for any route on the application, **even if the page doesn't exist**. For example, visit https://localhost:3000/hello/world and you'll receive a 404. You can author and publish a page by visiting https://localhost:3000/hello/world/edit. After publishing, go back to the original URL to see your page.

## Using this recipe

To adopt this recipe you will need to:

- **IMPORTANT** Add authentication to `/edit` routes. This can be done by modifying the example API routes in `/app/puck/api/route.ts` and server component in `/app/puck/[...puckPath]/page.tsx`. **If you don't do this, Puck will be completely public.**
- Integrate your database into the API calls in `/app/puck/api/route.ts`
- Implement a custom puck configuration in `puck.config.tsx`

By default, this recipe will generate static pages by setting `dynamic` to [`force-static`](https://nextjs.org/docs/app/api-reference/file-conventions/route-segment-config#dynamic) in the `/app/[...puckPath]/page.tsx`. This will strip headers and cookies. If you need dynamic pages, you can delete this.
