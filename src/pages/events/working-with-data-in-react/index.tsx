import { Layout } from "../../../components"
import React from "react"

const EventsPage = () => {
  React.useEffect(() => {
    var script = document.createElement("script")
    script.id = "ff-script"
    script.src =
      "https://formfacade.com/include/114958130307901205679/form/1FAIpQLSegpi2ZR5Q76ZiTSmZKmFlzkzwOaVV-aXEccjJsAtieC-Ob2g/classic.js?div=ff-compose"
    script.defer = true
    script.async = true
    document.body.appendChild(script)
  }, [])

  return (
    <Layout>
      <div style={{ padding: "4rem" }}>
        <h2 style={{ fontSize: "3rem" }}>
          Webinar: Working Fluently With Data In React
        </h2>
        <p>
          🚀 Unlock the Secrets of Data Management in React! 🚀 Learn all about
          client-side fetching, server-side fetching, React 18 concurrent
          features, and incremental static regeneration in our engaging talk.
          Become a data-savvy React developer! Register today! 💪
        </p>
        <p>Date: Sat, April 22, 2023 - 6pm onwards...</p>
        <p>Location: Online</p>
        <p>
          Event ref:{" "}
          <a
            href="https://www.facebook.com/events/1429233631155519"
            target="_blank"
            rel="nofollow"
          >
            https://www.facebook.com/events/1429233631155519
          </a>
        </p>
        <br />
        <p>Fill out the form below to reserve your spot!</p>
        <br />

        <div id="ff-compose" />
      </div>
    </Layout>
  )
}

export default EventsPage
