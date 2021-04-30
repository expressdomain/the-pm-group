import * as React from "react"
import PropTypes from "prop-types"
import { Flex, useColorMode, List, ListItem } from "@chakra-ui/react"
import Logo from "../../../SVG/Logo"
import Link from "../../Link/Link"
import NavLink from "./NavLink"

const NavBar = ({ children, menu, siteTitle, ...props }) => {
  const { colorMode } = useColorMode()

  const Branding = () => {
    return (
      <>
        {colorMode === "dark" ? (
          <Link to="/" alt={`Home | ${siteTitle}`}>
            <Logo alt={siteTitle} />
          </Link>
        ) : (
          <Link to="/" alt={`Home | ${siteTitle}`}>
            <Logo alt={siteTitle} />
          </Link>
        )}
      </>
    )
  }

  const MenuLinks = () => {
    const links = []
    menu.nodes.forEach(node => {
      links.push(
        <ListItem key={node.label} my={0}>
          <NavLink to={node.url} alt={node.label}>
            {node.label}
          </NavLink>
        </ListItem>
      )
    })
    return (
      <List display="flex" alignItems={`center`}>
        {links}
      </List>
    )
  }
  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      w="100%"
      px={4}
      py={4}
      bg={["primary.500", "primary.500", "transparent", "transparent"]}
      color={["white", "white", "primary.700", "primary.700"]}
      {...props}
    >
      <Branding />

      <MenuLinks />
    </Flex>
  )
}

NavBar.propTypes = {
  menu: PropTypes.object,
  children: PropTypes.node,
}

// NavBar.defaultProps = {
//   siteTitle: ``,
// }

export default NavBar
