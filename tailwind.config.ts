/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "lato-thin": ["var(--font-lato-thin)", "ui-sans-serif", "system-ui"],
        "lato-light": ["var(--font-lato-light)", "ui-sans-serif", "system-ui"],
        "lato-regular": [
          "var(--font-lato-regular)",
          "ui-sans-serif",
          "system-ui",
        ],
      },
      colors: {
        "movie-primary": "#1c1b21",
        "movie-secondary": "#f6a120",
        "movie-white": "#ffffff",
      },
    },
  },
  plugins: [],
};
