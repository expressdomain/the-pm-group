import {
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  Stack,
  Text,
} from "@chakra-ui/react"
import * as React from "react"
import { HiChevronRight } from "react-icons/hi"
import { GatsbyImage } from "gatsby-plugin-image"

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
  return (
    <Box bg="gray.800" as="section" minH="140px" position="relative">
      <Box py="32" position="relative" zIndex={5}>
        <Box
          maxW={{
            base: "xl",
            md: "7xl",
          }}
          mx="auto"
          px={{
            base: "6",
            md: "8",
          }}
          color={`white`}
        >
          <Box maxW="xl">
            <Heading as="h1" size="3xl" fontWeight="extrabold">
              {title}
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
                href="#"
                colorScheme="yellow"
                px="8"
                rounded="full"
                size="lg"
                fontSize="md"
                fontWeight="bold"
              >
                Connect
              </Button>
              <HStack
                as="a"
                transition="background 0.2s"
                justify={{
                  base: "center",
                  md: "flex-start",
                }}
                href="#"
                color="white"
                rounded="full"
                fontWeight="bold"
                px="6"
                py="3"
                _hover={{
                  bg: "whiteAlpha.300",
                }}
              >
                <span>See our work</span>
                <HiChevronRight />
              </HStack>
            </Stack>
          </Box>
        </Box>
      </Box>
      <Flex
        id="image-wrapper"
        position="absolute"
        insetX="0"
        insetY="0"
        w="full"
        h="full"
        overflow="hidden"
        align="center"
      >
        <Box position="relative" w="full" h="full">
          <Box
            position="absolute"
            w="full"
            h="full"
            bg="blackAlpha.400"
            zIndex={4}
          />
          <GatsbyImage
            image={image}
            style={{ height: "100%", width: "100%" }}
            alt={alt}
          />
        </Box>
      </Flex>
    </Box>
  )
}

export default Hero
