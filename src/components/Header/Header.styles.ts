import styled from "styled-components"

export const HeaderStyled = styled.header`
  max-width: 1440px;
  padding: 24px;
  margin-bottom: "1.45rem";
  display: flex;
  background: "white";
  color: #000;
  margin: 0 auto;
`

export const Nav = styled.div`
  display: flex;
`

export const H1 = styled.div``

export const NavLinks = styled.div`
  margin-left: 48px;
  display: flex;
  align-items: center;

  a {
    padding: 24px 16px;
    text-decoration: none;
    color: #595959;
  }
`

export const StyledButton = styled.button`
  padding: 0px 24px;
  margin-left: auto;
  height: 48px;
  align-self: center;
  border: none;
  background-color: hsl(240, 74%, 31%);
  color: hsl(230, 100%, 91%);
  cursor: pointer;
  font-size: 20px;
  border: 1px solid transparent;
  border-radius: 4px;
`
