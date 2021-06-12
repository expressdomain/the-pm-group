import React from "react"
import { Container, Grid, Box, Text } from "@chakra-ui/layout"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Link from "../Link/Link"

const CompanyItems = ({ companies }) => {
  return (
    <Container>
      <Box>
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
          {companies.map(item => (
            <Box
              display="grid"
              maxWidth={[`100%`, 320, 400]}
              mt={5}
              mx={0}
              height="min-content"
            >
              <Link to={item.link} aria-label={item.name}>
                <GatsbyImage
                  image={getImage(item.image.localFile.childImageSharp)}
                  style={{ maxWidth: `100%` }}
                  alt={item.name}
                  m={1}
                />
              </Link>
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
                {item.name}
              </Text>

              <div dangerouslySetInnerHTML={{ __html: item.description }} />
            </Box>
          ))}
        </Grid>
      </Box>
    </Container>
  )
}

export default CompanyItems
