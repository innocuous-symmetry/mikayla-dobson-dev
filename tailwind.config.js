/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  safelist: [
    {
      pattern: /from-.*/,
    },
    {
      pattern: /to-.*/,
    }
  ],
  theme: {
    extend: {
      colors: {
        'darkPlum': '#1e0631',
      },
      transitionTimingFunction: {
        'quick-start': 'cubic-bezier(.17,.67,0,.89)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      animation: {
        'logo-throw-left': 'logoThrowLeft 1s ease forwards',
        'logo-throw-right': 'logoThrowRight 1s ease forwards',
        'logo-throw-down': 'logoThrowDown 1s ease forwards',
        'fade-in': 'fadeIn 1s ease forwards',
        'text-gradient': 'textGradient 15s ease infinite'
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 }
        },
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

        textGradient: {
          '0%': { opacity: 0},
          '12%': { opacity: 100 },
          '88%': { opacity: 98 },
          '100%': { opacity: 0 }
        }
      }
    },
  },
  plugins: [],
}
