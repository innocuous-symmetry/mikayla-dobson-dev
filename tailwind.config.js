/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      animation: {
        'logo-throw-left': 'logoThrowLeft 1s ease forwards',
        'logo-throw-right': 'logoThrowRight 1s ease forwards',
        'logo-throw-down': 'logoThrowDown 1s ease forwards',
      },
      keyframes: {
        logoThrowLeft: {
          '0%': { transform: 'translateX(0)'},
          '100%': { transform: 'translateX(-56px)' }
        },
        logoThrowRight: {
          '0%': { transform: 'translateX(0)'},
          '100%': { transform: 'translateX(56px)' }
        },
        logoThrowDown: {
          '0%': { transform: 'translateY(0)'},
          '100%': { transform: 'translateY(80px)' }
        },
      }
    },
  },
  plugins: [],
}
