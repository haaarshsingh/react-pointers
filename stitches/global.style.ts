import { globalCss } from "./theme.config"

const globalStyle = globalCss({
  "*": {
    margin: 0,
    padding: 0,
    boxSizing: "border-box",
    scrollBehavior: "smooth",
  },
  html: {
    overflowX: "hidden",
  },
  body: {
    background: "$bg",
    overflowX: "hidden",
    fontFamily: "$main",
  },
  "input, textArea, button, select": {
    fontFamily: "$main",
  },
  "::selection": {
    background: "white",
    color: "$bg",
  },
  img: {
    userSelect: "none",
  },
  "::-webkit-scrollbar": {
    width: 10,
  },
  "::-webkit-scrollbar-thumb": {
    background: "$main",
  },
})

export default globalStyle
