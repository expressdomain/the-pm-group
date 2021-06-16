import * as React from "react"
import { Container, Accordion, AccordionButton, AccordionItem, AccordionPanel, Box, Text, Grid, VStack } from "@chakra-ui/react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const AccordionGrid = ({ grid }) => {
    return(
        <Container className="accordionGridWrapper" my={2}>
            <Grid templateColumns={[`repeat(1, 1fr)`, `repeat(2, 1fr)`, `repeat(3, 1fr)`, `repeat(4, 1fr)`]} gap={6}>
            {grid.map(item => (
            <Accordion defaultIndex={[0]} allowMultiple>
                <AccordionItem>
                    <AccordionButton>
                        <VStack>
                        <Box>
                        <GatsbyImage
                        image={getImage(item.mbImage.localFile.childImageSharp)}
                        alt={item.mbTitle}
                        style={{ gridArea: "1/1", maxWidth: `100%` }}
                        />
                        </Box>
                        <Box>
                        <Text mb={5} style={{ textTransform: `uppercase`, fontFamily: `Montserrat`, color: `#black`, fontSize: `25px`, lineHeight: `30px` }}>{item.mbTitle}</Text>
                        </Box>
                        </VStack>
                    </AccordionButton>
                    <AccordionPanel style={{ borderColor: `transparent` }} dangerouslySetInnerHTML={{ __html: item.mbContent }} />
                </AccordionItem>
                {console.log(item)}
            </Accordion>
            ))}
            </Grid>
        </Container>
    )
}

export default AccordionGrid