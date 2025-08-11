/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      keyframes: {
        slideInFromLeft: {
          '0%': { transform: 'translateX(-100px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        typing: {
          "0%": {
            width: "0%"
          },
          "12%": {
            width: "100%"
          },
          "60%": {
            width: "100%"
          },
          "72%": {
            width: "0%"
          },
          "85%": {
            width: "0%"
          },
          "100%": {
            width: "0%"
          }
        },
        blink: {
          "50%": {
            borderColor: "transparent"
          },
          "100%": {
            borderColor: "white"
          }
        }
      },
      animation: {
        'slide-in': 'slideInFromLeft 0.8s ease forwards',
        'typing': 'typing 15s infinite, blink 0.7s infinite'
      }
    },
  },
  plugins: [],
}
