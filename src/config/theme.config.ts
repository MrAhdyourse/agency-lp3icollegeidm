/**
 * Theme Configuration
 * File: src/config/theme.config.ts
 * Purpose: Konfigurasi warna dan tema aplikasi
 * 
 * Cara update: Ubah nilai warna di bawah untuk mengubah tema
 */

export const themeConfig = {
  // Warna utama
  colors: {
    primary: {
      main: '#1e3a5f',    // Navy Blue
      light: '#35477d',
      dark: '#162d4a',
      contrast: '#ffffff',
    },
    secondary: {
      main: '#d4af37',    // Gold
      light: '#ebce4b',
      dark: '#b88c23',
      contrast: '#000000',
    },
    background: {
      main: '#f8fafc',
      sidebar: '#1e3a5f',
      card: '#ffffff',
    },
    text: {
      primary: '#1e293b',
      secondary: '#64748b',
      light: '#ffffff',
    },
    border: {
      main: '#e2e8f0',
      focus: '#d4af37',
    },
  },
  
  // Status colors
  status: {
    success: '#22c55e',
    warning: '#f59e0b',
    error: '#ef4444',
    info: '#3b82f6',
  },
  
  // Typography
  typography: {
    fontFamily: {
      sans: 'Inter, system-ui, sans-serif',
      heading: 'Poppins, system-ui, sans-serif',
    },
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
    },
  },
  
  // Breakpoints (mengikuti Tailwind)
  breakpoints: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px',
  },
  
  // Animasi
  animation: {
    transition: {
      fast: '150ms',
      normal: '300ms',
      slow: '500ms',
    },
    easing: 'cubic-bezier(0.4, 0, 0.2, 1)',
  },
} as const

export default themeConfig
