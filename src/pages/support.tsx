import { Layout } from "../components"
import React from "react"
import styled from "styled-components"

const SupportPage = () => {
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
          <h2>Support us and make a difference.</h2>
        </Section>

        <Section>
          <p>
            We are always looking for ways to improve our software, and we rely
            on our community to help us. If you have any ideas for new features
            or improvements, please visit our{" "}
            <a href="https://github.com/reactcebu/website-v2" target="_blank">
              repository
            </a>
            . on GitHub and contribute!
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

  p {
    text-align: left;
    line-height: 150%;
  }
`

export default SupportPage
