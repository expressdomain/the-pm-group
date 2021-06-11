import * as React from "react"

import { Box, Container, Text } from "@chakra-ui/layout"
import Link from "../Link/Link"

const CTA = () => {
  return (
    <Box bgColor={`#16171d`} maxWidth="100%" position="relative" py={5}>
      <Container display="grid" maxW={`1300px`}>
        <Box
          className="ctaLinksWrapper"
          display="grid"
          gridTemplateColumns={[`5fr 1fr`]}
          my={10}
        >
          <Box
            style={{
              fontSize: `20px`,
              textTransform: `uppercase`,
              textAlign: `center`,
              color: `white`,
            }}
          >
            <Link to="/">
              Advertising<span style={{ color: `#FDBC31` }}> | </span>
            </Link>
            <Link to="/">
              Digital Marketing<span style={{ color: `#FDBC31` }}> | </span>
            </Link>
            <Link to="/">
              Creative &amp; Video Production
              <span style={{ color: `#FDBC31` }}> | </span>
            </Link>
            <Link to="/">
              Public Relations<span style={{ color: `#FDBC31` }}> | </span>
            </Link>
            <Link to="/">
              Events<span style={{ color: `#FDBC31` }}> | </span>
            </Link>
            <Link to="/">Media Buying</Link>
          </Box>
          <Box className="ctaBtnWrapper" mt={5} ml={10} pl={20}>
            <Link
              to="/"
              py={6}
              px="19px"
              fontSize="15px"
              color="black"
              bg={`#FDBC31`}
              // fontWeight={`bold`}
              whiteSpace="nowrap"
              textTransform={`uppercase`}
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
