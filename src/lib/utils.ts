// Form validation utilities
export const validatePhoneNumber = (phone: string): boolean => {
  // Indian phone number validation (10 digits)
  const phoneRegex = /^[6-9]\d{9}$/;
  return phoneRegex.test(phone.replace(/\D/g, ''));
};

export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const validateAge = (age: number): boolean => {
  return age >= 6 && age <= 12;
};

export const validateName = (name: string): boolean => {
  return name.trim().length >= 2;
};

// SEO utilities
export const getMetaTags = (page: string) => {
  
  const metaTags: Record<string, { title: string; description: string; keywords: string }> = {
    home: {
      title: 'VedicNest | Vedic Learning, Yoga & Creative Experiences for Kids in Noida',
      description: 'VedicNest helps children aged 6–12 build focus, confidence and values through Vedic stories, yoga, creativity and meaningful weekend experiences in Noida.',
      keywords: 'vedic learning for kids, vedic stories, yoga for kids Noida, weekend program kids, holistic learning children, values-based education',
    },
    about: {
      title: 'About VedicNest | Vedic & Values-Based Learning for Kids',
      description: 'Discover VedicNest\'s approach to child development combining Vedic traditions with modern, engaging activities for children aged 6–12.',
      keywords: 'vedic education, values-based learning, child development, Indian culture for kids, mindfulness for children',
    },
    programs: {
      title: 'Vedic Stories, Yoga & Creativity for Kids | VedicNest Programs',
      description: 'Explore VedicNest\'s comprehensive programs: Vedic stories, yoga & mindfulness, art & creativity, and values-based learning.',
      keywords: 'yoga for kids, vedic stories kids, creative activities children, mindfulness programs, values education',
    },
    weekend: {
      title: 'Weekend Program for Kids in Noida | VedicNest',
      description: 'Join VedicNest\'s weekend program for children aged 6–12. Experience storytelling, yoga, creativity and values-based learning.',
      keywords: 'weekend program kids Noida, kids activities Noida, creative learning, vedic culture children',
    },
    events: {
      title: 'VedicNest Events & Cultural Experiences | Noida',
      description: 'Discover VedicNest\'s devotional and cultural experiences including bhajan gatherings and community events.',
      keywords: 'bhajans for kids, devotional events, cultural gatherings Noida, family events',
    },
    gallery: {
      title: 'VedicNest Gallery | Children Learning, Stories & Community',
      description: 'Browse our gallery of VedicNest sessions, events and community moments showcasing children learning and growing.',
      keywords: 'vedicnest gallery, children learning photos, yoga classes, cultural events',
    },
    contact: {
      title: 'Book a Trial Session | VedicNest Noida',
      description: 'Get in touch with VedicNest to book a trial session or learn more about our programs.',
      keywords: 'contact vedicnest, book trial session, kids programs Noida',
    },
  };

  return metaTags[page] || metaTags.home;
};

// String utilities
export const formatPhoneNumber = (phone: string): string => {
  const cleaned = phone.replace(/\D/g, '');
  if (cleaned.length === 10) {
    return `+91 ${cleaned.slice(0, 5)} ${cleaned.slice(5)}`;
  }
  return phone;
};

export const capitalizeWords = (str: string): string => {
  return str
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ');
};

// Form helpers
export const getAgeOptions = () => {
  return Array.from({ length: 7 }, (_, i) => ({
    value: String(i + 6),
    label: `${i + 6} years old`,
  }));
};

export const getDayOptions = () => [
  { value: 'saturday', label: 'Saturday' },
  { value: 'sunday', label: 'Sunday' },
];

export const getInterestedInOptions = () => [
  { value: 'trial', label: 'Book a Trial Session' },
  { value: 'weekend', label: 'Weekend Program' },
  { value: 'events', label: 'Events' },
  { value: 'collaboration', label: 'Collaboration' },
  { value: 'general', label: 'General Enquiry' },
];
