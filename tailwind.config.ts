import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          100: '#F2E6F7',
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
        black: '#000',

      },

      boxShadow: {
        '3xl': '8px 7px 1px #000',
      }


    },
  },
  plugins: [],
}
export default config
