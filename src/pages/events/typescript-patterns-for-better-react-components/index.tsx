import { Layout } from "../../../components"
import React from "react"

const EventsPage = () => {
  React.useEffect(() => {
    var script = document.createElement("script")
    script.id = "ff-script"
    script.src =
      "https://formfacade.com/include/114958130307901205679/form/1FAIpQLSdpoO0zqfASSAzLMzcx_fDgwix2bpyzawrCFhjZbDkEtEofIQ/classic.js?div=ff-compose"
    script.defer = true
    script.async = true
    document.body.appendChild(script)
  }, [])

  return (
    <Layout>
      <div style={{ padding: "4rem" }}>
        <h2 style={{ fontSize: "3rem" }}>
          Typescript Patterns for Better React Components
        </h2>
        <p>
          Have you ever tried building fully-typed polymorphic components? Good!
          Now how about combining that with discriminated unions, enhanced HTML
          attribute types and a forwardRef wrapper? Exactly — it's not easy. In
          this talk, we'll walk you through several TypeScript patterns you'll
          face over and over again. From building simple but 100% type-safe
          component props, constructing compound vs. polymorphic components, to
          function overload components, discriminated union props, generic React
          components and augmented components wrapped in forwardRef and more.
          Join this session and bring your typing skills to the next level!
        </p>
        <p>Date: Sat, Dec 21, 2023 - 6pm onwards...</p>
        <p>Location: enspace Cebu, </p>
        <p>
          Event ref:{" "}
          <a
            href="https://www.facebook.com/events/255514504201688"
            target="_blank"
            rel="nofollow"
          >
            https://www.facebook.com/events/255514504201688
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
