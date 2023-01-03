import { Layout } from "../../../components"
import React from "react"

const EventsPageSecretsOfBuildingRobustUiComponents = () => {
  return (
    <Layout>
      <div style={{ padding: "4rem" }}>
        <h2 style={{ fontSize: "3rem" }}>
          Talk: Secrets Of Building Robust UI Components
        </h2>
        <p>
          Learn about some tips and patterns on building robust UI components
          about React.
        </p>
        <p>Date: Friday, January 13, 2023 - 7pm onwards...</p>
        <p>The Company Cebu (IT Park)</p>
        <br />
        <p>Fill out the form below to reserve your spot!</p>
        <br />

        <div style={{ marginLeft: "0px", marginRight: "0px" }}>
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSdrGLmJfzr2xX1MNqCJSVmBURl4j00Mrltdj_ukU30Ygnh0UQ/viewform?embedded=true"
            width="100%"
            height="3006"
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
