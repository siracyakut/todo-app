/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        accent: "hsl(var(--accent))",
        accentRemove: "hsl(var(--accent-remove))",
        darkBgColor: "hsl(var(--bg))",
        muted: "hsl(var(--muted))",
        txtColor: "hsl(var(--txt))",
        selectColor: "hsl(var(--accent) / 0.8)",
        hoverColor: "hsl(var(--accent) / 0.7)",
        removeHoverColor: "hsl(var(--accent-remove) / 0.7)",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")({ nocompatible: true })],
};
