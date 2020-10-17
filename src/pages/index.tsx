import { Layout, Newsletter, SEO } from "../components"
import { Link, graphql, useStaticQuery } from "gatsby"

import Img from "gatsby-image"
import React from "react"
import styled from "styled-components"

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
      <SEO title="We are Reactors!" />
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
          <SectionLink to="/about">Be a Reactor today</SectionLink>
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
        <SectionLink to="/contact">Let’s support each other</SectionLink>
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

const Section = styled.section`
  display: block;
  max-width: 1440px;
  // border: 1px solid red;
  margin: 0 auto;
  text-align: center;
  font-size: 28px;
  padding: 60px 20px;

  h2 {
    font-size: 60px;
    max-width: 900px;
    margin: 0 auto;
    margin-bottom: 18px;
  }
`

const SectionLink = styled(Link)`
  text-decoration: none;
  font-size: 24px;
  color: hsl(240, 74%, 31%);
  border-bottom: none;
  border-bottom-style: none;
  border-bottom-color: initial;

  &:hover {
    color: hsl(240, 74%, 31%);
    border-bottom-color: hsl(240, 74%, 31%);
    border-bottom-width: 2px;
  }

  &:before {
    border-bottom-width: 2px;
    border-bottom-style: solid;
    transition: width 420ms cubic-bezier(0.165, 0.84, 0.44, 1);
    position: absolute;
    bottom: -2px;
    width: 0;
    content: "";
  }

  &:hover::before {
    width: 100%;
    transition: width 420ms cubic-bezier(0.165, 0.84, 0.44, 1);
  }

  &:after {
    background-image: url(data:image/svg+xml;charset=utf-8,%3Csvg%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M1%206a.5.5%200%200%200%200%201V6zM12.854.646a.5.5%200%200%200-.708.708l.708-.708zM18%206.5l.354.354a.5.5%200%200%200%200-.708L18%206.5zm-5.854%205.146a.5.5%200%200%200%20.708.708l-.708-.708zM1%207h16.5V6H1v1zm16.646-.854l-5.5%205.5.708.708%205.5-5.5-.708-.708zm-5.5-4.792l2.75%202.75.708-.708-2.75-2.75-.708.708zm2.75%202.75l2.75%202.75.708-.708-2.75-2.75-.708.708z%22%20fill%3D%22%231264A3%22%2F%3E%3C%2Fsvg%3E);
    content: "";
    width: 19px;
    height: 13px;
    display: inline-block;
    margin-left: 0.5em;
  }
  @media only screen and (max-width: 1024px) {
    padding-bottom: 30px;
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

  @media only screen and (max-width: 1024px) {
    flex-direction: column;
    h2 {
      text-align: center;
    }
    div:first-child {
      text-align: center;
      padding-bottom: 20px;
    }
  }
  @media only screen and (max-width: 768px) {
    div:last-child {
      min-width: 450px;
    }
  }
  @media only screen and (max-width: 640px) {
    h2 {
      font-size: 48px;
    }
    div: first-child {
      font-size: 24px;
    }
    div: last-child {
      min-width: 380px;
    }
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

export default IndexPage
