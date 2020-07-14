import React from "react"
import { Link } from "gatsby"
import { HeaderStyled, Nav, H1, NavLinks } from "./Header.styles"

interface ComponentProps {
  siteTitle: string
}

import Logo from "../../assets/images/logo.png"

export const Header: React.FC<ComponentProps> = ({
  siteTitle,
}: ComponentProps) => {
  return (
    <HeaderStyled>
      <Nav>
        <H1>
          <Link to="/">
            <img src={Logo} />
          </Link>
        </H1>
        <NavLinks>
          <Link to="/about">About</Link>
          <Link to="/events">Events</Link>
          <Link to="/contact">Contact</Link>
        </NavLinks>
        <button>Support Us</button>
      </Nav>
    </HeaderStyled>
  )
}
