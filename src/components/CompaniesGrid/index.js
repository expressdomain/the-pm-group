import { Grid, Box } from "@chakra-ui/layout"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import React from "react"
import Link from "../Link/Link"
import Fade from "react-reveal/Fade"

const CompaniesGrid = ({ companies }) => {
  const { backgroundImage: image, companyItem: items } = companies
  return (
    <Box position={`relative`} display="grid" placeItems="center">
      <Box
        style={{ gridArea: `1/1` }}
        zIndex={4}
        px={[4, 8, 12]}
        height={`fit-content`}
      >
        <Grid
          templateColumns={[
            `repeat(2, 1fr)`,
            `repeat(3, 1fr)`,
            `repeat(5, 1fr)`,
          ]}
          placeItems="center"
          gap={6}
        >
          {items.map(item => (
            <Fade bottom cascade key={item.companyLink}>
              <Box
                key={item.companyLink}
                display="grid"
                placeItems="center"
                maxWidth={[100, 180, 200, 250]}
              >
                <Link to={item.companyLink}>
                  <GatsbyImage
                    image={getImage(item.companyImage.localFile)}
                    alt={item.companyLink}
                    style={{ maxWidth: `100%` }}
                  />
                </Link>
              </Box>
            </Fade>
          ))}
        </Grid>
      </Box>
      <GatsbyImage
        image={getImage(image.localFile)}
        alt={`test`}
        style={{ gridArea: "1/1", maxHeight: `400px`, width: `100%` }}
        objectPosition={`bottom center`}
      />
    </Box>
  )
}

export default CompaniesGrid
