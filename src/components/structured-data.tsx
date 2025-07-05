import Script from "next/script";
import { config } from "@/data/config";

export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Gavin Adlan",
    "jobTitle": "Full-Stack Developer",
    "description": "Full-Stack Developer & Creative Technologist specializing in interactive web experiences and 3D animations",
    "url": config.site,
    "image": config.ogImg,
    "email": config.email,
    "nationality": "Indonesian",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "ID"
    },
    "sameAs": [
      config.social.github,
      config.social.linkedin,
      config.social.twitter,
      config.social.instagram
    ],
    "knowsAbout": [
      "Web Development",
      "Full-Stack Development",
      "React",
      "Next.js",
      "3D Animations",
      "Interactive Web Experiences",
      "GSAP",
      "Framer Motion",
      "Spline"
    ],
    "worksFor": {
      "@type": "Organization",
      "name": "Freelance Developer"
    },
    "alumniOf": {
      "@type": "Organization",
      "name": "Web Development"
    }
  };

  const websiteStructuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Gavin Adlan Portfolio",
    "url": config.site,
    "description": config.description.long,
    "author": {
      "@type": "Person",
      "name": "Gavin Adlan"
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": config.site + "/search?q={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <>
      <Script
        id="person-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
      <Script
        id="website-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteStructuredData),
        }}
      />
    </>
  );
} 