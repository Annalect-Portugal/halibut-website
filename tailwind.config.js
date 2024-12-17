/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#116F77',
        accent: '#3A3A3A',
        secondary: '#EC5071'
      },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
        robotomedium: ['RobotoMedium', 'sans-serif'],
        robotobold: ['RobotoBold', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

