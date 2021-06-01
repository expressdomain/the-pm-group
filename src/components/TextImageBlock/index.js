import { Box, Grid, Heading } from "@chakra-ui/layout"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import React from "react"

const TextImageBlock = ({ title, content, image }) => {
  const sideImage = getImage(image.localFile.childImageSharp)
  return (
    <Grid
      templateColumns={[
        "repeat(1, 1fr)",
        "repeat(1, 1fr)",
        "repeat(1, 1fr)",
        "repeat(2, 1fr)",
      ]}
      gap={4}
      maxW={`1500px`}
      mx={`auto`}
    >
      <Box py={6} px={6}>
        <Heading as="h1" color={`black`} mb={4}>
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
