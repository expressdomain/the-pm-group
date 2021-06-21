import {
  Box,
  Flex,
  Heading,
  LinkBox,
  LinkOverlay,
  Text,
  useColorModeValue as mode,
} from "@chakra-ui/react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import * as React from "react"
import { BsArrowRight } from "react-icons/bs"
import Link from "../Link/Link"

const BlogCard = props => {
  const { title, description, image, link, category } = props
  return (
    <LinkBox
      as="article"
      bg={{
        sm: mode("white", "gray.700"),
      }}
      shadow={{
        sm: "base",
      }}
      rounded={{
        sm: "md",
      }}
      overflow="hidden"
      transition="all 0.2s"
      _hover={{
        shadow: {
          sm: "lg",
        },
      }}
    >
      <Flex direction="column">
        <GatsbyImage image={getImage(image)} alt={title} />
        <Flex
          direction="column"
          px={{
            sm: "6",
          }}
          py="5"
        >
          <Text
            casing="uppercase"
            letterSpacing="wider"
            fontSize="xs"
            fontWeight="semibold"
            mb="2"
            color="gray.500"
          >
            {category}
          </Text>
          <Heading as="h3" size="sm" mb="2" lineHeight="base">
            <LinkOverlay href={`/news${link}`}>{title}</LinkOverlay>
          </Heading>
          <Box
            noOfLines={2}
            mb="8"
            color={mode("gray.600", "gray.400")}
            dangerouslySetInnerHTML={{ __html: description }}
          />
          <Flex
            align="baseline"
            justify="space-between"
            fontSize="sm"
            color={mode("gray.600", "gray.400")}
          >
            {/* <Text>
                By{' '}
                <Box as="a" textDecor="underline" href={author.href}>
                  {author.name}
                </Box>
              </Text> */}
            {/* <Link href="#">
                <Box as={BsClockFill} display="inline-block" me="2" opacity={0.4} />3 min read
              </Link> */}
            <Link to={`/news${link}`} aria-label={`Read more about: ${title}`}>
              Read More{" "}
              <Box
                as={BsArrowRight}
                display="inline-block"
                me="2"
                opacity={0.4}
              />
            </Link>
          </Flex>
        </Flex>
      </Flex>
    </LinkBox>
  )
}

export default BlogCard
