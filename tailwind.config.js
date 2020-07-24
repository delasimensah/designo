module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        peach: "#e7816b",
        lightPeach: "#ffad9b",
        black: "#1d1c1e",
        darkGrey: "#333136",
        lightGrey: "#f1f3f5",
      },
      backgroundImage: () => ({
        "web-design-lg":
          "url('/assets/home/desktop/image-web-design-large.jpg')",
        "web-design-sm":
          "url('/assets/home/desktop/image-web-design-small.jpg')",
        "app-design": "url('/assets/home/desktop/image-app-design.jpg')",
        "graphic-design":
          "url('/assets/home/desktop/image-graphic-design.jpg')",
      }),
      spacing: {
        400: "400px",
        450: "450px",
        500: "500px",
        550: "550px",
        600: "600px",
        650: "650px",
        700: "700px",
        750: "750px",
        800: "800px",
        850: "850px",
        900: "900px",
        950: "950px",
      },
      scale: {
        200: "2",
      },
    },
  },
  variants: {
    extend: {
      brightness: ["hover"],
      borderWidth: ["focus"],
    },
  },
  plugins: [],
};
