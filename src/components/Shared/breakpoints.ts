// https://tailwindcss.com/docs/breakpoints
const size = {
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
}

export const breakpoints = {
  sm: `(min-width: ${size.sm})`,
  md: `(min-width: ${size.md})`,
  lg: `(min-width: ${size.lg})`,
  xl: `(min-width: ${size.xl})`,
}
