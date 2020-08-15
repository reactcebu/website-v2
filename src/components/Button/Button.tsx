import React from "react"
import { Button as StyledButton } from "./Button.styles"

export const Button: React.FC = ({ children }) => {
  return <StyledButton>{children}</StyledButton>
}
