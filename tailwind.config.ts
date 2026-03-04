import type { Config } from 'tailwindcss'

/**
 * Tailwind CSS Configuration
 * File: tailwind.config.ts
 * Purpose: Konfigurasi styling dengan tema profesional agency
 */

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Warna utama tema agency profesional
        primary: {
          50: '#f0f4f8',
          100: '#d9e2ec',
          200: '#bcccdc',
          300: '#9fb3c8',
          400: '#829ab1',
          500: '#627d98',
          600: '#486581',
          700: '#334e68',
          800: '#243b53',
          900: '#102a43',
        },
        // Navy Blue - Warna utama
        navy: {
          50: '#e7e9ef',
          100: '#c3c9d6',
          200: '#9aa5bd',
          300: '#7181a4',
          400: '#536491',
          500: '#35477d',
          600: '#2d3c69',
          700: '#1e3a5f',
          800: '#162d4a',
          900: '#0f1f33',
        },
        // Gold Accent - Warna aksen elegan
        gold: {
          50: '#fdf9e9',
          100: '#f9efc7',
          200: '#f4e39a',
          300: '#efd76d',
          400: '#ebce4b',
          500: '#d4af37',
          600: '#c9a02e',
          700: '#b88c23',
          800: '#a6791c',
          900: '#8a6217',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        heading: ['Poppins', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'sidebar': '2px 0 8px rgba(0, 0, 0, 0.1)',
        'card': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
      animation: {
        marquee: 'marquee 25s linear infinite',
      },
    },
  },
  plugins: [],
}

export default config
