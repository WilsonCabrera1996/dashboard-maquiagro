module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      primary: 'Poppins',
    },
    container: {
      padding: {
        DEFAULT: '30px',
        lg: '0',
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1440px',
    },
    extend: {
      colors: {
        primary: '#222222',
        secondary: '#F5E6E0',
      },
      dropShadow: {
        'custom': '0 4px 6px rgba(0, 0, 0, 0.4)',
        'custom2': '0 4px 6px rgba(255, 255, 255, 0.6)',
      },
      backgroundImage: {
        hero: "url('./img/ImgAnun.jpg')",
      },
    },
  },
  plugins: [],
};
