module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        lightblue: '#D0EFFF',
        lightyellow: '#FFF6D0',
        orange: '#FF6B6B',
        limegreen: '#C0FF6B',
        purple: '#D0C6FF',
        white: '#FFFFFF',
        gray: '#9CA3AF',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif']
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
  ],
}
