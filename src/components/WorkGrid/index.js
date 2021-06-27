import { Box, Grid, GridItem, Text, Container } from "@chakra-ui/layout"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import React from "react"
import Link from "../Link/Link"

const WorkGrid = ({ items }) => {
  return (
    <Container py={4}>
      <Grid
        templateColumns={[`repeat(1, 1fr)`, `repeat(2, 1fr)`, `repeat(3, 1fr)`]}
        gap={4}
      >
        {items.map(item => (
          <GridItem key={item.title} _hover={{ color: "secondary" }}>
            <Link
              to={item.link.url}
              display="grid"
              position="relative"
              color={`white`}
              role="group"
              _hover={{ color: "secondary" }}
              aria-label={item.title}
            >
              <Box
                display="flex"
                style={{ gridArea: `1/1` }}
                h="100%"
                zIndex={2}
                p={6}
              >
                <Text
                  alignSelf="flex-end"
                  fontSize={[`sm`, `md`, `xl`]}
                  fontWeight="bold"
                  transition={`all .3s ease-in-out`}
                  textTransform="uppercase"
                  _groupHover={{ marginBottom: 5 }}
                >
                  {item.title}
                </Text>
              </Box>
              <GatsbyImage
                image={getImage(item.image.localFile.childImageSharp)}
                alt={item.title}
                style={{ gridArea: `1/1` }}
              />
            </Link>
          </GridItem>
        ))}
      </Grid>
    </Container>
  )
}

export default WorkGrid
