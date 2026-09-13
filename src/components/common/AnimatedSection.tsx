import { motion } from 'framer-motion';
import { useScrollAnimation, usePrefersReducedMotion } from '../../hooks/useScrollAnimation';
import React from 'react';

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export const AnimatedSection = ({ children, className = '', delay = 0 }: AnimatedSectionProps) => {
  const [ref, isVisible] = useScrollAnimation();
  const prefersReducedMotion = usePrefersReducedMotion();

  return (
    <motion.div
      ref={ref as any}
      initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
      animate={isVisible && !prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay, ease: 'easeOut' }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
