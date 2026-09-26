import { useEffect } from 'react';

interface MetaTagProps {
  title: string;
  description: string;
  image?: string;
  url?: string;
  type?: string;
  keywords?: string;
}

export const useSEOMetaTags = ({
  title,
  description,
  image,
  url = typeof window === 'undefined' ? '' : window.location.href,
  type = 'website',
  keywords = 'VedicNest, vedic learning, kids programs',
}: MetaTagProps) => {
  useEffect(() => {
    // Update document title
    document.title = title;

    // Update meta tags
    const updateMetaTag = (name: string, content: string) => {
      let element = document.querySelector(`meta[name="${name}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute('name', name);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    const updatePropertyTag = (property: string, content: string) => {
      let element = document.querySelector(`meta[property="${property}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute('property', property);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    updateMetaTag('description', description);
    updateMetaTag('keywords', keywords);
    updatePropertyTag('og:title', title);
    updatePropertyTag('og:description', description);
    updatePropertyTag('og:type', type);
    updatePropertyTag('og:url', url);
    if (image) updatePropertyTag('og:image', image);
  }, [title, description, image, url, type, keywords]);
};
