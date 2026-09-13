/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary - Deep forest green
        vedic: {
          50: '#f0f7f4',
          100: '#ddeee8',
          200: '#bcddd2',
          300: '#8bc3b4',
          400: '#5aab96',
          500: '#3d9378',
          600: '#2d7860',
          700: '#25634f',
          800: '#1f5041',
          900: '#1a4237',
          950: '#0d2620',
        },
        // Warm cream/ivory
        cream: {
          50: '#fdfdf8',
          100: '#faf9f1',
          200: '#f5f3e8',
          300: '#f0ede0',
          400: '#e8e4d1',
          500: '#dfd9c3',
          600: '#d4cdb8',
          700: '#b8aaa1',
          800: '#9c8a7d',
          900: '#7d6d63',
          950: '#4a4036',
        },
        // Soft saffron/turmeric
        saffron: {
          50: '#fef9ed',
          100: '#fcf1d8',
          200: '#f9e5af',
          300: '#f4d485',
          400: '#edc256',
          500: '#e4b236',
          600: '#d4942d',
          700: '#b87527',
          800: '#945c24',
          900: '#7a4a20',
          950: '#43280e',
        },
        // Supporting earthy tones
        earth: {
          light: '#e8ddd1',
          main: '#a89a8a',
          dark: '#6b5d50',
        },
        gold: {
          light: '#f0d99b',
          main: '#d4a85a',
          dark: '#a87f28',
        },
      },
      fontFamily: {
        'display': ['Cormorant Garamond', 'serif'],
        'body': ['Inter', 'sans-serif'],
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1' }],
        '6xl': ['3.75rem', { lineHeight: '1' }],
        '7xl': ['4.5rem', { lineHeight: '1' }],
      },
      spacing: {
        'safe-top': 'max(env(safe-area-inset-top), 1rem)',
        'safe-bottom': 'max(env(safe-area-inset-bottom), 1rem)',
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease-out forwards',
        'fade-in': 'fadeIn 0.5s ease-out',
        'slide-down': 'slideDown 0.3s ease-out',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      transitionDuration: {
        '400': '400ms',
      },
    },
  },
  plugins: [],
}
