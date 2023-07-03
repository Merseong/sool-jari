/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    container: {
      center: true
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: '#00ff00'
        },
        secondary: {
          DEFAULT: '#00ee00'
        }
      }
    }
  },
  plugins: []
};
