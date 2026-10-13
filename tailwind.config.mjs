/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    borderRadius: {
      none: '0px',
      DEFAULT: '0px',
      sm: '0px',
      md: '0px',
      lg: '0px',
      xl: '0px',
      '2xl': '0px',
      '3xl': '0px',
      full: '0px',
    },
    extend: {
      colors: {
        pitch: '#000000',
        obsidian: {
          DEFAULT: '#09090b',
          surface: '#0d0f12',
          card: '#0d0f12',
        },
        azure: {
          DEFAULT: '#2563eb',
          cobalt: '#1d4ed8',
          electric: '#3b82f6',
        },
      },
      fontFamily: {
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'monospace'],
        arabic: ['"IBM Plex Sans Arabic"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        brutal: '4px 4px 0px 0px #2563eb',
        'brutal-white': '4px 4px 0px 0px #ffffff',
        'brutal-sm': '2px 2px 0px 0px #2563eb',
        'brutal-white-sm': '2px 2px 0px 0px #ffffff',
        'brutal-lg': '6px 6px 0px 0px #2563eb',
      },
      backgroundImage: {
        'cyber-grid': 'radial-gradient(#2563eb 0.75px, transparent 0.75px)',
        'scanlines': 'linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.4) 50%)',
      },
      backgroundSize: {
        'cyber-grid': '16px 16px',
        'scanlines': '100% 4px',
      },
      keyframes: {
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        type: {
          from: { width: '0' },
          to: { width: '100%' },
        },
      },
      animation: {
        cursor: 'blink 1s step-start infinite',
        typing: 'type 2.5s steps(28, end) forwards',
      },
    },
  },
  plugins: [
    function ({ addBase }) {
      addBase({
        '*, *::before, *::after': {
          borderRadius: '0px !important',
        },
      });
    },
  ],
};
