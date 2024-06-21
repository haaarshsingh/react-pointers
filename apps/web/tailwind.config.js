/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      width: { lg: 740 },
      backgroundImage: {
        dashed:
          "linear-gradient(180deg, rgba(66, 71, 112, 0.09), rgba(66, 71, 112, 0.09) 50%, transparent 0, transparent)",
      },
    },
  },
  plugins: [],
};
