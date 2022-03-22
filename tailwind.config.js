module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      height: {
        '1':'1px',
        '3': '15px',
      },
      fontFamily: {
        Manrope: "'Manrope', sans-serif"
      },
      strokeWidth: {
        '3': '3px',
      },
      borderWidth: {
        '1': '1px'
      },
      colors: {
        'brown': '#D87D4A',
        'lightBrown': '#fbaf85',
        'black': '#101010',
        'pureBlack': '#000000',
        'white': '#FFFFFF',
        'lightGray': '#F1F1F1',
        'gray': '#FAFAFA',
        'line': '#F2F2F2'
      },
      fontSize: {       
        13: ['13px', {
          letterSpacing: '1px',
          lineHeight: '18px',
        }],
         113: ['13px', {
          letterSpacing: '2px',
          lineHeight: '25px',
        }],
        14: ['14px', {
          letterSpacing: '10px',
          lineHeight: '19px',
        }],
        18: ['18px', {
          letterSpacing: '12px',
          lineHeight: '20px',
        }],
        15: ['15px', {          
          lineHeight: '25px',
        }],
        36: ['36px', {
          letterSpacing: '1.29px',
          lineHeight: '40px',
        }],
        46: ['46px', {
          letterSpacing: '1.69px',
          lineHeight: '60px',
        }],
        56: ['56px', {
          letterSpacing: '2px',
          lineHeight: '58px',
        }],
      },
      maxWidth: {
        '8xl': '1440px'
      },
      inset: {
        '49': '195px',
        '53': '216px',
        '41': '167px',
        '1/5': '20%',
        },
      padding: {
        15: '15px',
        8: '30px',
        eight: '32px'
      },
      screens: {
        smLg: '450px',
        smXL: '556px',
        smXXL: '650px',
        '2XL': '1440px'
      },
      keyframes: {
         fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity:1 }
        },
        heroDescriptionAnimate: {
          '0%': { opacity: 0 },
          '100%': { opacity:1 }
        }
      },
      animation: {
         fadeIn: 'fadeIn 2s ease-in',
         heroDescriptionAnimate: 'heroDescriptionAnimate 2s ease-in',
      },
      transitionDelay: {
        '0': '0ms',
        '3000': '3000ms',
      },
    },
  },
  plugins: [],
}