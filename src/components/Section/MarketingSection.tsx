import { Section } from "./Section"
import styled from "styled-components"

export const MarketingSection = styled(Section)`
  max-width: 100%;
  background-color: #092851;
  color: #fafafa;
  padding: 80px 0;

  > h2 {
    margin-bottom: 28px;
  }

  > a {
    color: #092851;
    background-color: #fff;
    padding: 20px 25px;
    text-decoration: none;
    font-size: 20px;
    margin-left: 15px;
    border-radius: 4px;
    transition: box-shadow 420ms cubic-bezier(0.165, 0.84, 0.44, 1),
      color 420ms cubic-bezier(0.165, 0.84, 0.44, 1),
      background 420ms cubic-bezier(0.165, 0.84, 0.44, 1);
  }

  > a:first-child {
    margin-right: 15px;
  }

  > a:last-child {
    border: 1px solid #fff;
    background-color: #092851;
    color: #fff;
  }

  a:last-child:hover {
    box-shadow: inset 0 0 0 2px #092851;
  }
`
