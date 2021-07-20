import * as React from "react"
import Layout from "../components/Layout/Layout"
import { graphql } from "gatsby"

import Seo from "gatsby-plugin-wpgraphql-seo"
import GenericHero from "../components/GenericHero"
import Gsa from "../components/GSA"

const GSACapabilities = ({ data }) => {
  const GSATitle = data.wpPage?.gsaFields?.gsaTitle
  const GSAContent = data.wpPage?.gsaFields?.gsaRepeaterContent

  return (
    <Layout>
      <Seo post={data.wpPage} />
      <GenericHero title={GSATitle} my={15} />
      <Gsa content={GSAContent} />
    </Layout>
  )
}

export default GSACapabilities

export const gsaCapabilitiesPageQuery = graphql`
  query GET_GSA_PAGE {
    wpPage(title: { eq: "GSA Capabilities" }) {
      title
      uri
      nodeType
      seo {
        breadcrumbs {
          text
          url
        }
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
                formats: [WEBP, PNG]
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
