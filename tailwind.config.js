/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          orange: '#F97316',
          'orange-dark': '#EA580C',
          navy: '#0F172A',
        },
      },
      keyframes: {
        pulse_cta: {
          '0%, 100%': { transform: 'scale(1)', boxShadow: '0 0 0 0 rgba(249,115,22,0.7)' },
          '50%': { transform: 'scale(1.04)', boxShadow: '0 0 0 10px rgba(249,115,22,0)' },
        },
        slide_up: {
          '0%': { opacity: '0', transform: 'translateY(28px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        hero_progress: {
          '0%': { width: '0%' },
          '100%': { width: '100%' },
        },
        bubble_pop: {
          '0%': { opacity: '0', transform: 'scale(0.4) translateY(6px)' },
          '70%': { opacity: '1', transform: 'scale(1.08) translateY(0)' },
          '100%': { opacity: '1', transform: 'scale(1) translateY(0)' },
        },
      },
      animation: {
        pulse_cta: 'pulse_cta 2s ease-in-out infinite',
        slide_up: 'slide_up 0.65s ease-out forwards',
        hero_progress: 'hero_progress 5s linear forwards',
        bubble_pop: 'bubble_pop 0.4s ease-out forwards',
      },
    },
  },
  plugins: [],
}
