export interface FormData {
  parentName: string;
  childName: string;
  childAge: number;
  phone: string;
  email: string;
  message?: string;
}

export interface TrialFormData extends FormData {
  preferredDay?: string;
}

export interface ContactFormData extends FormData {
  interestedIn: string;
}

export interface Program {
  id: string;
  title: string;
  description: string;
  icon: string;
  details: string[];
}

export interface Event {
  id: string;
  title: string;
  description: string;
  image: string;
  date?: string;
  location?: string;
}

export interface GalleryItem {
  id: string;
  image: string;
  title: string;
  category: string;
  alt: string;
}

export interface Testimonial {
  id: string;
  author: string;
  child: string;
  childAge: number;
  text: string;
  avatar?: string;
}
