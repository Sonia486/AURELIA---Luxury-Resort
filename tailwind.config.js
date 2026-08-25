/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          DEFAULT: '#0a0a0a',
          50: '#1a1a1a',
          100: '#111111',
        },
        gold: {
          DEFAULT: '#c9a96e',
          200: '#d4c09a',
          300: '#c9a96e',
          400: '#b8944f',
        },
        cream: {
          DEFAULT: '#f5f0e8',
        },
      },
      fontFamily: {
        serif: ['Playfair Display', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'pulse-ring': 'pulse-ring 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        'pulse-ring': {
          '0%': { boxShadow: '0 0 0 0 rgba(201, 169, 110, 0.4)' },
          '70%': { boxShadow: '0 0 0 20px rgba(201, 169, 110, 0)' },
          '100%': { boxShadow: '0 0 0 0 rgba(201, 169, 110, 0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
        'gold-glow': '0 0 20px rgba(201, 169, 110, 0.3)',
      },
      transitionTimingFunction: {
        'luxury': 'cubic-bezier(0.23, 1, 0.32, 1)',
      },
    },
  },
  plugins: [],
}