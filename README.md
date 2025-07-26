# Enterprise Company Website

![App Preview](https://imgix.cosmicjs.com/97f67080-69b6-11f0-a051-23c10f41277a-photo-1460925895917-afdab827c52f-1753489340111.jpg?w=1200&h=300&fit=crop&auto=format,compress)

A modern, professional company website built with Next.js 15 and styled like Stripe.com. This application showcases your services, team members, testimonials, and case studies with a clean, enterprise-grade design.

## ✨ Features

- **Dynamic Services Showcase** - Display your services with detailed descriptions and features
- **Team Member Profiles** - Professional team page with bios and social links
- **Customer Testimonials** - Social proof with ratings and company information
- **Case Studies** - Detailed success stories with metrics and results
- **Responsive Design** - Mobile-first approach with clean, modern UI
- **SEO Optimized** - Built-in metadata and performance optimization

## Clone this Bucket and Code Repository

Want to create your own version of this project with all the content and structure? Clone this Cosmic bucket and code repository to get started instantly:

[![Clone this Bucket and Code Repository](https://img.shields.io/badge/Clone%20this%20Bucket-29abe2?style=for-the-badge&logo=cosmic&logoColor=white)](http://localhost:3040/projects/new?clone_bucket=68841f224d78b48606e72547&clone_repository=688438dcab4b0cdca9a02855)

## Prompts

This application was built using the following prompts to generate the content structure and code:

### Content Model Prompt

> "Create a content model for a company website with services, team members, testimonials, and case studies. Make it styled like stripe.com"

### Code Generation Prompt

> Build a Next.js website that uses my existing objects in this bucket. Set apiEnvironment: staging in cosmic config. Make it styled like stripe.com

The app has been tailored to work with your existing Cosmic content structure and includes all the features requested above.

## 🛠️ Technologies Used

- **Next.js 15** - React framework with App Router
- **TypeScript** - Type safety and better development experience
- **Tailwind CSS** - Utility-first CSS framework
- **Cosmic** - Headless CMS for content management
- **Lucide React** - Modern icon library

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ or Bun
- A Cosmic account with the bucket data provided

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd enterprise-company-website
   ```

2. **Install dependencies**
   ```bash
   bun install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   
   Add your Cosmic credentials:
   ```env
   COSMIC_BUCKET_SLUG=your-bucket-slug
   COSMIC_READ_KEY=your-read-key
   COSMIC_WRITE_KEY=your-write-key
   ```

4. **Run the development server**
   ```bash
   bun dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📖 Cosmic SDK Examples

### Fetching Services
```typescript
import { cosmic } from '@/lib/cosmic'

const services = await cosmic.objects
  .find({ type: 'services' })
  .props(['id', 'title', 'slug', 'metadata'])
  .depth(1)
```

### Getting Team Members by Department
```typescript
const engineers = await cosmic.objects
  .find({ 
    type: 'team-members',
    'metadata.department': 'engineering' 
  })
  .props(['id', 'title', 'slug', 'metadata'])
```

### Retrieving Featured Testimonials
```typescript
const featuredTestimonials = await cosmic.objects
  .find({ 
    type: 'testimonials',
    'metadata.featured': true 
  })
  .props(['id', 'title', 'slug', 'metadata'])
```

## 🎨 Cosmic CMS Integration

This website integrates with your Cosmic bucket to dynamically display:

- **Services** - API Platform, Payment Processing, Analytics Dashboard
- **Team Members** - Professional profiles organized by department
- **Testimonials** - Customer feedback with ratings and company logos
- **Case Studies** - Detailed success stories with metrics and results

All content is managed through your Cosmic dashboard and automatically updates on the website.

## 🚀 Deployment Options

### Vercel (Recommended)
1. Connect your repository to Vercel
2. Add environment variables in the Vercel dashboard
3. Deploy automatically on every push

### Netlify
1. Connect your repository to Netlify
2. Set build command: `bun run build`
3. Set publish directory: `.next`
4. Add environment variables in Netlify dashboard

### Other Platforms
This Next.js application can be deployed to any platform that supports Node.js applications.

For production, set these environment variables in your hosting platform:
- `COSMIC_BUCKET_SLUG`
- `COSMIC_READ_KEY`
- `COSMIC_WRITE_KEY`
<!-- README_END -->