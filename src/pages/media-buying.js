import * as React from "react"
import Layout from "../components/Layout/Layout"
import { graphql } from "gatsby"
import Seo from "gatsby-plugin-wpgraphql-seo"
import { ctaItems, ctaLink, ctaText } from "../constants/cta"

import TextImageBlock from "../components/TextImageBlock"
import GenericHero from "../components/GenericHero"
import AccordionGrid from "../components/AccordionGrid"
import PrimaryCTA from "../components/PrimaryCTA"

const MediaBuying = ({ data, context }) => {
  // About Page Title
  const aboutPageTitle = data.wpPage?.mediaBuyingFields?.mediaBuyingHero?.title
  const aboutPageHeroImage =
    data.wpPage?.mediaBuyingFields?.mediaBuyingHero?.backgroundImage.localFile
      .childImageSharp
  // About Hero Section
  const heroTitle =
    data.wpPage?.mediaBuyingFields?.textImageSection?.textAboutTitle
  const heroDescription =
    data.wpPage?.mediaBuyingFields?.textImageSection?.textAboutDescription
  const heroImage =
    data.wpPage?.mediaBuyingFields?.textImageSection?.textAboutImage
  // Accordion Grid
  const accordionArray =
    data.wpPage?.mediaBuyingFields?.mediaBuyingGrid?.gridContent
  const accordionTitle =
    data.wpPage?.mediaBuyingFields?.mediaBuyingGrid?.gridContent.mbTitle
  const accordionContent =
    data.wpPage?.mediaBuyingFields?.mediaBuyingGrid?.gridContent.mbContent
  const accordionImage =
    data.wpPage?.mediaBuyingFields?.mediaBuyingGrid?.gridContent.mbImage

  return (
    <Layout>
      <Seo post={data.wpPage} />
      <GenericHero title={aboutPageTitle} image={aboutPageHeroImage} isSmall />
      <PrimaryCTA items={ctaItems} link={ctaLink} ctaText={ctaText} />
      <TextImageBlock
        title={heroTitle}
        content={heroDescription}
        image={heroImage}
        isSmall
        isLeft
      />
      <AccordionGrid
        grid={accordionArray}
        title={accordionTitle}
        content={accordionContent}
        image={accordionImage}
      />
    </Layout>
  )
}
export default MediaBuying
export const mediaBuyingPageQuery = graphql`
  query GET_MEDIA_PAGE {
    wpPage(title: { eq: "Media Buying" }) {
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
      mediaBuyingFields {
        mediaBuyingHero {
          title
          backgroundImage {
            localFile {
              childImageSharp {
                gatsbyImageData(
                  quality: 90
                  formats: [AVIF, WEBP, PNG]
                  layout: CONSTRAINED
                  placeholder: BLURRED
                )
              }
            }
          }
        }
        textImageSection {
          textAboutDescription
          textAboutTitle
          textAboutImage {
            localFile {
              childImageSharp {
                gatsbyImageData(
                  quality: 90
                  formats: [AVIF, WEBP, PNG]
                  layout: CONSTRAINED
                  placeholder: BLURRED
                )
              }
            }
          }
        }

        mediaBuyingGrid {
          gridContent {
            mbTitle
            mbContent
            mbImage {
              localFile {
                childImageSharp {
                  gatsbyImageData(
                    quality: 90
                    height: 200
                    formats: [AVIF, WEBP, PNG]
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
