import type { Config } from 'tailwindcss'

export default {
  content: ['./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      /** @todo add colors */
      colors: {},
      fontFamily: {
        orbitron: ['Orbitron', 'sans-serif'],
        sans: ['Roboto', 'sans-serif'],
        'fira-code': ['Fira Code', 'monospace'],
      },
    },
  },
  plugins: [],
} satisfies Config
