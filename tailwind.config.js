/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('../src/assets/webp/herosection-bg.webp')",
        'why-pattern': "url('../src/assets/webp/why-globe-bg.webp')",
        'card': "url('../src/assets/webp/card-bg.webp')",
      },
      screens: {
        '575': '576px',
        '991': '992px',
        '1537': '1537px',
      },
      fontFamily: {
        'ff_inter': 'Inter',
        'ff_trirong': 'Trirong',
        'ff_montserrat': 'Montserrat',
      },
    },
  },
  plugins: [],
}