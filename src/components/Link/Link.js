import * as React from "react"
import { Link as GatsbyLink } from "gatsby"
import { chakra } from "@chakra-ui/react"

const ChakraLink = chakra(GatsbyLink, {
  baseStyle: {
    transition: `all .3s ease-in-out`,
    cursor: `pointer`,
    textDecoration: `none`,
    outline: `none`,
    _hover: {
      textDecoration: `underline`,
      color: `secondary`,
    },
    _focus: {
      boxShadow: `outline`,
    },
  },
})

/**
 * ChakraLink with gatsby-link (no external links)
 */
// const Link = props => <ChakraLink {...props} />

const Link = ({ children, to, activeClassName, partiallyActive, ...props }) => {
  // Tailor the following test to your environment.
  // This example assumes that any internal link (intended for Gatsby)
  // will start with exactly one slash, and that anything else is external.
  const internal = /^\/(?!\/)/.test(to)
  // Use Gatsby Link for internal links, and <a> for propss
  if (internal) {
    return (
      <ChakraLink
        to={to}
        activeClassName={activeClassName}
        partiallyActive={partiallyActive}
        {...props}
      >
        {children}
      </ChakraLink>
    )
  }
  return (
    <chakra.a
      href={to}
      target={to.includes("tel") === true ? "" : "_blank"}
      rel="noopener noreferrer"
      _hover={{
        color: `secondary`,
      }}
      transition={`all .3s ease-in-out`}
      {...props}
    >
      {children}
    </chakra.a>
  )
}

export default Link
