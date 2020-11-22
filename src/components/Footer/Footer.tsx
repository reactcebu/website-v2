import {
  Container,
  FooterContainer,
  MainFooter,
  Top,
  Center,
  Link,
  List,
  ListItem,
} from "./Footer.styles"

import React from "react"
import { graphql, useStaticQuery } from "gatsby"

interface ComponentProps {
  siteTitle?: string
}

const links = ["About", "Events", "Contact"]

const icons = [
  {
    id: "1",
    path: "https://medium.com/react-cebu",
    icon: (
      <svg
        id="Bold"
        enable-background="new 0 0 24 24"
        height="24"
        viewBox="0 0 24 24"
        width="24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="m7.996 21.324c0 .695-.521.982-1.098.695l-6.228-3.113c-.188-.089-.346-.238-.475-.447s-.195-.417-.195-.622v-15.227c0-.568.341-.825 1.112-.441l6.844 3.42c.099.099.026-.581.04 15.735zm.857-14.32 7.152 11.568-7.152-3.553zm15.147.241v14.079c0 .223-.062.403-.188.541-.125.138-.295.207-.509.207s-.424-.058-.629-.174l-5.906-2.939zm-.04-1.603c0 .027-1.145 1.895-3.435 5.603s-3.632 5.88-4.025 6.512l-5.223-8.469 4.339-7.039c.236-.388.72-.456 1.045-.294l7.246 3.607c.035.017.053.044.053.08z" />
      </svg>
    ),
  },
  {
    id: "2",
    path: "https://www.facebook.com/react-cebu",
    icon: (
      <svg
        id="Capa_1"
        height="24"
        viewBox="0 0 512 512"
        width="24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="m512 256c0-141.4-114.6-256-256-256s-256 114.6-256 256 114.6 256 256 256c1.5 0 3 0 4.5-.1v-199.2h-55v-64.1h55v-47.2c0-54.7 33.4-84.5 82.2-84.5 23.4 0 43.5 1.7 49.3 2.5v57.2h-33.6c-26.5 0-31.7 12.6-31.7 31.1v40.8h63.5l-8.3 64.1h-55.2v189.5c107-30.7 185.3-129.2 185.3-246.1z" />
      </svg>
    ),
  },
  {
    id: "3",
    path: "https://twitter.com/reactcebu",
    icon: (
      <svg width="20" height="16" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M6.29 16c7.547 0 11.675-6.156 11.675-11.495 0-.175 0-.349-.012-.522A8.265 8.265 0 0020 1.89a8.273 8.273 0 01-2.356.637A4.07 4.07 0 0019.448.293a8.303 8.303 0 01-2.606.98 4.153 4.153 0 00-5.806-.175 4.006 4.006 0 00-1.187 3.86A11.717 11.717 0 011.392.738 4.005 4.005 0 002.663 6.13 4.122 4.122 0 01.8 5.625v.051C.801 7.6 2.178 9.255 4.092 9.636a4.144 4.144 0 01-1.852.069c.537 1.646 2.078 2.773 3.833 2.806A8.315 8.315 0 010 14.185a11.754 11.754 0 006.29 1.812"
          fill="#000"
          fillRule="evenodd"
        />
      </svg>
    ),
  },
]

export const Footer: React.FC<ComponentProps> = ({
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
  return (
    <MainFooter>
      <FooterContainer>
        <Container>
          <List>
            {links.map(function (link) {
              return (
                <ListItem key={link}>
                  <Link href={`/${link?.toLowerCase()}`}>{link}</Link>
                </ListItem>
              )
            })}
          </List>
          <List>
            {icons.map(function (icon) {
              return (
                <ListItem key={icon.id}>
                  <Link href={`${icon.path}`}>{icon.icon}</Link>
                </ListItem>
              )
            })}
          </List>
        </Container>
      </FooterContainer>
    </MainFooter>
  )
}
