module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        'roofing': "url('/bg.jpg')",        
       }),
       colors: {
        'template-red': '#E63946',
        'template-blue-800': '#1D3557',
        'template-blue-400': '#457B9D',
        'template-blue-100': '#A8DADC',
        'template-bg': '#F1FAEE',
      },
      screens: {
        'xs': '365px',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
