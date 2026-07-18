import React, { Suspense } from 'react';
import { Hero } from '../components/Hero';
import { About } from '../components/About';

import { SEO } from '../components/SEO';

const Awards = React.lazy(() => import('../components/Awards').then(module => ({ default: module.Awards })));
const FeaturedProject = React.lazy(() => import('../components/FeaturedProject').then(module => ({ default: module.FeaturedProject })));
const BeforeAfter = React.lazy(() => import('../components/BeforeAfter').then(module => ({ default: module.BeforeAfter })));
const Services = React.lazy(() => import('../components/Services').then(module => ({ default: module.Services })));
const Gallery = React.lazy(() => import('../components/Gallery').then(module => ({ default: module.Gallery })));
const Stats = React.lazy(() => import('../components/Stats').then(module => ({ default: module.Stats })));
const Features = React.lazy(() => import('../components/Features').then(module => ({ default: module.Features })));
const Team = React.lazy(() => import('../components/Team').then(module => ({ default: module.Team })));
const Testimonials = React.lazy(() => import('../components/Testimonials').then(module => ({ default: module.Testimonials })));
const FAQ = React.lazy(() => import('../components/FAQ').then(module => ({ default: module.FAQ })));
const Contact = React.lazy(() => import('../components/Contact').then(module => ({ default: module.Contact })));
const SocialMedia = React.lazy(() => import('../components/SocialMedia').then(module => ({ default: module.SocialMedia })));
const MediaHighlights = React.lazy(() => import('../components/MediaHighlights').then(module => ({ default: module.MediaHighlights })));

export function Home() {
  const localBusinessSchema = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    "name": "Home Heart Construction Pvt. Ltd.",
    "image": "https://homeheart.in/assets/hero-bg.jpg",
    "@id": "https://homeheart.in/",
    "url": "https://homeheart.in/",
    "telephone": "+918114567890",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Home Heart Construction, Gaya",
      "addressLocality": "Gaya",
      "addressRegion": "BR",
      "postalCode": "823001",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 24.7914,
      "longitude": 85.0002
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      "opens": "10:00",
      "closes": "18:00"
    }
  });

  const websiteSchema = JSON.stringify({
    "@context": "https://schema.org/",
    "@type": "WebSite",
    "name": "Home Heart Construction Pvt. Ltd.",
    "url": "https://homeheart.in/",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://homeheart.in/?s={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  });

  return (
    <>
      <SEO 
        title="Home Heart Construction Pvt. Ltd. | Luxury Real Estate Developer Gaya"
        description="Discover premium luxury apartments and commercial projects in Gaya, Bihar by Home Heart Construction Pvt. Ltd. Top Builders in Bihar."
        schema={[localBusinessSchema, websiteSchema]}
      />
      <Hero />
      <About />
      <Suspense fallback={<div className="min-h-screen" />}>
        <Awards />
        <FeaturedProject />
        <Services />
        <Gallery />
        <Stats />
        <BeforeAfter />
        <Features />
        <Team />
        <Testimonials />
        <FAQ />
        <Contact />
        <SocialMedia />
        <MediaHighlights />
      </Suspense>
    </>
  );
}
