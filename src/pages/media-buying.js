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

  // Replace all instances of '"/"' in seo.schema.raw with '"https://thepmgrp.com/"'
  const schemaRaw = data.wpPage.seo.schema.raw.replace(
    /"\/"/g,
    '"https://thepmgrp.com/"'
  )
  // Initalize schema object
  const schemaObj = JSON.parse(schemaRaw)

  // Modify breadcrumb list
  const breadcrumbList = schemaObj["@graph"][3]
  // breadcrumbList["@context"] = "https://schema.org"
  delete breadcrumbList["@id"]
  // Home
  breadcrumbList["itemListElement"][0].item = {
    "@id": `${breadcrumbList["itemListElement"][0].item}`,
    name: "Home",
  }
  delete breadcrumbList["itemListElement"][0].name
  // Media Buying
  breadcrumbList["itemListElement"][1].item = {
    "@id": `https://thepmgrp.com/${data.wpPage.slug}/`,
    name: data.wpPage.title,
  }
  delete breadcrumbList["itemListElement"][1].name

  data.wpPage.seo.schema.raw = JSON.stringify(schemaObj)

  return (
    <Layout>
      <Seo post={data.wpPage} />
      <GenericHero title={aboutPageTitle} image={aboutPageHeroImage} />
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
      slug
      mediaBuyingFields {
        mediaBuyingHero {
          title
          backgroundImage {
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
        textImageSection {
          textAboutDescription
          textAboutTitle
          textAboutImage {
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
    }
  }
`
