import React from "react"
import Img from "gatsby-image"
import { Link, useStaticQuery, graphql } from "gatsby"
import { Layout, Newsletter } from "../components"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      logo: file(relativePath: { eq: "reactors-chat.png" }) {
        childImageSharp {
          fluid(maxWidth: 1080) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <section>
        <h1>Meet and collab with other React developers in Cebu</h1>
        <p>React Cebu is a community for developers by developers</p>
        <Newsletter />
      </section>

      <section>
        <h2>You are not alone, we're here</h2>
        <Img fluid={data.logo.childImageSharp.fluid} alt="Chat with reactors" />
      </section>

      <section>
        <h2>Be part of the community</h2>
        <p>Why not become part of something bigger?</p>
        <Link to="/be-a-reactor">Be a Reactor today</Link>
      </section>

      <section>
        <h2>From Our Community</h2>
        <p>
          Proudly presenting the contributions of everyone who helped us achieve
          more.
        </p>
      </section>

      <section>
        <h2>Never miss an event!</h2>
        <button>Join Newsletter</button>
        <button>Follow us on Facebook</button>
      </section>
    </Layout>
  )
}

export default IndexPage
