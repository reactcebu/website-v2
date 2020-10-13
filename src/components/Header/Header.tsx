import {
  HeaderStyled,
  LinkStyled,
  Nav,
  StyledBurger,
  StyledButton,
} from "./Header.styles"
import { Link, graphql, useStaticQuery } from "gatsby"

import Img from "gatsby-image"
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
  const data = useStaticQuery(graphql`
    query {
      logo: file(relativePath: { eq: "logo.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

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
        <Img fluid={data.logo.childImageSharp.fluid} alt={siteTitle} />
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
