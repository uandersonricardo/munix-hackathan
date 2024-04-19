import { extendTheme, withDefaultColorScheme } from "@chakra-ui/react";

const theme = extendTheme(
  {
    colors: {
      "las-palmas": {
        "50": "#feffe4",
        "100": "#fbffc5",
        "200": "#f5ff92",
        "300": "#eaff53",
        "400": "#dafb20",
        "500": "#c4eb00",
        "600": "#92b500",
        "700": "#6e8902",
        "800": "#576c08",
        "900": "#495b0c",
        "950": "#263300",
      },
      claret: {
        "50": "#fdf2f7",
        "100": "#fce7f1",
        "200": "#fad0e5",
        "300": "#f8a9ce",
        "400": "#f274ac",
        "500": "#ea4a8d",
        "600": "#d9296a",
        "700": "#bc1a51",
        "800": "#9b1943",
        "900": "#761736",
        "950": "#4f081f",
      },
      "deep-cove": {
        "50": "#e9f4ff",
        "100": "#d7eaff",
        "200": "#b7d8ff",
        "300": "#8cbcff",
        "400": "#5f91ff",
        "500": "#3b68ff",
        "600": "#193bff",
        "700": "#0f2df3",
        "800": "#0f2ac4",
        "900": "#162c99",
        "950": "#0b1449",
      },
      gallery: {
        "50": "#f8f8f8",
        "100": "#ededed",
        "200": "#dcdcdc",
        "300": "#bdbdbd",
        "400": "#989898",
        "500": "#7c7c7c",
        "600": "#656565",
        "700": "#525252",
        "800": "#464646",
        "900": "#3d3d3d",
        "950": "#292929",
      },
    },
    fonts: {
      heading: "'Roboto', Times New Roman",
      body: "'Roboto', Times New Roman",
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
          fontFamily: "'Roboto', sans-serif",
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
