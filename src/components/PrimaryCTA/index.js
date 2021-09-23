import { Box, Container, Text } from "@chakra-ui/layout"
import { Skeleton } from "@chakra-ui/react"
import React from "react"
import PropTypes from "prop-types"
import Link from "../Link/Link"

const PrimaryCTA = ({ items, link, ctaText, isLoading }) => {
  return (
    <Box bgColor={`#1A202C`} maxWidth="100%" position="relative" py={19}>
      <Container
        display={["grid", "grid", "grid", "flex"]}
        placeItems="center"
        alignItems="center"
        justifyContent="space-evenly"
        py={[5, 15, 15, 15]}
        pt={[1, 15, 15, 15]}
        px={[2, 0, 0, 0]}
        maxW={`1300px`}
      >
        <Box
          textAlign="center"
          alignItems="center"
          minHeight="max-content"
          width="100%"
        >
          {isLoading ? (
            <Skeleton />
          ) : (
            items.map(item => (
              <Link
                to={item.link}
                color="white"
                textTransform="uppercase"
                fontSize="sm"
                textDecoration="none!important"
                key={item.title}
              >
                <Box display={`inline-block`} width={`fit-content`} pr={1}>
                  {item.title}{" "}
                </Box>
                {item.title !== "Media Buying" && (
                  <Text as="span" color="secondary" style={{ fontSize: `20px` }}>
                    |{" "}
                  </Text>
                )}
              </Link>
            ))
          )}
        </Box>
        {/* <Box mt={[8, 8, 8, 0]} ml={15}>
          <Link
            to={link}
            py={3}
            px={5}
            color="black"
            bg={`secondary`}
            whiteSpace="nowrap"
            textTransform={`uppercase`}
            _hover={{
              backgroundColor: `black`,
              color: `secondary`,
            }}
          >
            {ctaText}
          </Link>
        </Box> */}
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
