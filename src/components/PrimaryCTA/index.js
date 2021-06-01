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
            <Link to={item.link} color="white" key={item.title}>
              {item.title} <span style={{ color: `#FDBC31` }}> | </span>
            </Link>
          ))}
        </Box>
        <Box>
          <Link to={link} py={3} px={5} color="secondary" bg={`#FDBC31`}>
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
}
