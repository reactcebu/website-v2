/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import { Footer, GlobalStyles, Header } from "../index"
import { graphql, useStaticQuery } from "gatsby"

import PropTypes from "prop-types"
import React from "react"

import { LayoutContainer, LayoutContainerMain } from "./Layout.styles"

export const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <LayoutContainer>
      <GlobalStyles />
      <Header siteTitle={data.site.siteMetadata.title} />
      <LayoutContainerMain>{children}</LayoutContainerMain>
      <Footer />
    </LayoutContainer>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}
