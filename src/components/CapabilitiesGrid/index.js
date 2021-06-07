import React from "react"
import { Grid, Box, Text } from "@chakra-ui/layout"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import Link from "../Link/Link"

const CompaniesGrid = ({ capabilities }) => {
    const { cardImage: image, capabilityCard: items } = capabilities
    return(
        <Box position={`relative`} display="grid">
            <Box style={{ gridArea: `1/1` }}>
                <Grid 
                    templateColumns={`repeat(3, 1fr)`} 
                    gap={6}>

                    {items.map(item => (
                    <Box
                    display="grid"
                    placeItems="center"
                    maxWidth={[180, 200, 250]}
                    >
                        <GatsbyImage
                        image={getImage(item.cardImage.localFile)}
                        style={{ maxWidth: `100%` }}
                        alt={item.cardTitle}
                        />
                        <Text>{item.cardTitle}</Text>
                        <Text>{item.cardBody}</Text>
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