import type { Config } from 'tailwindcss'

export default {
  content: ['./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'media',
  theme: {
    extend: {
      colors: {
        darkBackground: '#121212',
        darkText: '#E0E0E0',
        lightBackground: '#FFFFFF',
        lightText: '#2D2D2D',
        neonGreen: '#00FF99',
        neonPink: '#FF00FF',
        neonCyan: '#00FFFF',
        neonOrange: '#FF4500',
      },
      fontFamily: {
        firaCode: ['Fira Code', 'monospace'],
        orbitron: ['Orbitron', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
} satisfies Config
