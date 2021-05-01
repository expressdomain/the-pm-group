import { theme } from "@chakra-ui/react"

const defaultColors = theme.colors

const colors = {
  color: "#707070",
  bg: "#FFFFFF",
  primaryColorScheme: "gray", // Used for all "colorScheme" props on components. Not defined in "dark" as components handle dark mode by themselves.
  primary: "#3FA7B6",
  secondary: "#FDBC31",
  gradientTop: "#FFFFFF",
  gradientBottom: "#FFFFFF",
  headingColor: "black",
  cardBg: "#FFFFFF",
  cardLink: defaultColors.black,
  cardLinkHover: defaultColors.blue["600"],
  black: "#201D1D",
  dark: {
    color: defaultColors.whiteAlpha["800"],
    bg: defaultColors.gray["900"],
    primary: defaultColors.blue["300"],
    gradientTop: defaultColors.gray["900"],
    gradientBottom: defaultColors.gray["700"],
    headingColor: "white",
    cardBg: defaultColors.gray["700"],
    cardLink: defaultColors.white,
    cardLinkHover: defaultColors.blue["400"],
  },
}

export default colors
