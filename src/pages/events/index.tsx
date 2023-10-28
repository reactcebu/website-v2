import { Layout } from "../../components"
import React from "react"
import { eventsData } from "../../constant/Events"
import styled from "styled-components"
import Img from "gatsby-image"
import { breakpoints } from "../../components/Shared"

interface EventsPage {
  title: string
  imgUrl: string
  description: string
}

const EventsPage = () => {
  return (
    <Layout>
      <EventContainer>
        {eventsData.map((event: EventsPage) => {
          return (
            <EventCard>
              <img src={event.imgUrl}></img>
              <Description>{event.description}</Description>
              <Title>{event.title}</Title>
            </EventCard>
          )
        })}
      </EventContainer>
    </Layout>
  )
}

const EventCard = styled.div`
  border: 1px solid #e6e6e6;
  border-radius: 10px;
`

const EventContainer = styled.div`
  min-height: 50vh;
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-direction: column;
  padding: 0 40px 0 40px;

  img {
    width: 100%;
    height: auto;
    display: block;
    border-radius: 10px 10px 0 0;
  }

  @media ${breakpoints.sm} {
    flex-direction: row;
  }
`

const Description = styled.div`
  padding: 10px;
  font-size: 14px;
`

const Title = styled.div`
  padding: 10px;
`

export default EventsPage
