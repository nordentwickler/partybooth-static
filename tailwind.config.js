module.exports = {
  theme: {
    fontFamily: {
      'body': ['IBM Plex Sans, sans-serif;'],
      'display': ['Montserrat, sans-serif']
    },
    extend: {
      colors: {
        'primary': '#187BD6',
        'primary-light': '#BADFFF',
        'secondary': '#F86356',
        'light-blue': '#EEF4FC',
      },
      borderWidth: {
        '3': '3px'
      },
      borderRadius:{
        'xl': '2rem'
      },
      fontSize: {
        '7xl': '5rem',
        '8xl': '6rem'
      },
      maxWidth: {
        '80': '80%',
        '1280': '1280px',
        '1440': '90rem',
        '1680': '105rem',
        '16': '16rem'
      }
    },
    container: {
      center: true,
    },
    customForms: theme => ({
      default: {
        'input, textarea, multiselect, select, radio, checkbox': {
          //borderRadius: theme('borderRadius.lg'),
          borderColor: theme('colors.gray.400')
        },
      }
    })
  },
  variants: {},
  plugins: [
    require('@tailwindcss/custom-forms'),
  ]
}
