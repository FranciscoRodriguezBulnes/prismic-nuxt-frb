import type { Config } from "tailwindcss";
import tailwindTypography from '@tailwindcss/typography'
export default <Partial<Config>>{
  content: ["./components/**/*.{vue,js,ts}", "./layouts/**/*.vue", "./pages/**/*.vue", "./slices/**/*.vue", "./app.vue", "./app/**/*.{vue,js,ts}"],
    plugins: [tailwindTypography],

  theme: {
    extend: {
      fontFamily: {
        melon: ['"Melon Camp"', "sans-serif"],
      },
    },
  },
};
