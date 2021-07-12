import {
  Box,
  Button,
  Heading,
  Stack,
  Text,
  Grid,
  GridItem,
} from "@chakra-ui/react"
import * as React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Fade from "react-reveal/Fade"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/components/effect-coverflow/effect-coverflow.min.css"

// Import Swiper styles
import "swiper/swiper.scss"
import "swiper/components/navigation/navigation.scss"
import "swiper/components/pagination/pagination.scss"
import "swiper/components/scrollbar/scrollbar.scss"

import "./Hero.scss"

import SwiperCore, {
  Pagination,
  Navigation,
  Mousewheel,
  A11y,
} from "swiper/core"
import Link from "../Link/Link"

// install Swiper modules
SwiperCore.use([Mousewheel, Navigation, Pagination, A11y])

const Hero = ({
  image,
  alt,
  title,
  caption,
  slides,
  cta1,
  cta1Link,
  cta2,
  cta2Link,
}) => {
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
          pt={[16]}
          pb={[4]}
          display="flex"
          flexDirection="column"
          justifyContent="center"
          color={`white`}
        >
          <Heading as="h1" size="xl" fontWeight="extrabold">
            <Fade bottom>{title}</Fade>
          </Heading>
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
              href="/our-work"
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
            >
              See our Work
            </Button>
          </Stack>
        </GridItem>
        <GridItem maxW="100%">
          <Box maxW="100%">
            <Swiper
              slidesPerView="auto"
              spaceBetween={10}
              pagination={{
                clickable: true,
              }}
              navigation
              grabCursor
              mousewheel
            >
              {slides &&
                slides.map(slide => (
                  <SwiperSlide>
                    <Link
                      to={slide.link.url}
                      textDecoration="none"
                      aria-label={slide.title}
                      role="group"
                      className="hero-link"
                    >
                      <Box
                        py={4}
                        mx={2}
                        display="grid"
                        position="relative"
                        borderRadius="10px"
                      >
                        <GatsbyImage
                          image={getImage(
                            slide.image.localFile.childImageSharp
                          )}
                          style={{
                            maxWidth: "100%",
                            borderRadius: "10px!important",
                            gridArea: "1/1",
                          }}
                          className="image-slider"
                          alt={slide.title}
                        />
                        <Box
                          gridArea="1/1"
                          zIndex={2}
                          bg={"blackAlpha.700"}
                          height="fit-content"
                          alignSelf="end"
                          borderBottomRadius={"10px"}
                          py={8}
                          px={4}
                          display="none"
                          transition={`all .3s ease-in-out`}
                          textDecoration="none"
                          _groupHover={{
                            display: "grid",
                            transition: `all .3s ease-in-out`,
                          }}
                        >
                          <Fade bottom>
                            {slide.title && (
                              <Text color="white" fontWeight="bolder">
                                {slide.title}
                              </Text>
                            )}

                            {slide.caption && (
                              <Text color="white" textDecoration="none">
                                {slide.caption}
                              </Text>
                            )}
                          </Fade>
                        </Box>
                      </Box>
                    </Link>
                  </SwiperSlide>
                ))}
            </Swiper>
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
