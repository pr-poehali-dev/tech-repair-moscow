import { Helmet } from "react-helmet-async";

interface SEOHeadProps {
  title: string;
  description: string;
  keywords?: string;
  canonicalUrl?: string;
  ogType?: string;
  ogImage?: string;
}

export default function SEOHead({ 
  title, 
  description, 
  keywords, 
  canonicalUrl,
  ogType = "website",
  ogImage = "/placeholder.svg" 
}: SEOHeadProps) {
  const fullTitle = `${title} | ТехСервис - Ремонт бытовой техники в Москве`;
  
  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      
      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:image" content={ogImage} />
      {canonicalUrl && <meta property="og:url" content={canonicalUrl} />}
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      
      {/* Schema.org */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "ТехСервис",
          "description": description,
          "url": canonicalUrl || "https://techservice.ru",
          "telephone": "+7 (495) 123-45-67",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Москва",
            "addressCountry": "RU"
          },
          "openingHours": "Mo-Su 00:00-23:59",
          "serviceType": "Ремонт бытовой техники"
        })}
      </script>
      
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
    </Helmet>
  );
}