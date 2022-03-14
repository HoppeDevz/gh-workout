module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      colors: {
        ['pure-black']: "#000000",
        ['shark']: "#1f2123",
        ['gallery']: "#efefef",

        ['orange-peel']: "#e89f00",
        
      }
    },

    theme: {

      fontFamily: {
        ['Roboto']: 'Roboto',
        ['teko']: 'Teko'
      }
    }
  },
  plugins: [],
}
