import { Box, useColorModeValue as mode } from "@chakra-ui/react"
import * as React from "react"
import PropTypes from "prop-types"
import NavBar from "./Fragments/NavBar"
import { graphql, useStaticQuery } from "gatsby"

const Header = ({ siteTitle }) => {
  // Menu Query:
  const data = useStaticQuery(graphql`
    {
      wpMenu(locations: { eq: PRIMARY }) {
        menuItems {
          nodes {
            url
            title
            target
            label
            id
            parentId
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
    <Box
      bg={mode("white", "gray.700")}
      alignItems="center"
      boxShadow="0 5px 10px rgba(50,50,93,.1), 0 15px 35px rgba(50,50,93,.15), 0 5px 15px rgba(0,0,0,.1)"
      position="fixed"
      width="100%"
      zIndex="10"
    >
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
