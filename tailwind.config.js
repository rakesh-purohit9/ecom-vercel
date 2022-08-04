module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { lg: "1120px", xl: "1281px", "2xl": "1441px", "3xl": "1729px" },
    extend: {
      colors: {
        bluegray_50: "#f1f1f1",
        black_900_3f: "#0000003f",
        gray_50: "#f9f9f9",
        black_900: "#000000",
        gray_600: "#6d6d6d",
        gray_400: "#c9c9c9",
        orange_A200: "#feb238",
        gray_500: "#939393",
        gray_901: "#282825",
        gray_902: "#282828",
        gray_800: "#4f4f4f",
        gray_900_00: "#18181300",
        gray_900: "#181813",
        gray_200: "#e8e8e8",
        gray_101: "#f5f5f5",
        gray_201: "#ededed",
        gray_100: "#f7f7f7",
        teal_A400: "#30e3ca",
        bluegray_900: "#333328",
        bluegray_800: "#40514e",
        gray_900_b2: "#181813b2",
        blue_300: "#55acee",
        white_A700: "#ffffff",
        bluegray_901: "#353535",
        indigo_600: "#3b5998",
      },
      borderRadius: {
        radius2: "2px",
        radius10: "10px",
        radius15: "15px",
        radius20: "20px",
        radius24: "24px",
        radius30: "30px",
        radius31: "31px",
        radius49: "49px",
        radius50: "50%",
      },
      boxShadow: { bs: "0px 4px  4px 0px #0000003f" },
      backgroundImage: { gradient: "linear-gradient(0deg ,#181813,#18181300)" },
      fontFamily: {
        merriweather: "Merriweather",
        jacquesfrancois: "Jacques Francois",
        interui: "Inter UI",
        opensans: "Open Sans",
      },
      letterSpacing: {
        ls1: "1px",
        ls2: "2px",
        ls3: "3px",
        ls4: "4px",
        ls5: "5px",
        ls48: "4.8px",
        ls208: "2.08px",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
