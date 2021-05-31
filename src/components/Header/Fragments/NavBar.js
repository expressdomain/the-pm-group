import * as React from "react"
import PropTypes from "prop-types"
import {
  Flex,
  Box,
  useColorMode,
  List,
  ListItem,
  useMediaQuery,
  useDisclosure,
  useColorModeValue,
  IconButton,
} from "@chakra-ui/react"
import Logo from "../../../SVG/Logo"
import Link from "../../Link/Link"
import NavLink from "./NavLink"
import MobileNavContent from "./MobileNavContent"
import { HamburgerIcon } from "@chakra-ui/icons"

const NavBar = ({ children, menu, siteTitle, ...props }) => {
  const { colorMode } = useColorMode()
  // tablet breakpoint
  const [tabletDown] = useMediaQuery(`(max-width: 960px)`)
  const mobileNav = useDisclosure()
  const buttonColor = useColorModeValue(["black"])

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

  const MenuLinks = ({ isMobile }) => {
    const links = []
    menu.nodes.forEach(node => {
      if (!node.parentId) {
        links.push(
          <ListItem key={node.label} my={0}>
            <NavLink to={node.url} alt={node.label}>
              {node.label}
            </NavLink>
          </ListItem>
        )
      }
    })

    return (
      <List
        display={isMobile ? "block" : "flex"}
        alignItems={`center`}
        marginTop={isMobile ? 10 : 0}
        textAlign={`center`}
      >
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
      py={2}
      bg={["primary.500", "primary.500", "transparent", "transparent"]}
      color={["white", "white", "primary.700", "primary.700"]}
      {...props}
    >
      <Branding />
      <Box alignItems="center" display="flex" position="relative">
        {tabletDown ? (
          <IconButton
            display={{
              base: "flex",
            }}
            backgroundColor={buttonColor}
            size="sm"
            aria-label="Open menu"
            fontSize="20px"
            variant="black"
            onClick={mobileNav.onOpen}
            icon={<HamburgerIcon color={`secondary`} />}
          />
        ) : (
          <MenuLinks />
        )}
        {/* <ThemeToggle marginLeft={4} backgroundColor={buttonColor} /> */}
      </Box>
      <MobileNavContent
        isOpen={mobileNav.isOpen}
        onClose={mobileNav.onClose}
        display={{ md: `none` }}
      >
        <MenuLinks isMobile />
      </MobileNavContent>
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
