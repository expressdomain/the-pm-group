import * as React from "react"
import { Box, Text } from "@chakra-ui/layout"
import Layout from "../components/Layout/Layout"
import { graphql } from "gatsby"

import Seo from "gatsby-plugin-wpgraphql-seo"
import CTA from "../components/CTA"
import CapabilitiesGrid from "../components/CapabilitiesGrid"

const ExpertisePage = ({ data: { wpPage } }) => {
    // Hero Fields :
    const heroImage = wpPage.expertiseFields.expertiseHero.expertiseHeroImage
    const heroTitle = wpPage.expertiseFields.expertiseHero.title
    //  Capabilties Section :
    const capability = wpPage.expertiseFields.capabilitiesGrid.capabilityCard

    return(
        <Layout>
            <Seo post={wpPage} />
            <Box className="expertiseHeroWrapper heroWrapper">
                <Text style={{ 
                color: `#2e2e2e`, 
                textAlign: `center`, 
                textTransform: `uppercase`,
                fontSize: `68px`,
                lineHeight: `1.02941176em`,
                fontFamily: `Montserrat` }}>{heroTitle}</Text>
            </Box>
            <CTA />
            <CapabilitiesGrid capability={capabilities} />
        </Layout>
    )
}

export default ExpertisePage

export const expertisePageQuery = graphql`
query GET_EXP_PAGE {
    wpPage(title: {eq: "Expertise"}) {
      title
      uri
      nodeType
      seo {
        title
        metaDesc
        metaKeywords
        metaRobotsNofollow
        metaRobotsNoindex
        opengraphTitle
        opengraphDescription
        opengraphImage {
          altText
          sourceUrl
          srcSet
        }
        twitterTitle
        twitterDescription
        twitterImage {
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
      expertiseFields {
        expertiseHero {
          title
          expertiseHeroImage {
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
        clientList {
          title
          client {
            link
            name
          }
        }
        capabilitiesGrid {
          capabilityCard {
            cardBody
            cardTitle
            cardImage {
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
    }
  }  
`