import React from "react"
import { Container, Grid, Box, Text } from "@chakra-ui/layout"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const CapabilitiesGrid = ({ capabilities }) => {
  return (
    <Container
      className="capabilitiesGridWrapper"
      position={`relative`}
      display="grid"
    >
      <Box style={{ gridArea: `1/1` }}>
        <Grid
          templateColumns={[
            `repeat(1, 1fr)`,
            `repeat(2, 1fr)`,
            `repeat(3, 1fr)`,
          ]}
          gridAutoRows={[`.5fr`, `.75fr`, `1fr`]}
          gap={6}
          height="min-content"
          mx={0}
        >
          {capabilities.map(item => (
            <Box
              display="grid"
              maxWidth={["100%", 350, 320, 400]}
              mt={5}
              mx={0}
              height="min-content"
            >
              <GatsbyImage
                image={getImage(item.cardImage.localFile)}
                style={{ maxWidth: `100%` }}
                alt={item.cardTitle}
                m={1}
              />
              <Text
                tag="h2"
                style={{
                  color: `#2e2e2e`,
                  textTransform: `uppercase`,
                  fontFamily: `Montserrat`,
                  fontSize: `23px`,
                  fontWeight: `700`,
                  textAlign: `left`,
                }}
                py={2}
              >
                {item.cardTitle}
              </Text>

              <div dangerouslySetInnerHTML={{ __html: item.cardBody }} />
            </Box>
          ))}
        </Grid>
      </Box>
    </Container>
  )
}

export default CapabilitiesGrid
