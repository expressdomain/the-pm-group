import { Box, Grid, GridItem } from "@chakra-ui/layout"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import React from "react"

const CommunityGrid = ({ images }) => {
  return (
    <Box>
      <Grid
        className="communityGrid"
        templateColumns={[`repeat(2, 1fr)`, `repeat(4, 1fr)`]}
        bg="black"
      >
        {images.map(image => (
          <GridItem overflow="hidden">
            <GatsbyImage
              image={getImage(image.image.localFile.childImageSharp)}
              alt="test"
              style={{ margin: "-3px" }}
            />
          </GridItem>
        ))}
      </Grid>
    </Box>
  )
}

export default CommunityGrid
