import React from "react"
import { FooterContainer, List, ListItem, Link } from "./Footer.styles"

const links = ["Status", "Privacy & Terms", "Contact us", "Change region"]

export const Footer: React.FC = () => {
  return (
    <FooterContainer>
      {/* This commented out code can be deleted anytime. */}
      {/* © {new Date().getFullYear()}Built with
      <GatsbyLink href="https://www.gatsbyjs.org">Gatsby</GatsbyLink> */}
      <List>
        {links.map(function (link) {
          return (
            <ListItem key={link}>
              <Link href={`/${link}`}>{link}</Link>
            </ListItem>
          )
        })}
      </List>
    </FooterContainer>
  )
}
