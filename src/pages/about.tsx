import { Layout } from "../components"
import React from "react"
import styled from "styled-components"

const AboutPage = () => {
  return (
    <Layout>
      <div
        style={{
          // display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Section>
          <h2>React Cebu — a community for developers by developers</h2>
        </Section>

        <Section>
          <p>
            We, React Cebu, aims to spread the usage of ReactJS and other
            JavaScript technologies to the community by organizing free meetups,
            workshops, code camps, trainings and more. Through these, we hope to
            create a friendly, inclusive, and positive space for our community
            members to engage and excel in this area. This is also to uplift
            other developers through free learning, knowledge sharing and
            collaboration. Ultimately, we hope to help in fostering cutting edge
            developers in Cebu City. We believe in the importance of finding
            your tribe — the people who'll be your cheerleaders, you'll grow and
            learn with — and that's what React Cebu hopes to be. Everyone is
            welcome to join this community by developers, for developers. We
            appreciate more hands! Let us know if you have the desire to help us
            bring more developer events. Send us a message at react@jscebu.org
          </p>
        </Section>
      </div>
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
  padding: 40px 30px;

  h2 {
    font-size: 60px;
    max-width: 900px;
    margin: 0 auto;
    margin-bottom: 18px;
  }
`

export default AboutPage
