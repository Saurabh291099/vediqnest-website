import { motion } from 'framer-motion';
import { Event } from '../../types';

interface EventCardProps {
  event: Event;
  index?: number;
}

export const EventCard = ({ event, index = 0 }: EventCardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    viewport={{ once: true }}
    whileHover={{ y: -8 }}
    className="group card overflow-hidden h-full flex flex-col"
  >
    <div className="relative h-64 overflow-hidden bg-vedic-100">
      <motion.img
        src={event.image}
        alt={event.title}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-vedic-900/40 to-transparent" />
    </div>

    <div className="p-6 flex flex-col flex-grow">
      <h3 className="text-2xl font-display font-600 text-vedic-900 mb-2">{event.title}</h3>

      <p className="text-vedic-700 mb-4 flex-grow">{event.description}</p>

      {event.location && (
        <div className="flex items-center gap-2 text-sm text-vedic-600 font-medium">
          <span>📍</span>
          <span>{event.location}</span>
        </div>
      )}

      {event.date && (
        <div className="flex items-center gap-2 text-sm text-vedic-600 font-medium mt-2">
          <span>📅</span>
          <span>{event.date}</span>
        </div>
      )}
    </div>
  </motion.div>
);
