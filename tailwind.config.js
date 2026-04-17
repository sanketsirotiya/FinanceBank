/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          purple: '#6C5DD3',
          blue: '#4ECDC4',
        },
        bg: {
          primary: '#1A1D2E',
          secondary: '#22273B',
          tertiary: '#2A2F45',
        },
        text: {
          primary: '#FFFFFF',
          secondary: '#8E92BC',
          muted: '#5A607F',
        },
        status: {
          success: '#00D9A5',
          error: '#FF6B6B',
          warning: '#FFB800',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'glow': '0 0 20px rgba(108, 93, 211, 0.3)',
      },
    },
  },
  plugins: [],
}
