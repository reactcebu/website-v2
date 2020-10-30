import styled from "styled-components"
import { breakpoints } from "../Shared"

export const FooterContainer = styled.div`
  padding: 24px 48px;
  background-color: gainsboro;
`

export const Container = styled.div`
  margin: 0 auto;
  @media ${breakpoints.sm} {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 24px;
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

export const MainFooter = styled.footer`
  width: 100%;
`

export const Top = styled.div`
  background-color: white;
  height: 50vh;
  display: flex;
  align-items: center;
`
export const Center = styled.div`
  width: 300px;
  padding: 30px 10px;
  @media ${breakpoints.sm} {
    margin-left: 50px;
  }
`

export const ListItem = styled.li`
  margin: 0;
`

export const Link = styled.a`
  text-decoration: none;
  color: black;
`
