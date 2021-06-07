import React from "react"
import { Grid, Box, Text } from "@chakra-ui/layout"

const CapabilitiesGrid = ({ capabilities }) => {
    const { cardImage: image, capabilityCard: items } = capabilities
    return(
        <Box className="capabilitiesGridWrapper" position={`relative`} display="grid">
            <Box style={{ gridArea: `1/1` }}>
                <Grid 
                    templateColumns={[
                        `repeat(1, 1fr)`, 
                        `repeat(2, 1fr)`, 
                        `repeat(3, 1fr)`]} 
                    gap={6}>

                    {items.map(item => (
                    <Box
                    display="grid"
                    placeItems="center"
                    maxWidth={[180, 200, 250]}
                    >
                        {/* <GatsbyImage
                        image={getImage(item.cardImage.localFile)}
                        style={{ maxWidth: `100%` }}
                        alt={item.cardTitle}
                        /> */}
                        <Text>{item.cardTitle}</Text>
                        <Text>{item.cardBody}</Text>
                    </Box>
                    ))}

                </Grid>
            </Box>
                {/* <GatsbyImage
                    image={getImage(image.localFile)}
                    alt={`test`}
                    style={{ gridArea: "1/1", maxHeight: `400px`, width: `100%` }}
                    objectPosition={`bottom center`}
                /> */}
        </Box>
    )
}

export default CapabilitiesGrid