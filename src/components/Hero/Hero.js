import {
  Box,
  Button,
  Stack,
  Text,
  Grid,
  GridItem,
  useColorModeValue,
  Flex,
  keyframes,
  useMediaQuery,
} from "@chakra-ui/react"
import * as React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import "./Hero.scss"

const Hero = ({ title, caption, slides }) => {
  const hasMultipleImages = slides.length > 1
  const bgScrollbar = useColorModeValue(`gray.300`, `gray.800`)
  const bgScrollThumb = useColorModeValue(`gray.600`, `gray.400`)
  const [isTablet] = useMediaQuery(`(max-width: 1200px)`)

  const scaleIn = keyframes`
    0%   {transform: scale(.9); opacity: 0;}
    100% {transform: scale(1); opacity: 1;}
  `

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
            fontSize={["xl", "2xl", "3xl", "4xl"]}
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
          <Box maxW="100%">
            <Box
              role="group"
              aria-label="gallery"
              aria-describedby="instructions"
              overflowX={hasMultipleImages ? "scroll" : "auto"}
              tabIndex="0"
              bg={"#1A202C"}
              // mb={2}
              px={[2, 4]}
              _focus={{ outline: "none", boxShadow: "none" }}
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
                      key={slide.title}
                      w="fit-content"
                      href={slide.link.url}
                      animation={`${scaleIn} 0.3s ease-in`}
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
          </Box>
        </GridItem>
      </Grid>
    </Box>
    // <Box bg="gray.800" as="section" minH="140px" position="relative">
    //   <Box py="32" position="relative" zIndex={5}>
    //     <Box
    //       maxW={{
    //         base: "xl",
    //         md: "7xl",
    //       }}
    //       mx="auto"
    //       px={{
    //         base: "6",
    //         md: "8",
    //       }}
    //       color={`white`}
    //     >
    //       <Box maxW="xl">
    //         <Heading as="h1" size="xl" fontWeight="extrabold">
    //           <Fade bottom>{title}</Fade>
    //         </Heading>
    //         <Text
    //           fontSize={{
    //             md: "2xl",
    //           }}
    //           mt="4"
    //           maxW="lg"
    //         >
    //           {caption}
    //         </Text>
    //         <Stack
    //           direction={{
    //             base: "column",
    //             md: "row",
    //           }}
    //           mt="10"
    //           spacing="4"
    //         >
    //           <Button
    //             as="a"
    //             href="/our-work"
    //             backgroundColor="secondary"
    //             _hover={{
    //               backgroundColor: `black`,
    //               color: `secondary`,
    //             }}
    //             px="8"
    //             textTransform="uppercase"
    //             fontWeight="regular"
    //             borderRadius={0}
    //             size="lg"
    //             color="black"
    //             fontSize="md"
    //           >
    //             See our Work
    //           </Button>
    //         </Stack>
    //       </Box>
    //     </Box>
    //   </Box>
    //   <Flex
    //     id="image-wrapper"
    //     position="absolute"
    //     insetX="0"
    //     insetY="0"
    //     w="full"
    //     h="full"
    //     overflow="hidden"
    //     align="center"
    //   >
    //     <Box position="relative" w="full" h="full">
    //       <Box
    //         position="absolute"
    //         w="full"
    //         h="full"
    //         bg="blackAlpha.400"
    //         zIndex={4}
    //       />

    //       {/* <Skeleton height={500} /> */}
    //       {/* <GatsbyImage
    //         image={image}
    //         style={{ height: "100%", width: "100%" }}
    //         alt={alt}
    //       /> */}
    //     </Box>
    //   </Flex>
    // </Box>
  )
}

export default Hero
