import * as React from "react"
import {
  Container,
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  AccordionIcon,
  Box,
  Text,
  Grid,
  VStack,
} from "@chakra-ui/react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import "./accordionGrid.scss"

const AccordionGrid = ({ grid }) => {
  return (
    <Container className="accordionGridWrapper" my={15}>
      <Grid
        templateColumns={[`repeat(1, 1fr)`, `repeat(2, 1fr)`, `repeat(3, 1fr)`]}
        gap={6}
      >
        {grid.map(item => (
          <Accordion allowMultiple justifyContent="center">
            <AccordionItem style={{ borderColor: `transparent` }}>
              <AccordionButton display="grid">
                <VStack>
                  <Box position={"relative"}>
                    <GatsbyImage
                      className="mediaBuyingImage"
                      image={getImage(item.mbImage.localFile.childImageSharp)}
                      alt={item.mbTitle}
                    />
                  </Box>
                  <Box>
                    <Text
                      my={5}
                      style={{
                        fontFamily: `Montserrat`,
                        color: `#black`,
                        fontSize: `25px`,
                        lineHeight: `30px`,
                      }}
                    >
                      {item.mbTitle}
                    </Text>
                  </Box>
                  <AccordionIcon />
                </VStack>
              </AccordionButton>
              <AccordionPanel
                className="accordionPanelContent"
                style={{ borderColor: `transparent` }}
                dangerouslySetInnerHTML={{ __html: item.mbContent }}
                pb={5}
              />
            </AccordionItem>
          </Accordion>
        ))}
      </Grid>
    </Container>
  )
}

export default AccordionGrid
