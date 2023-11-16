/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        "deep-blue": "#010026",
        blue: "#20b6e5",
        red: "#B9204A",
        yellow: "#fb923c",
        grey: "#ededed",
        "dark-grey": "#757575",
        "sky-dalia": "#2A3B65",
        "opaque-black": "rgba(0,0,0,0.35)",
      },
      backgroundImage: (theme) => ({
        "gradient-rainbow":
          "linear-gradient(81.66deg, #00B5EE 7.21%, #FF45A4 45.05%, #FFBA00 78.07%)",

        "gradient-rainblue":
          "linear-gradient(90deg, #24CBFF 14.53%, #FC59FF 69.36%, #FFBD0C 117.73%)",
      }),
      // content relating to ::before hover
      content: {
        brush: "url('/assets/brush.webp')",
        softuni: "url('/assets/softuni.webp')",
        kings: "url('/assets/kings.webp')",
        humboldt: "url('/assets/humboldt.webp')",
        // "project-one": "url('/assets/project-one.webp')",
        // "project-two": "url('/assets/project-two.webp')",

      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
}
