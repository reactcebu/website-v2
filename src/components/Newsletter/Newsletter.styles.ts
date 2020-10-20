import { Button } from "../Button"
import styled from "styled-components"

const getWidthString = span => {
  if (!span) return

  let width = (span / 12) * 100
  return `${width}%;`
}

export const Row = styled.div`
  &::after {
    content: "";
    clear: both;
    display: table;
  }
`

export const Column = styled.div`
  float: none;
  margin-top: 10px;
  ${({ xs }) => (xs ? getWidthString(xs) : "width:100%;")};

  @media only screen and (min-width: 768px) {
    float: left;
    ${({ sm }) => sm && getWidthString(sm)};
  }

  @media only screen and (min-width: 992px) {
    float: left;
    ${({ md }) => md && getWidthString(md)};
  }

  @media only screen and (min-width: 1200px) {
    float: left;
    ${({ lg }) => lg && getWidthString(lg)};
  }
`

export const StyledButton = styled(Button)`
  font-size: 18px;
  border-radius: 4px;
  transition: box-shadow 420ms cubic-bezier(0.165, 0.84, 0.44, 1),
    color 420ms cubic-bezier(0.165, 0.84, 0.44, 1),
    background 420ms cubic-bezier(0.165, 0.84, 0.44, 1);
`
export const TextField = styled.input`
  padding: 14px;
  margin-right: 10px;
  border-radius: 4px;
  transition: box-shadow 420ms cubic-bezier(0.165, 0.84, 0.44, 1),
    color 420ms cubic-bezier(0.165, 0.84, 0.44, 1),
    background 420ms cubic-bezier(0.165, 0.84, 0.44, 1);
  border: 1px solid #1d1d1d;
  font-size: 24px;
`

export const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Alert = styled.p<{ status: string }>`
  color: ${props =>
    props.status === "failed"
      ? "#721c24"
      : props.status === "success"
      ? "#155724"
      : "#0c5460"};
  background-color: ${props =>
    props.status === "failed"
      ? "#f8d7da"
      : props.status === "success"
      ? "#d4edda"
      : "#d1ecf1"};
  border-color: ${props =>
    props.status === "failed"
      ? "#f8d7da"
      : props.status === "success"
      ? "#c3e6cb"
      : "#c3e6cb"};
  padding: 18px;
  max-width: 1440px;
  border: 1px solid transparent;
  border-radius: 4px;
  max-width: fit-content;
  margin: 0 auto;
  margin-bottom: 20px;
`
