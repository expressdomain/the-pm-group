import { Grid, Box } from "@chakra-ui/layout"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import React from "react"
import Link from "../Link/Link"

const CompaniesGrid = ({ companies }) => {
  const { backgroundImage: image, companyItem: items } = companies
  return (
    <Box position={`relative`} display="grid" placeItems="center">
      <Box style={{ gridArea: `1/1` }} zIndex={4} px={[4, 8, 12]}>
        <Grid
          templateColumns={[
            `repeat(2, 1fr)`,
            `repeat(2, 1fr)`,
            `repeat(4, 1fr)`,
          ]}
          gap={6}
        >
          {items.map(item => (
            <Box
              key={item.companyLink}
              display="grid"
              placeItems="center"
              maxWidth={[180, 200, 250]}
            >
              <Link to={item.companyLink}>
                <GatsbyImage
                  image={getImage(item.companyImage.localFile)}
                  alt={item.companyLink}
                  style={{ maxWidth: `100%` }}
                />
              </Link>
            </Box>
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
