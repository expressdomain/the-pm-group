import {
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  Skeleton,
  Stack,
  Text,
  Grid,
  GridItem,
} from "@chakra-ui/react"
import * as React from "react"
import { HiChevronRight } from "react-icons/hi"
import { GatsbyImage } from "gatsby-plugin-image"
import Fade from "react-reveal/Fade"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/components/effect-coverflow/effect-coverflow.min.css"

import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';

import SwiperCore, {
  Pagination,
  Navigation,
  Mousewheel,
  EffectCoverflow
} from 'swiper/core';

// install Swiper modules
SwiperCore.use([Pagination, Navigation, Mousewheel, EffectCoverflow]);

const Hero = ({
  image,
  alt,
  title,
  caption,
  cta1,
  cta1Link,
  cta2,
  cta2Link,
}) => {
  // Set up two different Hero variants

  return (
    <Box  bg="gray.800" as="section" minH="140px" position="relative">
      <Grid templateColumns={["repeat(1, 1fr)", "repeat(2, 1fr)"]}>
        <GridItem
          maxW={{
            base: "xl",
            md: "7xl",
          }}
          mx="auto"
          px={{
            base: "6",
            md: "8",
          }}
          py="32"
          color={`white`}
        >
          <Heading as="h1" size="xl" fontWeight="extrabold">
            <Fade bottom>{title}</Fade>
          </Heading>
          <Text
            fontSize={{
              md: "2xl",
            }}
            mt="4"
            maxW="lg"
          >
            {caption}
          </Text>
          <Stack
            direction={{
              base: "column",
              md: "row",
            }}
            mt="10"
            spacing="4"
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
        <GridItem>
          <Box>
            <Swiper
              onSlideChange={() => console.log("slide change")}
              onSwiper={swiper => console.log(swiper)}
              slidesPerView={'auto'}
              spaceBetween={30}
              pagination={{
                "clickable": true
              }}
              navigation
              grabCursor
              autoplay={{
                "delay": 2500,
                "disableOnInteraction": false
              }}
              mousewheel
              coverflowEffect={{
                "rotate": 50,
                "stretch": 0,
                "depth": 100,
                "modifier": 1,
                "slideShadows": true
              }}
            >
              <SwiperSlide>
                <GatsbyImage
                  image={image}
                  style={{ height: "100%", width: "100%" }}
                  alt={alt}
                />
              </SwiperSlide>
              <SwiperSlide>
                <GatsbyImage
                  image={image}
                  style={{ height: "100%", width: "100%" }}
                  alt={alt}
                />
              </SwiperSlide>
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
