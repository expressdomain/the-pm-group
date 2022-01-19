import {
  Box,
  Button,
  Stack,
  Text,
  Grid,
  GridItem,
  useColorModeValue,
  Flex,
  IconButton,
} from "@chakra-ui/react"
import * as React from "react"
import { ArrowBackIcon, ArrowForwardIcon } from "@chakra-ui/icons"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import "./Hero.scss"

const Hero = ({ title, caption, slides }) => {
  const hasMultipleImages = slides.length > 1
  const bgScrollbar = useColorModeValue(`gray.300`, `gray.800`)
  const bgScrollThumb = useColorModeValue(`gray.600`, `gray.400`)

  const ref = React.useRef()
  const scroll = scrollOffset => {
    ref.current.scrollLeft += scrollOffset
  }

  return (
    <Box bg="#1A202C" as="section" minH="140px" position="relative">
      <Grid
        templateColumns={[
          "repeat(1, 100%)",
          "repeat(1, 100%)",
          "repeat(1, 100%)",
          "repeat(1, 100%)",
        ]}
      >
        <GridItem
          maxW={{
            base: "xl",
            md: "7xl",
          }}
          px={{
            base: "6",
            md: "8",
          }}
          pt={[8]}
          pb={[4]}
          display="flex"
          flexDirection="column"
          justifyContent="center"
          color={`white`}
        >
          <Text
            as="h1"
            fontSize={["lg", "2xl", "3xl", "4xl"]}
            fontWeight="extrabold"
          >
            {title}
          </Text>
          {caption && (
            <Text
              fontSize={{
                md: "2xl",
              }}
              mt="4"
              // maxW="lg"
            >
              {caption}
            </Text>
          )}
          <Stack
            direction={{
              base: "column",
              md: "row",
            }}
            spacing="4"
            h="fit-content"
            mt={10}
          >
            <Button
              as="a"
              href="/our-work/"
              backgroundColor="secondary"
              _hover={{
                backgroundColor: `black`,
                color: `secondary`,
              }}
              px="8"
              textTransform="uppercase"
              fontWeight="regular"
              borderRadius={0}
              size="lg"
              color="black"
              fontSize="md"
              maxW="fit-content"
            >
              See our Work
            </Button>
          </Stack>
        </GridItem>
        <GridItem maxW="100%">
          <Box maxW="100%" position="relative" role="group">
            <Box
              role="group"
              aria-label="gallery"
              id="hero-gallery"
              aria-describedby="instructions"
              overflowX={hasMultipleImages ? "scroll" : "auto"}
              tabIndex="0"
              bg={"#1A202C"}
              // mb={2}
              px={[2, 4]}
              ref={ref}
              _focus={{ outline: "none", boxShadow: "none" }}
              scrollbehavior="smooth"
              sx={{
                WebkitOverflowScrolling: "touch",
                "::-webkit-scrollbar": { height: "0.75rem" },
                "::-webkit-scrollbar-track": {
                  backgroundColor: bgScrollbar,
                },
                "::-webkit-scrollbar-thumb": {
                  backgroundColor: bgScrollThumb,
                },
                "&:hover + #instructions, &:focus + #instructions": {
                  display: "block",
                },
              }}
            >
              {slides && hasMultipleImages && (
                <Flex as="section">
                  {slides.map((slide, i) => (
                    <Box
                      py={4}
                      mx={2}
                      as="a"
                      flex={["0 0 75%", "0 0 auto"]}
                      display="grid"
                      whiteSpace="nowrap"
                      position="relative"
                      borderRadius="10px"
                      sx={{
                        img: {
                          borderRadius: "10px",
                        },
                      }}
                      key={slide.title}
                      w="fit-content"
                      href={slide.link.url}
                      minH="242px"
                    >
                      <GatsbyImage
                        image={getImage(slide.image.localFile.childImageSharp)}
                        style={{
                          maxWidth: "100%",
                          borderRadius: "10px!important",
                          gridArea: "1/1",
                        }}
                        objectFit="contain"
                        className="image-slider"
                        loading={i <= 2 ? "eager" : "lazy"}
                        alt={slide.title}
                      />
                      <Box
                        gridArea="1/1"
                        zIndex={2}
                        bg={
                          "linear-gradient(0deg, #1d1b1b 20%, rgba(26,32,44,0) 100%)"
                        }
                        height="fit-content"
                        alignSelf="end"
                        borderBottomRadius={"10px"}
                        py={4}
                        px={4}
                        display="grid"
                        transition={`all .3s ease-in-out`}
                        textDecoration="none"
                      >
                        {slide.title && (
                          <Text
                            color="white"
                            fontWeight="bolder"
                            fontSize={["md", "lg"]}
                          >
                            {slide.title}
                          </Text>
                        )}

                        {slide.caption && (
                          <Text
                            color="white"
                            textDecoration="none"
                            fontSize={["md", "lg"]}
                          >
                            {slide.caption}
                          </Text>
                        )}
                      </Box>
                    </Box>
                  ))}
                </Flex>
              )}
            </Box>
            <Flex
              _groupHover={{
                display: ["none", "none", "flex", "flex", "flex"],
                transition: "all .3s ease-in-out",
              }}
              // opacity={[0, 0, 1, 1, 1]}
              transition="all .3s ease-in-out"
              display="none"
              position="absolute"
              bottom="47%"
              w="100%"
              justifyContent="space-between"
              zIndex="99"
              px={8}
            >
              <IconButton
                aria-label="Back"
                icon={<ArrowBackIcon />}
                transition="all .3s ease-in-out"
                id="prev-button"
                variant="solid"
                bg="blackAlpha.800"
                color="secondary"
                onClick={() =>
                  scroll(-ref.current.children[0].children[0].clientWidth)
                }
              />
              <IconButton
                aria-label="Next"
                icon={<ArrowForwardIcon />}
                transition="all .3s ease-in-out"
                id="next-button"
                variant="solid"
                bg="blackAlpha.800"
                color="secondary"
                onClick={() =>
                  scroll(ref.current.children[0].children[0].clientWidth)
                }
              />
            </Flex>
          </Box>
        </GridItem>
      </Grid>
    </Box>
  )
}

export default Hero
