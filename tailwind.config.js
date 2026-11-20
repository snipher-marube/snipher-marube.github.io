/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"IBM Plex Sans"', "system-ui", "-apple-system", "Segoe UI", "sans-serif"],
        mono: ['"IBM Plex Mono"', "ui-monospace", "SFMono-Regular", "Menlo", "monospace"],
      },
      colors: {
        ink: "#111a17",
        paper: "#f6f7f4",
        line: "#dfe3dc",
        moss: {
          50: "#eaf4ef",
          600: "#0e7a55",
          700: "#0b6446",
        },
      },
      maxWidth: {
        page: "68rem",
      },
    },
  },
  plugins: [],
};
