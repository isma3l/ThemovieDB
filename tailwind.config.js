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
      },
    },
    plugins: [],
  })