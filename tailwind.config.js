/ @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');

// Let's create a plugin that adds utilities!
const capitalizeFirst = plugin(function ({ addUtilities }) {
  const newUtilities = {
    '.capitalize-first:first-letter': {
      textTransform: 'uppercase',
    },
  };
  addUtilities(newUtilities, ['responsive', 'hover']);
});
export default {
  content: ['./src//*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#0055b3',
        danger: '#b3002d',
        warning: '#ffcc00',
        success: '#00B377',
      },
    },
  },
  plugins: [capitalizeFirst],
  corePlugins: {
    preflight: false,
  },
};