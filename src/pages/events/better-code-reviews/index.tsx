import { Layout } from "../../../components"
import React from "react"

const EventsPageSecretsOfBuildingRobustUiComponents = () => {
  return (
    <Layout>
      <div style={{ padding: "4rem" }}>
        <h2 style={{ fontSize: "3rem" }}>
          In-Person Meetup: Better Code Reviews
        </h2>
        <p>
          In this FREE in-person meetup, we will be exploring the importance of
          code reviews and get a better understanding on how to do it
          effectively. Thank you{" "}
          <a
            href="https://www.facebook.com/LegalMatchPH"
            target="_blank"
            rel="nofollow"
          >
            LegalMatch Philippines
          </a>{" "}
          for having us once again.
        </p>
        <p>Date: Sat, Feb 18, 2023 - 1pm onwards...</p>
        <p>
          Location: LegalMatch Philippines at AppleOne Equicom Tower, Cebu City,
          6000 Cebu
        </p>
        <p>
          Event ref:{" "}
          <a
            href="https://www.facebook.com/events/3005357799773724"
            target="_blank"
            rel="nofollow"
          >
            https://www.facebook.com/events/3005357799773724
          </a>
        </p>
        <br />
        <p>Fill out the form below to reserve your spot!</p>
        <br />

        <div style={{ marginLeft: "0px", marginRight: "0px" }}>
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSfDBCmncz0tjdR21v96ry4QCLRp7RhdL8RgZYfjzvoB6M5ERw/viewform?embedded=true"
            width="100%"
            height="3000px"
            frameborder="0"
            marginheight="0"
            marginwidth="0"
          >
            Loading RVSP form…
          </iframe>
        </div>
      </div>
    </Layout>
  )
}

export default EventsPageSecretsOfBuildingRobustUiComponents
