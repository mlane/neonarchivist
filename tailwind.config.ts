import type { Config } from 'tailwindcss'

export default {
  content: ['./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      /** @todo add colors */
      colors: {},
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
        orbitron: ['Orbitron', 'sans-serif'],
        'fira-code': ['Fira Code', 'monospace'],
      },
    },
  },
  plugins: [],
} satisfies Config
