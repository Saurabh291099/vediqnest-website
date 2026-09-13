interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

export const SectionHeading = ({ title, subtitle, centered = true, className = '' }: SectionHeadingProps) => (
  <div className={centered ? 'text-center mb-12' : 'mb-12'}>
    <h2 className={`heading-section ${className}`}>{title}</h2>
    {subtitle && <p className="subheading text-vedic-600 mt-4 max-w-2xl mx-auto">{subtitle}</p>}
  </div>
);
