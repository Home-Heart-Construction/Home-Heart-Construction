import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  url?: string;
  image?: string;
  type?: 'website' | 'article' | 'place';
  schema?: string[]; // Array of JSON-LD schemas
}

export const SEO: React.FC<SEOProps> = ({
  title = "Home Heart Construction Pvt. Ltd. | Luxury Real Estate Developer Gaya",
  description = "Discover premium luxury apartments and commercial projects in Gaya, Bihar by Home Heart Construction Pvt. Ltd. Explore Golden Heights and Ghausi Enclave.",
  url = "https://homeheart.in/",
  image = "https://homeheart.in/og-image.jpg",
  type = "website",
  schema = [],
}) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta property="og:type" content={type} />

      {/* Twitter */}
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* JSON-LD Schemas */}
      {schema.map((s, index) => (
        <script type="application/ld+json" key={index}>
          {s}
        </script>
      ))}
    </Helmet>
  );
};
