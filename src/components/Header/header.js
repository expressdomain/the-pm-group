import { Box, useColorModeValue as mode } from "@chakra-ui/react"
import * as React from "react"
import PropTypes from "prop-types"
import NavBar from "./Fragments/NavBar"
import { graphql, useStaticQuery } from "gatsby"

const Header = ({ siteTitle }) => {
  // Menu Query:
  const data = useStaticQuery(graphql`
    {
      wpMenu(locations: { eq: TOP_NAVIGATION }) {
        menuItems {
          nodes {
            url
            title
            target
            label
            id
            childItems {
              nodes {
                url
                title
                target
                path
                label
              }
            }
          }
        }
        name
        slug
        id
      }
    }
  `)
  return (
    <Box bg={mode("white", "gray.700")} alignItems="center">
      <header>
        <NavBar menu={data.wpMenu.menuItems} siteTitle={siteTitle} />
      </header>
    </Box>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
