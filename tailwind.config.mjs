/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // Day session sunset palette - sibling to Mics Matter's night palette
        sand: '#ece4d0',         // primary background, cream from logo
        sandLight: '#f4ecd8',    // raised cream surface
        sandDark: '#dcd2bc',     // depressed cream / borders
        ink: '#1c1a17',          // body type, near-black warm
        inkSoft: '#3d3a35',      // secondary text
        sunset: {
          yellow: '#e9b941',     // stripe 1
          orange: '#e07d2f',     // stripe 2 - primary accent
          coral: '#d4523c',      // stripe 3
          red: '#b22f30',        // stripe 4
          burgundy: '#7a1a26',   // stripe 5
          purple: '#4f1f3a',     // stripe 6 - deepest, for dark sections
        },
      },
      fontFamily: {
        display: ['Caprasimo', 'Cooper Black', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
