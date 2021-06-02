import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Box, Text } from "@chakra-ui/layout"

const ParallaxCTA = ({ image, text }) => {
  return (
    <Box position={`relative`} display="grid" placeItems="center">
      <Box style={{ gridArea: "1/1" }} zIndex={4}>
        <Text color="white" zIndex={4}>
          {text}
        </Text>
      </Box>
      <GatsbyImage
        image={getImage(image.localFile.childImageSharp)}
        alt={text}
        style={{ gridArea: "1/1" }}
      />
    </Box>
  )
}

export default ParallaxCTA
