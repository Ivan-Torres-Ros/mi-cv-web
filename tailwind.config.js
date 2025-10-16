/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{ts,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Outfit', 'Inter', 'ui-sans-serif', 'system-ui', 'Segoe UI', 'Helvetica', 'Arial', 'sans-serif'],
      },
      colors: {
        // Azul marino profundo (base tecnológica/confiable)
        brandNavy: {
          50: '#f2f5fb', 100: '#e6ebf7', 200: '#c9d4ec', 300: '#a5b7de', 400: '#6f8dc9', 500: '#3e5aa8', 600: '#2f4587', 700: '#24366a', 800: '#1a274d', 900: '#121b36'
        },
        // Naranja vibrante (energía/acción)
        brandOrange: {
          50: '#fff3e6', 100: '#ffe3c4', 200: '#ffc48a', 300: '#ffa24d', 400: '#ff8a26', 500: '#ff6a00', 600: '#e85f00', 700: '#bf4f00', 800: '#993f00', 900: '#7a3300'
        },
        // Cian/turquesa (toque cyber)
        brandCyan: {
          50: '#e6fbff', 100: '#c0f4ff', 200: '#8deaff', 300: '#54dcf7', 400: '#2fcbe8', 500: '#12b5d1', 600: '#0a92a9', 700: '#0a7689', 800: '#0b5e6d', 900: '#0c4c58'
        },
        surface: {
          DEFAULT: '#ffffff',
          soft: '#f7f8fb',
          dark: '#0b1220'
        }
      },
      boxShadow: {
        card: '0 10px 30px -10px rgba(2, 6, 23, 0.15)',
      },
      borderRadius: {
        xl2: '1.25rem'
      },
      transitionTimingFunction: {
        smooth: 'cubic-bezier(0.22, 1, 0.36, 1)'
      }
    },
  },
  plugins: [],
}


