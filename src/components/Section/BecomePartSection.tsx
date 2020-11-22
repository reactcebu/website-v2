import { Section } from "./Section"
import styled from "styled-components"

export const BecomePartSection = styled(Section)`
  display: flex;
  justify-content: space-around;
  align-items: center;

  h2 {
    text-align: left;
  }

  div:first-child {
    display: flex;
    flex-direction: column;
    text-align: left;
  }

  div:last-child {
    min-width: 498px;
    max-width: 100%:
  }
`
