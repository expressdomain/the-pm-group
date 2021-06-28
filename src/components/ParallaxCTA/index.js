import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Box, Text } from "@chakra-ui/layout"

const ParallaxCTA = ({ image, text }) => {
  return (
    <Box position={`relative`} display="grid" placeItems="center">
      <Box style={{ gridArea: "1/1" }} zIndex={4}>
        <Text
          textAlign={`center`}
          color="white"
          fontWeight={`bold`}
          fontSize={[`md`, `lg`, `xl`, `2xl`]}
          zIndex={4}
          textTransform="uppercase"
          maxWidth={["250px", "none", "none", "none"]}
        >
          {text}
        </Text>
      </Box>
      <GatsbyImage
        image={getImage(image.localFile.childImageSharp)}
        alt={text}
        style={{ gridArea: "1/1", maxHeight: 200, minWidth: `100%` }}
      />
    </Box>
  )
}

export default ParallaxCTA
