# Agility Property Maintenance Website

A modern, responsive website for Agility Property Maintenance - South Florida's go-to Tree and Landscaping Service.

## Features

- **Home Page**: Hero section with 5-star rating, customer reviews, image gallery, and contact form
- **Gallery Page**: Showcase of previous work
- **Services Page**: Detailed information about tree services and landscaping services
- **Responsive Design**: Mobile-friendly design that works on all devices
- **Modern UI**: Beautiful, professional design with smooth animations

## Tech Stack

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Lucide React (Icons)

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout with Navbar and Footer
│   ├── page.tsx            # Home page
│   ├── gallery/
│   │   └── page.tsx        # Gallery page
│   ├── services/
│   │   └── page.tsx        # Services page
│   └── globals.css         # Global styles
├── components/
│   ├── Navbar.tsx          # Navigation component
│   ├── Footer.tsx          # Footer component
│   ├── Hero.tsx            # Hero section
│   ├── Reviews.tsx         # Customer reviews section
│   ├── Gallery.tsx         # Gallery preview component
│   └── ContactForm.tsx     # Contact/booking form
└── public/
    ├── agility-property-maintenance-logo.webp
    └── agility-property-maintenance-background.webp
```

## Notes

- The reviews section currently uses placeholder data. To integrate real Google reviews, you'll need to:
  - Use the Google Places API (requires API key)
  - Or use a third-party service that provides Google reviews
  - Or implement a web scraping solution (check Google's terms of service)

- The contact form currently logs to console. In production, you'll need to:
  - Connect it to a backend API
  - Or use a service like Formspree, Netlify Forms, or similar

- Gallery images are currently using the background image as placeholder. Replace with actual work photos.

## Build for Production

```bash
npm run build
npm start
```

