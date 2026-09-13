import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
  children: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', size = 'md', isLoading = false, disabled, children, className = '', ...props }, ref) => {
    const baseClasses = {
      sm: 'btn-small px-3 py-1.5 text-sm',
      md: 'btn-small px-6 py-3 text-base',
      lg: 'btn-small px-8 py-4 text-lg',
    };

    const variantClasses = {
      primary: 'bg-vedic-600 text-cream-50 hover:bg-vedic-700 focus:ring-vedic-400',
      secondary: 'border-2 border-vedic-600 text-vedic-600 hover:bg-vedic-50 focus:ring-vedic-400',
      ghost: 'text-vedic-600 hover:text-vedic-700 focus:ring-vedic-400',
    };

    return (
      <button
        ref={ref}
        disabled={isLoading || disabled}
        className={`
          ${baseClasses[size]}
          ${variantClasses[variant]}
          rounded-lg font-medium transition-all duration-300
          focus:outline-none focus:ring-2 focus:ring-offset-2
          active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed
          ${className}
        `}
        {...props}
      >
        {isLoading ? (
          <span className="inline-flex items-center gap-2">
            <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
            </svg>
            Loading...
          </span>
        ) : (
          children
        )}
      </button>
    );
  }
);

Button.displayName = 'Button';
