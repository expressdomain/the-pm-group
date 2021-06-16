import * as React from "react"
import { Container, Accordion, AccordionButton, AccordionItem, AccordionPanel, AccordionIcon, Box, Text, Grid, VStack } from "@chakra-ui/react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const AccordionGrid = ({ grid }) => {
    return(
        <Container className="accordionGridWrapper" my={10}>
            <Grid templateColumns={[`repeat(1, 1fr)`, `repeat(2, 1fr)`, `repeat(3, 1fr)`, `repeat(4, 1fr)`]} gap={6}>
            {grid.map(item => (
            <Accordion allowMultiple>
                <AccordionItem style={{ borderColor: `transparent` }}>
                    <AccordionButton>
                        <VStack>
                        <Box>
                        <GatsbyImage
                        className="mediaBuyingImage"
                        image={getImage(item.mbImage.localFile.childImageSharp)}
                        alt={item.mbTitle}
                        style={{ gridArea: "1/1" }}
                        maxHeight={[`150px`, `200px`, `225px`, `300px`]}
                        width="auto"
                        />
                        </Box>
                        <Box>
                        <Text mb={5} style={{ textTransform: `uppercase`, fontFamily: `Montserrat`, color: `#black`, fontSize: `25px`, lineHeight: `30px` }}>{item.mbTitle}</Text>
                        </Box>
                        <AccordionIcon />
                        </VStack>
                    </AccordionButton>
                    <AccordionPanel style={{ borderColor: `transparent` }} dangerouslySetInnerHTML={{ __html: item.mbContent }} pb={5} />
                </AccordionItem>
            </Accordion>
            ))}
            </Grid>
        </Container>
    )
}

export default AccordionGrid