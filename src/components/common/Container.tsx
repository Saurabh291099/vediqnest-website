import React from 'react';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

export const Container = ({ children, className = '' }: ContainerProps) => (
  <div className={`section-container ${className}`}>
    {children}
  </div>
);

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  fullWidth?: boolean;
}

export const Section = ({ children, className = '', fullWidth = false }: SectionProps) => (
  <section className={`section-padding ${fullWidth ? '' : ''} ${className}`}>
    {fullWidth ? children : <Container>{children}</Container>}
  </section>
);
