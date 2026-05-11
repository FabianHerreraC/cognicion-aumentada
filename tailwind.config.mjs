/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        bg: 'var(--bg)',
        'bg-soft': 'var(--bg-soft)',
        'bg-card': 'var(--bg-card)',
        ink: 'var(--ink)',
        'ink-soft': 'var(--ink-soft)',
        rule: 'var(--rule)',
        accent: 'var(--accent)',
        chip: 'var(--chip)',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['"Cormorant Garamond"', '"EB Garamond"', 'Georgia', 'serif'],
        mono: ['"Geist Mono"', '"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      maxWidth: {
        prose: '62ch',
        site: '1280px',
      },
      borderRadius: {
        card: '20px',
      },
    },
  },
  plugins: [],
};
