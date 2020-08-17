import { Layout, Newsletter } from "../components"
import { Link, graphql, useStaticQuery } from "gatsby"

import Img from "gatsby-image"
import React from "react"
import styled from "styled-components"

const Section = styled.section`
  display: block;
  max-width: 1440px;
  // border: 1px solid red;
  margin: 0 auto;
  text-align: center;
  font-size: 28px;
  padding: 60px 0;

  h2 {
    font-size: 60px;
    max-width: 900px;
    margin: 0 auto;
    margin-bottom: 18px;
  }
`

const HeroSection = styled(Section)`
  padding: 80px 0;

  h1 {
    font-size: 72px;
    max-width: 900px;
    margin: 0 auto;
    margin-bottom: 18px;
  }
`
const BecomePartSection = styled(Section)`
  display: flex;
  justify-content: space-around;
  align-items: center;

  h2 {
    text-align: left;
  }

  div:first-child {
    display: flex;
    flex-direction: column;
    text-align: left;
  }

  div:last-child {
    min-width: 498px;
    max-width: 100%:
  }
`

const MarketingSection = styled(Section)`
  max-width: 100%;
  background-color: #092851;
  color: #fafafa;
  padding: 80px 0;

  > h2 {
    margin-bottom: 28px;
  }

  > a {
    color: #092851;
    background-color: #fff;
    padding: 20px 25px;
    text-decoration: none;
    font-size: 20px;
    margin-left: 15px;
    border-radius: 4px;
    transition: box-shadow 420ms cubic-bezier(0.165, 0.84, 0.44, 1),
      color 420ms cubic-bezier(0.165, 0.84, 0.44, 1),
      background 420ms cubic-bezier(0.165, 0.84, 0.44, 1);
  }

  > a:first-child {
    margin-right: 15px;
  }

  > a:last-child {
    border: 1px solid #fff;
    background-color: #092851;
    color: #fff;
  }

  a:last-child:hover {
    box-shadow: inset 0 0 0 2px #092851;
  }
`

const SupportSection = styled(Section)`
  background-color: #f5f5f5;
  max-width: 100%;
`

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      reactorsChat: file(relativePath: { eq: "reactors-chat.png" }) {
        childImageSharp {
          fluid(maxWidth: 1082) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      reactorsCollaborating: file(
        relativePath: { eq: "reactors-collaborating.png" }
      ) {
        childImageSharp {
          fluid(maxWidth: 498) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <HeroSection id="newsletter">
        <h1>Meet and collab with other React developers in Cebu</h1>
        <p>React Cebu is a community for developers by developers</p>
        <Newsletter />
      </HeroSection>

      <Section>
        <h2>You are not alone, we're here</h2>
        <Img
          fluid={data.reactorsChat.childImageSharp.fluid}
          alt="Chat with reactors"
          style={{ maxWidth: `900px`, margin: `0 auto`, marginTop: `30px` }}
        />
      </Section>

      <BecomePartSection>
        <div>
          <h2>Be part of the community</h2>
          <p>Why not become part of something bigger?</p>
          <Link to="/be-a-reactor">Be a Reactor today</Link>
        </div>
        <div>
          <Img
            fluid={data.reactorsCollaborating.childImageSharp.fluid}
            alt="Reactors collaborating"
          />
        </div>
      </BecomePartSection>

      <SupportSection>
        <h2>We’re all into this together</h2>
        <p>We do this by heart, and we love what we do.</p>
        <Link to="/support">Let’s support each other</Link>
      </SupportSection>

      <Section>
        <h2>From Our Community</h2>
        <p>
          Proudly presenting the contributions of everyone who helped us achieve
          more.
        </p>
      </Section>

      <MarketingSection>
        <h2>Never miss an event!</h2>
        <Link to="#newsletter">Join Newsletter</Link>
        <Link to="https://www.facebook.com/reactcebu" target="_blank">
          Follow us on Facebook
        </Link>
      </MarketingSection>
    </Layout>
  )
}

export default IndexPage
