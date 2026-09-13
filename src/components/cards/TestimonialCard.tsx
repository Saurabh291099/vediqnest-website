import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { Testimonial } from '../../types';

interface TestimonialCardProps {
  testimonial: Testimonial;
  index?: number;
}

export const TestimonialCard = ({ testimonial, index = 0 }: TestimonialCardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    viewport={{ once: true }}
    className="card p-8 bg-gradient-to-br from-cream-50 to-white"
  >
    <div className="flex gap-1 mb-4">
      {[...Array(5)].map((_, i) => (
        <Star key={i} size={18} className="fill-saffron-500 text-saffron-500" />
      ))}
    </div>

    <p className="text-vedic-800 mb-6 italic leading-relaxed">"{testimonial.text}"</p>

    <div className="flex items-center gap-4">
      {testimonial.avatar && (
        <img
          src={testimonial.avatar}
          alt={testimonial.author}
          className="w-12 h-12 rounded-full object-cover"
        />
      )}
      <div>
        <p className="font-display font-600 text-vedic-900">{testimonial.author}</p>
        <p className="text-sm text-vedic-600">Parent of {testimonial.child}, {testimonial.childAge} years</p>
      </div>
    </div>
  </motion.div>
);
