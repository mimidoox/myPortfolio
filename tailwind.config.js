/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'main':'#8C1F28',
        'Cgreen':'#044040',
        'Cblue':'#002045',
        'violet' :'#6C2E53'
      },
      fontFamily:{
          'lobster': ['Lobster','cursive'],
          'poppins': ['Poppins', 'sans-serif'],
          'righteous': ['Righteous', 'cursive'],
          'sacramento': ['Sacramento', 'cursive']
      }
    },
  },
  plugins: [],
}