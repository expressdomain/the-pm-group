import { GridItem } from "@chakra-ui/layout"
import { Box, Text } from "@chakra-ui/react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import React from "react"

const WorkItem = ({ title, media, type, schema, image }) => {
  if (type === "Television") {
    return (
      <GridItem display="grid" placeItems="center" p={3}>
        {" "}
        <GatsbyImage image={getImage(image)} alt={title} />
        <Box py={4}>
          <Text color="black" fontWeight="bold">
            {title}
          </Text>
        </Box>
      </GridItem>
    )
  }
  if (type === "Radio") {
    return (
      <GridItem display="grid" placeItems="center" p={3}>
        <audio controls style={{ marginBottom: "10px" }}>
          <source src={media} type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
        <Text color="black" fontWeight="bold">
          {title}
        </Text>
      </GridItem>
    )
  }
  if (type === "Graphic Design" || "Outdoor" || "Print") {
    return (
      <GridItem p={3} textAlign="center">
        <GatsbyImage image={getImage(image)} alt={title} />
        <Box py={4}>
          <Text color="black" fontWeight="bold">
            {title}
          </Text>
        </Box>
      </GridItem>
    )
  }

  return <GridItem>{title}</GridItem>
}

export default WorkItem
