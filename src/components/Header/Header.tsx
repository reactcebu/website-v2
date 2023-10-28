import {
  HeaderStyled,
  LinkStyled,
  Nav,
  StyledBurger,
  StyledButton,
} from "./Header.styles"
import { Link } from "gatsby"

import { StaticImage } from "gatsby-plugin-image"
import React, { useEffect, useRef, useState } from "react"
import {
  disableBodyScroll,
  enableBodyScroll,
  clearAllBodyScrollLocks,
} from "body-scroll-lock"

interface ComponentProps {
  siteTitle: string
}

export const Header: React.FC<ComponentProps> = ({
  siteTitle,
}: ComponentProps) => {
  const navRef = useRef(null)

  const [showMenu, setShowMenu] = useState<boolean>(false)

  useEffect(() => {
    if (showMenu) {
      disableBodyScroll(navRef.current)
    } else {
      enableBodyScroll(navRef.current)
    }

    return () => {
      clearAllBodyScrollLocks()
    }
  }, [showMenu])

  return (
    <HeaderStyled>
      <LinkStyled to="/">
        <StaticImage src="../../assets/images/logo.png" alt={siteTitle} />
      </LinkStyled>

      <StyledBurger
        aria-label="Toggle menu"
        isOpen={showMenu}
        onClick={() => setShowMenu(!showMenu)}
      >
        <span />
        <span />
        <span />
      </StyledBurger>

      <Nav ref={navRef} isOpen={showMenu}>
        <Link to="/about">About</Link>
        <Link to="/events">Events</Link>
        <Link to="/contact">Contact</Link>

        <StyledButton>Support Us</StyledButton>
      </Nav>
    </HeaderStyled>
  )
}
