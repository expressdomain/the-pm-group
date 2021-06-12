import React from "react"
import PropTypes from "prop-types"
import { Box, Heading } from "@chakra-ui/layout"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const GenericHero = ({ title, image }) => {
  return (
    <Box position={`relative`} display="grid" placeItems="center">
      <Box style={{ gridArea: "1/1" }} zIndex={4}>
        <Heading
          as="h1"
          color={image ? "white" : "black"}
          fontSize={[`xl`, `2xl`, `4xl`]}
          textTransform="uppercase"
        >
          {title}
        </Heading>
      </Box>
      {image && title && (
        <GatsbyImage
          image={getImage(image)}
          alt={title}
          style={{ gridArea: "1/1", maxHeight: 200 }}
        />
      )}
    </Box>
  )
}

export default GenericHero

GenericHero.propTypes = {
  title: PropTypes.string,
  image: PropTypes.object,
}
