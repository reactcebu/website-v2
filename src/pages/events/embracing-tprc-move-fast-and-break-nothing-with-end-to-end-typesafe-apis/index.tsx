import { Layout } from "../../../components"
import React from "react"

const EventsPage = () => {
  React.useEffect(() => {
    var script = document.createElement("script")
    script.id = "ff-script"
    script.src =
      "https://formfacade.com/include/114958130307901205679/form/1FAIpQLSf0p7y-N1380CDx8fiLHx-5UQpPNRaNPO_2xeA386Opfj9nfg/classic.js?div=ff-compose"
    script.defer = true
    script.async = true
    document.body.appendChild(script)
  }, [])

  return (
    <Layout>
      <div style={{ padding: "4rem" }}>
        <h2 style={{ fontSize: "3rem" }}>
          Embracing TPRC: Move Fast and Break Nothing with End-to-End Typesafe
          APIs
        </h2>
        <p>
          Discover the power of TRPC, an innovative real-time communication
          framework that simplifies end-to-end typesafe API development,
          enabling you to "Move Fast and Break Nothing". In this meetup, we'll
          provide an easy-to-understand overview of TRPC's key features and
          demonstrate how it promotes rapid, reliable development. Join fellow
          Reactors, developers, enthusiasts, and experts to learn, share ideas,
          and gain insights on how TRPC can transform the way you build and
          maintain APIs. Register today! 💪
        </p>
        <p>Date: Sat, May 27, 2023 - 3pm onwards...</p>
        <p>Location: Enspace Cebu</p>
        <p>
          Event ref:{" "}
          <a
            href="https://www.facebook.com/events/799914648148023"
            target="_blank"
            rel="nofollow"
          >
            https://www.facebook.com/events/799914648148023
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
