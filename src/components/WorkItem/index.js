import { GridItem } from "@chakra-ui/layout"
import { Box, Center, Text } from "@chakra-ui/react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import React from "react"
import WorkModal from "../WorkModal"

const WorkItem = ({ title, media, type, schema, image, id }) => {
  if (type === "Television") {
    return (
      <GridItem display="grid" placeItems="center" p={3}>
        {" "}
        <Box display="grid" placeItems="center" position="relative">
          <GatsbyImage
            image={getImage(image)}
            alt={title}
            style={{ gridArea: "1/1" }}
          />
          <Center
            style={{
              gridArea: "1/1",
              position: "relative",
            }}
          >
            <WorkModal title={title} id={id} isVideo videoLink={media} />
          </Center>
        </Box>
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
        <WorkModal title={title} id={id} image={image}>
          <GatsbyImage image={getImage(image)} alt={title} />
        </WorkModal>

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
