import React from "react"
import PropTypes from "prop-types"
import { Box, Heading } from "@chakra-ui/layout"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const GenericHero = ({ title, image }) => {
  return (
    <Box position={`relative`} display="grid" placeItems="center" >
      <Box style={{ gridArea: "1/1" }} zIndex={4}>
        <Heading
          as="h1"
          textAlign="center"
          color={image ? "white" : "black"}
          fontSize={[`xl`,`xl`, `2xl`, `4xl`]}
          textTransform="uppercase"
          px={2}
        >
          {title}
        </Heading>
      </Box>
      {image && title && (
        <GatsbyImage
          image={getImage(image)}
          alt={title}
          style={{ gridArea: "1/1", maxHeight: 200, minWidth: "100%" }}
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
