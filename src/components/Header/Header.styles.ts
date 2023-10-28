import styled from "styled-components"
import { Link } from "gatsby"
import { breakpoints } from "../Shared"

export const HeaderStyled = styled.header`
  max-width: 1440px;
  padding: 24px;
  margin-bottom: 1.45rem;
  display: flex;
  align-items: center;
  background: #fff;
  margin: 0 auto;
`

export const LinkStyled = styled(Link)`
  width: 200px;

  @media ${breakpoints.md} {
    width: 300px;
    min-width: 200px;
  }
`

export const Nav = styled.nav<{ isOpen: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  bottom: 0;
  right: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
  transition: right 0.3s ease;
  background-color: #fff;
  z-index: 5;

  @media ${breakpoints.md} {
    margin-left: 48px;
    position: initial;
    flex-direction: row;
    flex-grow: 1;
    background-color: initial;
    width: auto;
    height: 100%;
  }

  a {
    padding: 24px 16px;
    text-decoration: none;
    color: #595959;
    margin-bottom: 1rem;

    @media ${breakpoints.md} {
      margin-bottom: 0;
    }
  }
`

export const StyledButton = styled.button`
  padding: 0px 24px;
  height: 48px;
  align-self: center;
  border: none;
  background-color: hsl(240, 74%, 31%);
  color: hsl(230, 100%, 91%);
  cursor: pointer;
  font-size: 20px;
  border: 1px solid transparent;
  border-radius: 4px;

  &:hover {
    background-color: white;
    color: hsl(240, 74%, 31%);
    border-color: hsl(240, 74%, 31%);
  }

  @media ${breakpoints.md} {
    margin-left: auto;
  }
`

export const StyledBurger = styled.button<{ isOpen: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  margin-left: auto;
  z-index: 10;
  outline: none;

  @media ${breakpoints.md} {
    display: none;
  }

  span {
    width: 2rem;
    height: 0.25rem;
    background: #595959;
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;

    :first-child {
      transform: ${({ isOpen }) => (isOpen ? "rotate(45deg)" : "rotate(0)")};
    }

    :nth-child(2) {
      opacity: ${({ isOpen }) => (isOpen ? "0" : "1")};
      transform: ${({ isOpen }) =>
        isOpen ? "translateX(20px)" : "translateX(0)"};
    }

    :nth-child(3) {
      transform: ${({ isOpen }) => (isOpen ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`
