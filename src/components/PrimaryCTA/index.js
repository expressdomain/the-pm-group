import { Box, Container } from "@chakra-ui/layout"
import React from "react"
import PropTypes from "prop-types"
import Link from "../Link/Link"

const PrimaryCTA = ({ items, link, ctaText }) => {
  return (
    <Box bgColor={`black`}>
      <Container
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        py={10}
        maxW={`1300px`}
      >
        <Box display="flex">
          {items.map(item => (
            <Box
              key={item.title}
              pr={2}
              ml={2}
              borderRightColor={`secondary`}
              borderRightWidth={2}
            >
              <Link to={item.link} color="white">
                {item.title}
              </Link>
            </Box>
          ))}
        </Box>
        <Box>
          <Link
            to={link}
            py={3}
            px={5}
            color="black"
            bg={`#FDBC31`}
            // fontWeight={`bold`}
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
