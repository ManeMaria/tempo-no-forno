import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        xs: '320px',
        'sm': '640px',
        // => @media (min-width: 640px) { ... }

        'md': '768px',
        // => @media (min-width: 768px) { ... }

        'lg': '1024px',
        // => @media (min-width: 1024px) { ... }

        'xl': '1280px',
        // => @media (min-width: 1280px) { ... }

        '2xl': '1536px',
      },
      colors: {
        primary: {
          100: '#fddae3d2',
          200: '#EAACC4',
          300: '#FECBD8',
          400: '#DFC9FA',
        },
        secondary: {
          100: '#F4F4F4',
          200: '#D9D9D9',
          300: '#BDBDBD',
          400: '#6B8989'
        },
        tertiary: {
          yellow: '#FEDA79',
          green: '#CCE5E5'
        },
        black: '#2f0b5b',

      },

      boxShadow: {
        '3xl': '5px 5px 1px #2f0b5b',
      },

      textColor: {
        default: '#2f0b5b',
      },

      dropShadow: {
        '3xl': '10px 10px 1px #2f0b5b',
      }

    },
  },
  plugins: [],
}
export default config
