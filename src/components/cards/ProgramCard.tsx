import { motion } from 'framer-motion';
import * as LucideIcons from 'lucide-react';
import { Program } from '../../types';

interface ProgramCardProps {
  program: Program;
  index?: number;
}

export const ProgramCard = ({ program, index = 0 }: ProgramCardProps) => {
  const IconComponent = (LucideIcons as Record<string, any>)[program.icon] || LucideIcons.Lightbulb;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -8 }}
      className="group card p-8 h-full flex flex-col"
    >
      <div className="mb-6 inline-flex w-16 h-16 items-center justify-center rounded-lg bg-gradient-to-br from-vedic-100 to-saffron-100 group-hover:from-vedic-200 group-hover:to-saffron-200 transition-all duration-300">
        <IconComponent className="w-8 h-8 text-vedic-600" strokeWidth={1.5} />
      </div>

      <h3 className="text-xl md:text-2xl font-display font-600 text-vedic-900 mb-3">{program.title}</h3>

      <p className="text-vedic-700 mb-6 flex-grow">{program.description}</p>

      <ul className="space-y-2">
        {program.details.slice(0, 3).map((detail, i) => (
          <li key={i} className="flex items-start gap-3">
            <span className="text-saffron-500 font-bold text-lg mt-0.5">•</span>
            <span className="text-sm text-vedic-600">{detail}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
};
