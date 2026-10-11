/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        pitch: '#000000',
        obsidian: {
          DEFAULT: '#09090b',
          card: '#0d0f12',
          surface: '#111317',
          border: '#1f242d',
          accent: '#181b22',
        },
        cyber: {
          blue: '#2563eb',
          electric: '#3b82f6',
          bright: '#60a5fa',
          dim: '#1d4ed8',
          glow: '#0055ff',
        },
      },
      fontFamily: {
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'monospace'],
        arabic: ['"IBM Plex Sans Arabic"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'brutal-blue': '4px 4px 0px 0px #2563eb',
        'brutal-white': '4px 4px 0px 0px #ffffff',
        'brutal-blue-sm': '2px 2px 0px 0px #2563eb',
        'brutal-white-sm': '2px 2px 0px 0px #ffffff',
        'brutal-blue-lg': '6px 6px 0px 0px #2563eb',
        'brutal-white-lg': '6px 6px 0px 0px #ffffff',
      },
    },
  },
  plugins: [],
};
