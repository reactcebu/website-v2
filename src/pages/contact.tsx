import { Layout } from "../components"
import React from "react"
import styled from "styled-components"

const ContactPage = () => {
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
          <h2>We'd love to hear from you!</h2>
        </Section>

        <Section>
          <p>
            If you have any questions, suggestions, or whatsoever, please email
            us at{" "}
            <a href={"mailto: react@jscebu.org"} target="_blank">
              react@jscebu.org
            </a>{" "}
            or you could also leave us a message at our{" "}
            <a href="https://facebook.com/reactcebu" target="_blank">
              Facebook page
            </a>
            .
          </p>

          <p>
            We also have a messenger group chat named{" "}
            <strong>Reactions v2</strong> where all Reactors are chilling and
            hanging out. If you'd like to join,{" "}
            <a href="https://m.me/reactcebu" target="_blank">
              please leave us a message
            </a>{" "}
            and we'll invite you.
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

export default ContactPage
