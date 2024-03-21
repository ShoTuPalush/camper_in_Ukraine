/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: { sans: ['Inter', 'sans-serif'] },
    container: {
      center: true,
    },
    extend: {
      backgroundImage: {
        'hero-pattern': "url('/src/assets/img/camper_bg.jpg')",
      },
    },
    fontSize: {
      '2xl': ['24px', '1.25'],
      sm: ['16px', '1.5'],
      xsm: ['16px', '1.25'],
    },
  },
  plugins: [],
};
