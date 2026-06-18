import type { Config } from "tailwindcss";
import tailwindTypography from '@tailwindcss/typography'

export default <Partial<Config>>{
  content: [
    "./components/**/*.{vue,js,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./slices/**/*.vue",
    "./app.vue",
    "./app/**/*.{vue,js,ts}",
  ],

  plugins: [tailwindTypography],

  theme: {
    extend: {
      fontFamily: {
        melon: ['"Melon Camp"', "sans-serif"],
      },

      keyframes: {
        glow: {
          '0%, 100%': { transform: 'scale(1)', opacity: '0.6' },
          '50%': { transform: 'scale(1.15)', opacity: '1' },
        },
      },

      animation: {
        glow: 'glow 6s ease-in-out infinite',
      },
    },
  },
};

