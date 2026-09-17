/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Your new signature luxury palette
        'glam-plum': {
          DEFAULT: '#36103D', // Deep Plum
          'dark': '#1F0824',
          'light': '#6A3175',
        },
        'glam-cream': '#F9F1E6', // Warm Cream
        'glam-gold': {
          DEFAULT: '#E5C07B', // Shimmering Gold
          'dark': '#BF9B5D',
        },
      },
      fontFamily: {
        // High-end serif for headings, modern sans for body
        'serif-display': ['"Playfair Display"', 'serif'],
        'sans-corporate': ['"Inter"', 'sans-serif'],
      },
      animation: {
        'shimmer-slow': 'shimmer 8s linear infinite',
        'fade-in': 'fadeIn 1s ease-out forwards',
      },
      keyframes: {
        shimmer: {
          '0%': { backgroundPosition: '200% center' },
          '100%': { backgroundPosition: '-200% center' },
        },
        fadeIn: {
          '0%': { opacity: 0, transform: 'translateY(10px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}