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
          <h3>Drop us a line</h3>
        </Section>

        <Section>
          <p>Email: react@jscebu.org</p>
          <p>Facebook Page: https://www.facebook.com/reactcebu</p>
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

export default ContactPage
