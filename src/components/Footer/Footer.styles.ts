import styled from "styled-components"
import { breakpoints } from "../Shared"

export const FooterContainer = styled.footer`
  padding: 24px 48px;
  background-color: gainsboro;
`

export const Container = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  padding: 24px;
  @media ${breakpoints.sm} {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
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

export const MainFooter = styled.section`
  max-width: 1440px;
`

export const Top = styled.div`
  background-color: white;
  height: 50vh;
  display: flex;
  align-items: center;
`
export const Center = styled.div`
  width: 300px;
  margin-left: 50px;
  padding: 30px 10px;
`

export const ListItem = styled.li`
  margin: 0;
`

export const Link = styled.a`
  text-decoration: none;
  color: black;
`
