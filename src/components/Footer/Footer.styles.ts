import styled from "styled-components"

export const FooterContainer = styled.footer`
  padding: 24px 48px;
  background-color: gainsboro;
`

export const Container = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  padding: 24px;
`

export const GatsbyLink = styled.a`
  margin-left: 6px;
`

export const List = styled.ul`
  margin: 0;
  display: flex;
  list-style-type: none;

  & > li + li {
    margin-left: 24px;
  }
`

export const ListItem = styled.li`
  margin: 0;
`

export const Link = styled.a`
  text-decoration: none;
  color: black;
`
