import React from "react"
import { Link } from "gatsby"
import { Layout, Header } from "../components"
import ReactorsChat from "../assets/images/reactors-chat.png"

const IndexPage = () => (
  <Layout>
    <section>
      <h1>Meet and collab with other React developers in Cebu</h1>
      <p>React Cebu is a community for developers by developers</p>
      <form>
        <input type="text" placeholder="Your email" />
        <button type="submit">Join Newsletter</button>
      </form>
    </section>

    <section>
      <h2>You are not alone, we're here</h2>
      <img src={ReactorsChat} alt="Chat with Reactors" />
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

export default IndexPage
