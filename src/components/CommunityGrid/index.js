import { Box, Grid, GridItem } from "@chakra-ui/layout"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import React from "react"

const CommunityGrid = ({ images }) => {
  return (
    <Box>
      <Grid templateColumns={[`repeat(2, 1fr)`, `repeat(4, 1fr)`]}>
        {images.map(image => (
          <GridItem>
            <GatsbyImage
              image={getImage(image.image.localFile.childImageSharp)}
              alt="test"
            />
          </GridItem>
        ))}
      </Grid>
    </Box>
  )
}

export default CommunityGrid
