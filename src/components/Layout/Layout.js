/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
//  import Footer from "../Footer/index"
import { useStaticQuery, graphql } from "gatsby"
import { ChakraProvider, Box } from "@chakra-ui/react"
import Header from "../../components/Header/header"
import { SkipNavContent, SkipNavLink } from "../SkipNav/index"
import theme from "../../@chakra-ui/gatsby-plugin/theme"
import "@fontsource/montserrat/500.css"
import "@fontsource/montserrat/600.css"
import "@fontsource/montserrat/700.css"
import { SEOContext } from "gatsby-plugin-wpgraphql-seo"
import Footer from "../Footer"
import "../layout.scss"

const Layout = ({ children }) => {
  const {
    wp: { seo },
  } = useStaticQuery(graphql`
    query SiteInfoQuery {
      wp {
        seo {
          contentTypes {
            post {
              title
              schemaType
              metaRobotsNoindex
              metaDesc
            }
            page {
              metaDesc
              metaRobotsNoindex
              schemaType
              title
            }
          }
          webmaster {
            googleVerify
            yandexVerify
            msVerify
            baiduVerify
          }
          schema {
            companyName
            personName
            companyOrPerson
            wordpressSiteName
            siteUrl
            siteName
            inLanguage
            logo {
              sourceUrl
              mediaItemUrl
              altText
            }
          }
          social {
            facebook {
              url
              defaultImage {
                sourceUrl
                mediaItemUrl
              }
            }
            instagram {
              url
            }
            linkedIn {
              url
            }
            mySpace {
              url
            }
            pinterest {
              url
              metaTag
            }
            twitter {
              username
            }
            wikipedia {
              url
            }
            youTube {
              url
            }
          }
        }
      }
    }
  `)
  return (
    <ChakraProvider theme={theme}>
      <SEOContext.Provider value={{ global: seo }}>
        <SkipNavLink />
        <Header siteTitle={seo.schema.siteName} />
        <SkipNavContent>
          <Box pt={"97.14px"}>{children}</Box>
        </SkipNavContent>
        <Footer />
      </SEOContext.Provider>
    </ChakraProvider>
  )
}

export default Layout
