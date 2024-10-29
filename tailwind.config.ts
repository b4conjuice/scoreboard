import { type Config } from 'tailwindcss'

export default {
  content: ['./src/**/*.tsx'],
  theme: {
    extend: {
      colors: {
        cobalt: '#193549',
        'cb-blue': '#193549',
        'cb-yellow': '#ffc600',
        'cb-orange': '#ff9d00',
        'cb-mint': '#2affdf',
        'cb-off-blue': '#0d3a58',
        'cb-dusty-blue': '#35434d',
        'cb-dark-blue': '#15232d',
        'cb-pink': '#fb94ff',
        'cb-light-blue': '#9effff',
        'cb-white': '#cccccc',
      },
      animation: {
        'spin-slow': 'spin 2s linear infinite',
      },
    },
  },
  plugins: [],
} satisfies Config
