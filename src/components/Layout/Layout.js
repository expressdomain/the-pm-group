/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
//  import Footer from "../Footer/index"
import Header from "../../components/Header/header"
import { ChakraProvider } from "@chakra-ui/react"
import { SkipNavContent, SkipNavLink } from "../SkipNav/index"
import theme from "../../@chakra-ui/gatsby-plugin/theme"
import { useStaticQuery, graphql } from "gatsby"
import "@fontsource/montserrat"
import { SEOContext } from "gatsby-plugin-wpgraphql-seo"

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
        <SkipNavContent>{children}</SkipNavContent>
        {/* <Footer /> */}
      </SEOContext.Provider>
    </ChakraProvider>
  )
}

export default Layout
