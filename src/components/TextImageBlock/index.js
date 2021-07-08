import { Box, Grid, Heading } from "@chakra-ui/layout"
import { Skeleton } from "@chakra-ui/react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import React from "react"

const TextImageBlock = ({ title, content, image, isSmall, isLeft }) => {
  const sideImage = getImage(image?.localFile?.childImageSharp)
  return (
    <Grid className="text-block-component"
      templateColumns={[
        "repeat(1, 1fr)",
        "repeat(1, 1fr)",
        "repeat(1, 1fr)",
        "repeat(2, 1fr)",
      ]}
      mx={`auto`}
    >
      <Box className="text-block-copy-wrapper"
        py={[12, 18, 20]}
        px={[12, 18, isSmall ? 12 : 20, isSmall ? 12 : 32]}
        bg={`#f0f0f0`}
      >
        <Heading
          as="h2"
          color={`black`}
          mb={4}
          letterSpacing="tight"
          fontSize={["xl", "2xl", "3xl"]}
        >
          {title}
        </Heading>
        <Box color="black" dangerouslySetInnerHTML={{ __html: content }} />
      </Box>
      <Box display="grid" position="relative">
        {sideImage ? (
          <GatsbyImage
            image={sideImage}
            alt={title}
            objectPosition={isLeft && "left"}
            style={{ gridArea: "1/1", maxWidth: `100%`, objectFit: "contain" }}
          />
        ) : (
          <Skeleton height={"100%"} />
        )}
      </Box>
    </Grid>
  )
}

export default TextImageBlock
