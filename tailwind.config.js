/** @type {import('tailwindcss').Config} */
import withMT from "@material-tailwind/react/utils/withMT";

export default withMT({
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          'custom-color': '#08152d',
          'buttom-color': '#0282cc',
          'disabled-button': "#6dbae7"
        },
        keyframes: {
          spinner: {
            '0%': { transform: 'rotate(0deg)' },
            '100%': { transform: 'rotate(360deg)' },
          }
        },
        animation: {
          spinner: 'spinner 1s linear infinite',
        }
      },
    },
    plugins: [],
  })