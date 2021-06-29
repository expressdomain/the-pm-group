import {
  Badge,
  Box,
  Text,
  Square,
  useColorModeValue as mode,
} from "@chakra-ui/react"
import * as React from "react"
import Link from "../../Link/Link"
const MenuItem = props => {
  const { title, href, isNew, icon } = props
  return (
    <Link
      display="flex"
      px="5"
      py="3"
      to={href}
      rounded="lg"
      transition="0.2s background"
      _hover={{
        bg: mode("secondary", "white"),
      }}
      role="group"
    >
      {icon && (
        <Square
          size="12"
          rounded="md"
          bg="secondary"
          color="white"
          fontSize="1.75rem"
          display="inline-flex"
          marginRight={4}
        >
          {icon}
        </Square>
      )}
      <Box as="dl">
        <Text
          as="dt"
          fontWeight="500"
          transition="0.2s all"
          _groupHover={{
            color: mode(`white`, `secondary`),
          }}
          color={mode(`black`, `white`)}
        >
          {title}
        </Text>
        {isNew && (
          <Badge
            aria-hidden
            variant="solid"
            fontSize="10px"
            mt="-1"
            ms="2"
            colorScheme="blue"
          >
            New
          </Badge>
        )}
        {/* <Text
          as="dd"
          fontSize="sm"
          color={mode("gray.600", "white")}
          _groupHover={{
            color: mode(`white`, `primary`),
          }}
        >
          {children}
        </Text> */}
      </Box>
    </Link>
  )
}

export default MenuItem
