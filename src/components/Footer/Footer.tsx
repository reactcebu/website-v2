import {
  Container,
  FooterContainer,
  Link,
  List,
  ListItem,
} from "./Footer.styles"

import React from "react"

const links = ["About", "Events", "Contact us"]

export const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <Container>
        <List>
          {links.map(function (link) {
            return (
              <ListItem key={link}>
                <Link href={`/${link}`}>{link}</Link>
              </ListItem>
            )
          })}
        </List>
      </Container>
    </FooterContainer>
  )
}
