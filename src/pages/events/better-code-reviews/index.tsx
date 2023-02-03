import { Layout } from "../../../components"
import React from "react"

const EventsPageBetterCodeReviews = () => {
  React.useEffect(() => {
    var script = document.createElement("script")
    script.id = "ff-script"
    script.src =
      "https://formfacade.com/include/114958130307901205679/form/1FAIpQLSfDBCmncz0tjdR21v96ry4QCLRp7RhdL8RgZYfjzvoB6M5ERw/classic.js?div=ff-compose"
    script.defer = true
    script.async = true
    document.body.appendChild(script)
  }, [])

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
            href="https://www.facebook.com/TheCompanyITPark"
            target="_blank"
            rel="nofollow"
          >
            The Company CEBU (IT Park)
          </a>{" "}
          and{" "}
          <a
            href="https://www.facebook.com/LegalMatchPH"
            target="_blank"
            rel="nofollow"
          >
            LegalMatch Philippines
          </a>{" "}
          for having us once again and for the food!
        </p>
        <p>Date: Sat, Feb 18, 2023 - 1pm onwards...</p>
        <p>
          Location: The Company Cebu IT Park, 6th Floor, Mabuhay Tower, Abad St,
          Cebu City, 6000 Cebu
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

        <div id="ff-compose"></div>
      </div>
    </Layout>
  )
}

export default EventsPageBetterCodeReviews
