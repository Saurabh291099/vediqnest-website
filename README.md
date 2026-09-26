# VedicNest Website

A premium, modern, responsive website for VedicNest — Vedic learning, yoga, creativity and cultural experiences for children aged 6–12 in Noida.

## 🚀 Quick Start

### Prerequisites
- Node.js 16+ and npm

### Installation

```bash
cd vedicnest-website
npm install
```

### Development

```bash
npm run dev
```

The website will open in your browser at `http://localhost:3000`

### Build

```bash
npm run build
```

## 📁 Project Structure

```
src/
├── assets/          # Images and static files
├── components/
│   ├── cards/      # Program, Event, Testimonial cards
│   ├── common/     # Button, Container, SectionHeading
│   ├── forms/      # React Hook Form implementations
│   └── layout/     # Navbar, Footer
├── data/           # Content and configuration
│   ├── programs.ts
│   ├── events.ts
│   ├── gallery.ts
│   └── testimonials.ts
├── hooks/          # Custom React hooks
├── lib/            # Utilities (validation, SEO)
├── pages/          # Page components
│   ├── Home.tsx
│   ├── About.tsx
│   ├── Programs.tsx
│   ├── WeekendProgram.tsx
│   ├── Events.tsx
│   ├── Gallery.tsx
│   └── Contact.tsx
├── types/          # TypeScript types
├── App.tsx         # Main app component
├── main.tsx        # Entry point
└── index.css       # Global styles
```

## 🎨 Design System

### Colors
- **Primary**: Deep forest green (`vedic-600`)
- **Secondary**: Warm cream/ivory (`cream-50`)
- **Accent**: Soft saffron/turmeric (`saffron-500`)
- **Supporting**: Earthy beige, muted brown, warm gold

### Typography
- **Display**: Cormorant Garamond (headings)
- **Body**: Inter (body text)

### Components
- Reusable Button, Card, Form components
- Animated sections using Framer Motion
- Responsive design with Tailwind CSS

## 📝 Key Features

✅ 7 pages with unique content
✅ Responsive mobile-first design
✅ React Hook Form integration with validation
✅ Smooth animations with Framer Motion
✅ SEO optimized with proper meta tags
✅ Accessibility best practices
✅ Performance optimized
✅ Lighthouse-ready

## 🔧 Configuration Files

- **tailwind.config.js** - Tailwind CSS customization
- **vite.config.ts** - Vite bundler configuration
- **tsconfig.json** - TypeScript configuration
- **package.json** - Dependencies and scripts

## 📋 Content to Update

The following files contain placeholder data that should be updated with real client information:

1. **src/data/testimonials.ts** - Replace with actual parent testimonials
2. **src/data/gallery.ts** - Replace image URLs with real VedicNest photos
3. **src/data/events.ts** - Add actual event dates, prices, and details
4. **Contact information** - Update with real address, phone, email (when available)

## 🌐 Pages

### Home
Hero section with strong value proposition, programs overview, benefits, and CTAs.

### About
Philosophy, approach, core values, and mission of VedicNest.

### Programs
Detailed breakdown of all four programs with descriptions and benefits.

### Weekend Program
High-conversion page with session flow, booking form, and FAQs.

### Events
Devotional and cultural experiences including bhajan clubbing.

### Gallery
Masonry gallery with hover effects and category filtering.

### Contact
Contact form with validation, FAQ section, and location map.

## 🚢 Deployment

To deploy this website:

1. Run `npm run build` to create production build
2. Deploy the `dist/` folder to your hosting provider
3. Ensure proper SEO meta tags and structured data are in place

### Hosting Options
- Vercel (recommended for React)
- Netlify
- AWS S3 + CloudFront
- Your own server

## 🔐 Form Handling

Currently, forms use mock submissions. To connect to a real backend:

1. Update `handleFormSubmit` in TrialForm.tsx and ContactForm.tsx
2. Integrate with your backend API or service (Formspree, EmailJS, etc.)
3. Add error handling and retry logic as needed

## 📊 Performance Targets

- Lighthouse Performance: 90+
- Accessibility: 90+
- Best Practices: 90+
- SEO: 90+

## 🤝 Contributing

When making updates:
1. Keep components small and reusable
2. Maintain consistent styling with Tailwind
3. Test on mobile and desktop
4. Update TypeScript types as needed
5. Ensure accessibility compliance

## 📄 License

© 2026 VedicNest. All rights reserved.

## 👨‍💻 Support

For questions or issues, reach out to the VedicNest team through the contact form.
