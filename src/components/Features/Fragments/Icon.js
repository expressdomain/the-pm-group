import React from "react"
import TraditionalAdvertising from "../../../SVG/TraditionalAdvertising"
import EventsPromo from "../../../SVG/EventsPromo"
import PublicRelations from "../../../SVG/PublicRelations"
import DigitalMarketing from "../../../SVG/DigitalMarketing"
import Creative from "../../../SVG/Creative"
import VideoContent from "../../../SVG/VideoContent"

const Icon = ({ title }) => {
  if (title === "Traditional Advertising") {
    return <TraditionalAdvertising width={30} height={30} />
  }

  if (title === "Events, Promos and Fundraisers") {
    return <EventsPromo width={30} height={30} />
  }

  if (title === "Public Relations") {
    return <PublicRelations width={30} height={30} />
  }

  if (title === "Digital Marketing") {
    return <DigitalMarketing width={30} height={30} />
  }

  if (title === "Video Content Creation") {
    return <VideoContent width={30} height={30} />
  }

  if (title === "Creative") {
    return <Creative width={30} height={30} />
  }

  return ""
}

export default Icon
