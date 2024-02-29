/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        darrk: {
          primary: "#cf00ff",
          secondary: "#539500",
          accent: "#e9ffff",
          neutral: "#FFFFFF",
          "base-100": "#1f2937",
          "base-400": "#FFFFFF",
          info: "#00b3ff",
          success: "#008e40",
          warning: "#ffb400",
          error: "#ff6680",
        },
        lightt: {
          primary: "#0078ff",
          secondary: "#0044ee",
          accent: "#e9ffff",
          neutral: "#9BBEC8",
          "base-100": "#ecfff2",
          "base-100": "#f3f4f6",
          "base-200": "#DBEAFE",
          "base-400": "#000000",
          info: "#00afff",
          success: "#009264",
          warning: "#ff9900",
          error: "#f13650",
        },
      },
    ],
  },
};
