/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
        heading: ["Montserrat", "sans-serif"],
        display: ['"Barlow Condensed"', "sans-serif"],
      },
      colors: {
        brand: {
          DEFAULT: "#f97316",
          light: "#fb923c",
          dark: "#9a3412",
        },
      },
      boxShadow: {
        "btn-primary":
          "0 0 22px rgba(249, 115, 22, 0.45), 0 4px 18px rgba(249, 115, 22, 0.28), inset 0 1px 0 rgba(255, 255, 255, 0.35)",
        "btn-primary-hover":
          "0 0 34px rgba(249, 115, 22, 0.62), 0 8px 26px rgba(249, 115, 22, 0.38), inset 0 1px 0 rgba(255, 255, 255, 0.42)",
        "btn-secondary":
          "0 0 12px rgba(249, 115, 22, 0.15), inset 0 0 0 1px rgba(249, 115, 22, 0.12)",
        "btn-secondary-hover":
          "0 0 24px rgba(249, 115, 22, 0.35), inset 0 0 20px rgba(154, 52, 18, 0.08)",
      },
      keyframes: {
        "nav-border-glow": {
          "0%, 100%": {
            boxShadow:
              "0 0 18px rgba(249, 115, 22, 0.32), 0 0 38px rgba(234, 88, 12, 0.18)",
          },
          "50%": {
            boxShadow:
              "0 0 28px rgba(249, 115, 22, 0.55), 0 0 56px rgba(234, 88, 12, 0.3)",
          },
        },
        "nav-item-glow": {
          "0%, 100%": { boxShadow: "0 0 10px rgba(251, 146, 60, 0.75)" },
          "50%": { boxShadow: "0 0 22px rgba(249, 115, 22, 0.5)" },
        },
      },
      animation: {
        "nav-border-glow": "nav-border-glow 3.2s ease-in-out infinite",
        "nav-item-glow": "nav-item-glow 2s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
