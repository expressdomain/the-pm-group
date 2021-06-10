import { Box, Grid, Heading } from "@chakra-ui/layout"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import React from "react"

const TextImageBlock = ({ title, content, image }) => {
  const sideImage = getImage(image?.localFile?.childImageSharp)
  return (
    <Grid
      templateColumns={[
        "repeat(1, 1fr)",
        "repeat(1, 1fr)",
        "repeat(1, 1fr)",
        "repeat(2, 1fr)",
      ]}
      mx={`auto`}
    >
      <Box py={[12, 18, 20, 24]} px={[12, 16, 18, 24]} bg={`#f0f0f0`}>
        <Heading as="h2" color={`black`} mb={4} letterSpacing="tight">
          {title}
        </Heading>
        <Box dangerouslySetInnerHTML={{ __html: content }} />
      </Box>
      <Box display="grid" position="relative">
        <GatsbyImage
          image={sideImage}
          alt={title}
          style={{ gridArea: "1/1", maxWidth: `100%` }}
        />
      </Box>
    </Grid>
  )
}

export default TextImageBlock
