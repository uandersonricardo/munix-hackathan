import { extendTheme, withDefaultColorScheme } from "@chakra-ui/react";

const theme = extendTheme(
  {
    colors: {
      primary: {
        70: "#fff3e6",
        80: "#ffe1bf",
        90: "#ffbb73",
        100: "#f28000",
        110: "#df7400",
        120: "#cb6700",
        130: "#b35a00",
        darkest: "#b35a00",
        darker: "#cb6700",
        dark: "#df7400",
        medium: "#f28000",
        light: "#ffbb73",
        lighter: "#ffe1bf",
        lightest: "#fff3e6",
      },
      secondary: {
        70: "#f0e6ff",
        80: "#c599ff",
        90: "#994dfa",
        100: "#6e0ad6",
        110: "#5c08b2",
        120: "#49078f",
        130: "#37056b",
        darkest: "#37056b",
        darker: "#49078f",
        dark: "#5c08b2",
        medium: "#6e0ad6",
        light: "#994dfa",
        lighter: "#c599ff",
        lightest: "#f0e6ff",
      },
      neutral: {
        70: "#ffffff",
        80: "#f5f6f7",
        90: "#cfd4dd",
        100: "#8994a9",
        110: "#5e6a82",
        120: "#3c4453",
        130: "#1a1d23",
        darkest: "#1a1d23",
        darker: "#3c4453",
        dark: "#5e6a82",
        medium: "#8994a9",
        light: "#cfd4dd",
        lighter: "#f5f6f7",
        lightest: "#ffffff",
      },
      success: {
        80: "#def9cc",
        90: "#8ce563",
        100: "#24a148",
        110: "#197b35",
        120: "#105323",
        darkest: "#105323",
        dark: "#197b35",
        medium: "#24a148",
        light: "#8ce563",
        lightest: "#def9cc",
      },
      error: {
        80: "#fff5f5",
        90: "#f48787",
        100: "#e22828",
        110: "#901111",
        120: "#3b0505",
        darkest: "#3b0505",
        dark: "#901111",
        medium: "#e22828",
        light: "#f48787",
        lightest: "#fff5f5",
      },
      attention: {
        80: "#fff7e0",
        90: "#ffe19a",
        100: "#f9af27",
        110: "#7b5613",
        120: "#3c2a09",
        darkest: "#3c2a09",
        dark: "#7b5613",
        medium: "#f9af27",
        light: "#ffe19a",
        lightest: "#fff7e0",
      },
      info: {
        80: "#e1f9ff",
        90: "#9ce6f9",
        100: "#28b5d9",
        110: "#14596b",
        120: "#0a2b34",
        darkest: "#0a2b34",
        dark: "#14596b",
        medium: "#28b5d9",
        light: "#9ce6f9",
        lightest: "#e1f9ff",
      },
      green: {
        100: "#10CE64",
      },
    },
    fonts: {
      heading: "'Nunito', Times New Roman",
      body: "'Nunito', Times New Roman",
    },
    styles: {
      global: {
        "html, body, #root": {
          margin: 0,
          padding: 0,
          backgroundColor: "white",
          height: "100%",
        },
        "*": {
          fontFamily: "'Nunito', sans-serif",
        },
        ".swiper-pagination-bullet": {
          backgroundColor: "white",
          opacity: 1,
        },
        ".swiper-pagination-bullet-active": {
          backgroundColor: "primary.100",
        },
        ".swiper-button-next, .swiper-button-prev": {
          color: "white",
        },
      },
    },
    components: {
      Input: {
        defaultProps: {
          focusBorderColor: "secondary.100",
        },
      },
      Select: {
        defaultProps: {
          focusBorderColor: "secondary.100",
        },
      },
    },
  },
  withDefaultColorScheme({ colorScheme: "primary" })
);

export default theme;
