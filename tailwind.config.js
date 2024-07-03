/** @type {import('tailwindcss').Config} */
export default {
  content: [
		"./index.html",
		"./src/**/*.{js,ts,jsx,tsx}"
	],
  theme: {
    extend: {
      colors: {
        dark: {
          4: '#2e3440',
          3: '#3b4252',
          2: '#434c5e',
          1: '#4c566a',
        },
        light: '#eceff4',
        red: '#bf616a',
        orange: '#d08770',
        yellow: '#ebcb8b',
        green: '#a3be8c',
        purple: '#b48ead',
      },
      width: {
        custom: '640px',
      },
      height: {
        custom: '480px',
      },
    },
  },
  plugins: [],
}
