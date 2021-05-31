import { useColorModeValue as mode } from "@chakra-ui/react"
import * as React from "react"
import Link from "../../Link/Link"

const NavLink = props => {
  const { isActive, ...rest } = props
  return (
    <Link
      display="block"
      py={2}
      px={3}
      borderRadius="md"
      transition="all 0.3s"
      fontWeight="medium"
      lineHeight="1.25rem"
      color={mode("black", "white")}
      aria-current={isActive ? "page" : undefined}
      _hover={{
        bg: mode("black", "secondary"),
        color: mode("color", "black"),
      }}
      _activeLink={{
        bg: mode("blue.600", "blue.200"),
        color: mode("white", "gray.900"),
      }}
      {...rest}
    />
  )
}

export default NavLink
