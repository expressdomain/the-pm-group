import React from "react"
import { Container, Grid, Box, Text } from "@chakra-ui/layout"
import { GatsbyImage, getImage } from "gatsby-plugin-image" 

const CapabilitiesGrid = ({ capabilities }) => {
    const { capabilitiesGrid: items } = capabilities

    return(
        <Container className="capabilitiesGridWrapper" position={`relative`} display="grid">
            <Box style={{ gridArea: `1/1` }}>
                <Grid 
                    templateColumns={[
                        `repeat(1, 1fr)`, 
                        `repeat(2, 1fr)`, 
                        `repeat(3, 1fr)`]} 
                    gridAutoRows={ `1fr` }
                    gap={6}
                    height="100%">

                    {capabilities.map(item => (
                    <Box
                    display="grid"
                    placeItems="center"
                    maxWidth={[180, 200, 300]}
                    m={10}
                    height="min-content"
                    >
                        <GatsbyImage
                        image={getImage(item.cardImage.localFile)}
                        style={{ maxWidth: `100%` }}
                        alt={item.cardTitle}
                        m={1}
                        />
                        <Text tag="h2" style={{ 
                            color: `#2e2e2e`, 
                            textTransform: `uppercase`, 
                            fontFamily: `Montserrat`, 
                            fontSize: `23px`,
                            fontWeight: `700`,
                            textAlign: `center` }}
                            py={2}>{item.cardTitle}</Text>

                        <Text style={{ 
                            fontFamily: `Open Sans, sans-serif`, 
                            lineHeight: `25px`,
                            fontWeight: `400`,
                            color: `#767676` }}>{item.cardBody}</Text>
                    </Box>
                    ))}

                </Grid>
            </Box>
        </Container>
    )
}

export default CapabilitiesGrid