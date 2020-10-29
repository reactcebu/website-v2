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

import Img from "gatsby-image"

interface ComponentProps {
  siteTitle: string
}

const links = ["About", "Events", "Contact us"]

const icons = [
  {
    id: "1",
    path: "https://www.facebook.com",
    icon: (
      <svg viewBox="0 0 72 72" xmlns="http://www.w3.org/2000/svg" height="20px">
        <g fill="#000" fillRule="evenodd">
          <rect fill="#000" width="72" height="72" rx="8" />
          <path
            d="M60.464 13.417v9.31l-5.526.015c-4.331 0-5.166 2.058-5.166 5.066v6.662H60.09L58.752 44.89h-8.98V72H39.01V44.889H30V34.47h9.01v-7.684C39.01 17.864 44.448 13 52.42 13c3.8 0 7.08.288 8.044.417z"
            fill="#FFF"
          />
        </g>
      </svg>
    ),
  },
  {
    id: "2",
    path: "https://www.linkedin.com",
    icon: (
      <svg viewBox="0 0 72 72" xmlns="http://www.w3.org/2000/svg" height="20px">
        <g fill="#FFF" fillRule="evenodd">
          <path fill="#000" d="M0 72h72V0H0z" />
          <path
            d="M62 62H51.316V43.802c0-4.99-1.896-7.777-5.845-7.777-4.296 0-6.54 2.901-6.54 7.777V62H28.632V27.333H38.93v4.67s3.096-5.729 10.453-5.729c7.353 0 12.617 4.49 12.617 13.777V62zM16.35 22.794c-3.508 0-6.35-2.864-6.35-6.397C10 12.864 12.842 10 16.35 10c3.507 0 6.347 2.864 6.347 6.397 0 3.533-2.84 6.397-6.348 6.397zM11.032 62h10.736V27.333H11.033V62z"
            fill="#FFF"
          />
        </g>
      </svg>
    ),
  },
  {
    id: "3",
    path: "https://www.twitter.com",
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
  {
    id: "4",
    path: "https://www.youtube.com",
    icon: (
      <svg width="20" height="14" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M7.988 9.586V3.974c1.993.938 3.536 1.843 5.36 2.82-1.505.834-3.367 1.77-5.36 2.792m11.103-8.403c-.344-.453-.93-.805-1.553-.922-1.833-.348-13.267-.349-15.099 0-.5.094-.945.32-1.328.673C-.5 2.429.005 10.452.393 11.75c.164.562.375.968.64 1.235.343.352.812.594 1.351.703 1.51.312 9.284.486 15.122.047a2.62 2.62 0 001.39-.712c1.49-1.49 1.388-9.962.195-11.841"
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
      <Top>
        <Center>
          <Img fluid={data.logo.childImageSharp.fluid} alt={siteTitle} />
        </Center>
      </Top>
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
          <List>
            {icons.map(function (icon) {
              return (
                <ListItem key={icon.id}>
                  <Link href={`/${icon.path}`}>{icon.icon}</Link>
                </ListItem>
              )
            })}
          </List>
        </Container>
      </FooterContainer>
    </MainFooter>
  )
}
