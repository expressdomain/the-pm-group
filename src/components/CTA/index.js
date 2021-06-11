import * as React from "react"

import { Box, Container, Text } from "@chakra-ui/layout"
import Link from "../Link/Link"
import "./cta.scss"

const CTA = () => {
  return (
    <Box bgColor={`#16171d`} maxWidth="100%" position="relative" py={5}>
      <Container display="grid" maxW={`1300px`}>
        <Box
          className="ctaLinksWrapper"
          display="grid"
          gridTemplateColumns={[`1fr`, `1fr`, `5fr 1fr`]}
          gridTemplateRows={[`1fr`, `1fr`, `0fr`]}
          my={10}
        >
          <Box
            className="ctaLinksInner"
            style={{
              fontSize: `20px`,
              textTransform: `uppercase`,
              textAlign: `center`,
              color: `white`,
            }}
          >
            <Link to="/" _hover={{ textDecoration: `none` }}>
              Advertising<span style={{ color: `#FDBC31` }}> | </span>
            </Link>
            <Link to="/" _hover={{ textDecoration: `none` }}>
              Digital Marketing<span style={{ color: `#FDBC31` }}> | </span>
            </Link>
            <Link to="/" _hover={{ textDecoration: `none` }}>
              Creative &amp; Video Production
              <span style={{ color: `#FDBC31` }}> | </span>
            </Link>
            <Link to="/" _hover={{ textDecoration: `none` }}>
              Public Relations<span style={{ color: `#FDBC31` }}> | </span>
            </Link>
            <Link to="/" _hover={{ textDecoration: `none` }}>
              Events<span style={{ color: `#FDBC31` }}> | </span>
            </Link>
            <Link to="/" _hover={{ textDecoration: `none` }}>Media Buying</Link>
          </Box>
          <Box className="ctaBtnWrapper">
            <Link
              className="ctaBtn"
              to="/contact-us"
              py="12px"
              px="21px"
              fontSize="15px"
              color="black"
              bg={`#FDBC31`}
              // fontWeight={`bold`}
              whiteSpace="nowrap"
              textTransform={`uppercase`}
              _hover={{ textDecoration: `none` }}
            >
              Connect
            </Link>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

export default CTA
