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
import SubMenu from "../../SubMenu"

const NavBar = ({ children, menu, siteTitle, ...props }) => {
  const { colorMode } = useColorMode()
  // tablet breakpoint
  const [tabletDown] = useMediaQuery("(max-width: 1000px)")
  const mobileNav = useDisclosure()
  const buttonColor = useColorModeValue(["black"])

  const Branding = () => {
    return (
      <>
        {colorMode === "dark" ? (
          <Link to="/" alt={`Home | ${siteTitle}`} aria-label={siteTitle}>
            <Logo alt={siteTitle} />
          </Link>
        ) : (
          <Link to="/" alt={`Home | ${siteTitle}`} aria-label={siteTitle}>
            <Logo alt={siteTitle} />
          </Link>
        )}
      </>
    )
  }

  const MenuLinks = ({ isMobile }) => {
    const links = []
    const subLinks = []
    menu.nodes.forEach(node => {
      if (!node.parentId) {
        links.push(
          <ListItem
            key={node.label}
            my={[4, 4, 4, 0]}
            mt={isMobile && node.label === "Connect" && 8}
          >
            {node.label === "Companies" ? (
              <SubMenu title={node.label} links={subLinks} />
            ) : (
              <NavLink to={node.url} alt={node.label}>
                {node.label}
              </NavLink>
            )}
          </ListItem>
        )
      } else {
        subLinks.push(node)
      }
    })

    return (
      <List
        display={isMobile ? "block" : "flex"}
        fontSize={isMobile ? "2xl" : ""}
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
      {/* <ThemeToggle /> */}
      <Branding />
      <Box alignItems="center" display="flex" position="relative">
        {tabletDown && (
          <Link
            py={3}
            px={6}
            bg="black"
            color="secondary"
            fontWeight="bold"
            _hover={{
              color: "black",
              bg: "secondary",
            }}
            mr="8"
            to="/contact-us"
            transition="all 0.3s"
          >
            Connect
          </Link>
        )}
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
