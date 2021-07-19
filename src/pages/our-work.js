import * as React from "react"
import Layout from "../components/Layout/Layout"
import { graphql } from "gatsby"
import Seo from "gatsby-plugin-wpgraphql-seo"
import GenericHero from "../components/GenericHero"
import { ctaItems, ctaLink, ctaText } from "../constants/cta"
import PrimaryCTA from "../components/PrimaryCTA"
import WorkGrid from "../components/WorkGrid"

const OurWorkPage = ({ data }) => {
  // Hero Fields:
  const heroTitle = data.wpPage.ourWorkFields.workHero.title
  const heroImage =
    data.wpPage.ourWorkFields.workHero.backgroundImage.localFile.childImageSharp
  // Work Grid
  const workItems = data.wpPage.ourWorkFields.workGrid.gridItems
  return (
    <Layout>
      <Seo post={data.wpPage} />
      <GenericHero title={heroTitle} image={heroImage} isSmall />
      <PrimaryCTA items={ctaItems} link={ctaLink} ctaText={ctaText} />
      <WorkGrid items={workItems} />
    </Layout>
  )
}

export default OurWorkPage

export const workPageQuery = graphql`
  query GET_WORK_PAGE {
    wpPage(title: { eq: "Work" }) {
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
      title
      uri
      nodeType
      ourWorkFields {
        workGrid {
          gridItems {
            title
            link {
              target
              title
              url
            }
            image {
              localFile {
                childImageSharp {
                  gatsbyImageData(
                    quality: 90
                    placeholder: BLURRED
                    formats: [ WEBP, PNG]
                    layout: CONSTRAINED
                  )
                }
              }
            }
          }
        }
        workHero {
          title
          backgroundImage {
            localFile {
              childImageSharp {
                gatsbyImageData(
                  layout: CONSTRAINED
                  quality: 90
                  placeholder: BLURRED
                  formats: [ WEBP, PNG]
                )
              }
            }
          }
        }
      }
    }
  }
`
