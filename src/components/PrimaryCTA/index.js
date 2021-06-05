import { Box, Container, Text } from "@chakra-ui/layout"
import React from "react"
import PropTypes from "prop-types"
import Link from "../Link/Link"

const PrimaryCTA = ({ items, link, ctaText }) => {
  return (
    <Box bgColor={`black`} maxWidth="100%" position="relative">
      <Container
        display={["grid", "grid", "grid", "flex"]}
        placeItems="center"
        alignItems="center"
        justifyContent="space-between"
        py={10}
        maxW={`1300px`}
      >
        <Box
          display={["grid", "grid", "flex"]}
          gridTemplateColumns={[
            `repeat(3, 1fr)`,
            `repeat(3, 1fr)`,
            `repeat(3, 1fr)`,
            `repeat(6, 1fr)`,
          ]}
          gridGap={2}
          textAlign="center"
          alignItems="center"
          minHeight="max-content"
          width="100%"
        >
          {items.map(item => (
            <Link to={item.link} color="white">
              {item.title}{" "}
              <Text as="span" color="secondary">
                |
              </Text>
            </Link>
          ))}
        </Box>
        <Box mt={[8, 8, 8, 0]}>
          <Link
            to={link}
            py={3}
            px={5}
            color="black"
            bg={`#FDBC31`}
            // fontWeight={`bold`}
            whiteSpace="nowrap"
            textTransform={`uppercase`}
          >
            {ctaText}
          </Link>
        </Box>
      </Container>
    </Box>
  )
}

export default PrimaryCTA

PrimaryCTA.propTypes = {
  items: PropTypes.array,
  link: PropTypes.string,
  ctaText: PropTypes.string,
}
