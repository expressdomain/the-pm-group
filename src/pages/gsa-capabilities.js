import * as React from "react"
import { Box, Text } from "@chakra-ui/layout"
import Layout from "../components/Layout/Layout"
import { graphql } from "gatsby"

import Seo from "gatsby-plugin-wpgraphql-seo"
import CTA from "../components/CTA"

const GSACapabilities = ({ data: { wpPage }}) => {
    const GSATitle = wpPage.gsaFields.gsaTitle

    return(
        <Layout>
            <Seo post={wpPage} />
            <Box className="gsaHeroWrapper heroWrapper" my={20}>
                <Text style={{
                color: `#2e2e2e`,
                textAlign: `center`,
                textTransform: `uppercase`,
                fontSize: `68px`,
                lineHeight: `1.02941176em`,
                fontFamily: `Montserrat`,
              }}>{GSATitle}</Text>
            </Box>
            <CTA />
        </Layout>
    )
}

export default GSACapabilities

export const gsaCapabilitiesPageQuery = graphql`
query GET_GSA_PAGE {
    wpPage(title: {eq: "GSA Capabilities"}) {
      title
      uri
      nodeType
      seo {
        title
        metaDesc
        focuskw
        metaKeywords
        metaRobotsNoindex
        metaRobotsNofollow
        opengraphTitle
        opengraphDescription
        opengraphImage {
          altText
          sourceUrl
          srcSet
        }
        canonical
        cornerstone
        schema {
          articleType
          pageType
          raw
        }
      }
      gsaFields {
        gsaContent {
          contents {
            heading
            info
          }
        }
        gsaTitle
        gsaImage {
          localFile {
            childImageSharp {
              gatsbyImageData(
                quality: 90
                formats: WEBP
                layout: CONSTRAINED
                placeholder: BLURRED
              )
            }
          }
        }
      }
    }
  }  
`