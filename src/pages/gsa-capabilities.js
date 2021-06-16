import * as React from "react"
import Layout from "../components/Layout/Layout"
import { graphql } from "gatsby"

import Seo from "gatsby-plugin-wpgraphql-seo"
import GenericHero from "../components/GenericHero"
import GSAContent from "../components/GSA"

const GSACapabilities = ({ data: { wpPage }}) => {
    const GSATitle = wpPage.gsaFields.gsaTitle
    const GSAInfo = wpPage.gsaFields.gsaRepeaterContent.gsaContents
    return(
        <Layout>
            <Seo post={wpPage} />
            <GenericHero title={GSATitle} />
            <GSAContent content={GSAInfo} />
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
        gsaRepeaterContent {
          gsaContents {
            gsaHeading
            gsaInfo
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