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

import "swiper/swiper.scss"


import "./Hero.scss"

import SwiperCore, {
  Pagination,
  Navigation,
  Mousewheel,
  EffectCoverflow,
} from "swiper/core"
import Link from "../Link/Link"

// install Swiper modules
SwiperCore.use([Pagination, Navigation, Mousewheel, EffectCoverflow])

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
  // Set up two different Hero variants
  console.log(slides)

  return (
    <Box bg="transparent" as="section" minH="140px" position="relative">
      <Grid
        templateColumns={[
          "repeat(1, 100%)",
          "repeat(1, 100%)",
          "repeat(1, 100%)",
          "repeat(2, 50%)",
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
          py={[32, 32, 32, 0]}
          display="flex"
          flexDirection="column"
          justifyContent="center"
          color={`black`}
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
              maxW="lg"
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
              onSlideChange={() => console.log("slide change")}
              onSwiper={swiper => console.log(swiper)}
              slidesPerView="auto"
              spaceBetween={10}
              pagination={{
                clickable: true,
              }}
              effect="fade"
              navigation
              grabCursor
              mousewheel
              // coverflowEffect={{
              //   rotate: 50,
              //   stretch: 0,
              //   depth: 100,
              //   modifier: 1,
              //   slideShadows: true,
              // }}
            >
              {slides &&
                slides.map(slide => (
                  <SwiperSlide>
                    <Link to={slide.link.url} textDecoration="none" aria-label={slide.title}>
                    <Box py={4} mx={2} display="grid" position="relative">
                      <GatsbyImage
                        image={getImage(slide.image.localFile.childImageSharp)}
                        style={{
                          maxWidth: "100%",
                          borderRadius: "10px",
                          gridArea: "1/1",
                        }}
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
                      >
                        {slide.title && <Text color="white" fontWeight="bold" textDecoration="none">{slide.title}</Text>}

                        {slide.caption && <Text color="white" textDecoration="none">{slide.caption}</Text>}
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
