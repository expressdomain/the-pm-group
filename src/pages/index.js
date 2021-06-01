import * as React from "react"
import Layout from "../components/Layout/Layout"
import { graphql } from "gatsby"
import { getImage } from "gatsby-plugin-image"

import Seo from "gatsby-plugin-wpgraphql-seo"
import Hero from "../components/Hero/Hero"
import PrimaryCTA from "../components/PrimaryCTA"
import TextImageBlock from "../components/TextImageBlock"

const IndexPage = ({ data: { wpPage } }) => {
  // Hero Fields
  const heroImage = wpPage.homeFields.hero.heroImages[0].image
  const heroTitle = wpPage.homeFields.headline
  const heroCaption = wpPage.homeFields.subcaption
  //  Primary CTA Fields :
  const ctaItems = wpPage.homeFields.primaryCta.primaryCtaFields
  const ctaLink = wpPage.homeFields.primaryCta.ctaLink
  const ctaText = wpPage.homeFields.primaryCta.ctaText
  // TextImageBlock 1 Fields:
  const aboutTitle = wpPage.homeFields.about.title
  const aboutContent = wpPage.homeFields.about.content
  const aboutImage = wpPage.homeFields.about.image
  return (
    <Layout>
      <Seo post={wpPage} />
      <Hero
        image={getImage(heroImage.localFile.childImageSharp)}
        alt={heroTitle}
        title={heroTitle}
        caption={heroCaption}
      />
      <PrimaryCTA items={ctaItems} link={ctaLink} ctaText={ctaText} />
      <TextImageBlock
        title={aboutTitle}
        content={aboutContent}
        image={aboutImage}
      />
    </Layout>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query GET_PAGE {
    wpPage(title: { eq: "Home" }) {
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
      homeFields {
        hero {
          heroImages {
            link
            title
            image {
              localFile {
                childImageSharp {
                  gatsbyImageData(
                    quality: 90
                    formats: WEBP
                    layout: FULL_WIDTH
                    placeholder: BLURRED
                  )
                }
              }
              description
            }
          }
        }
        howWeGotHere {
          content
          image {
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
        primaryCta {
          ctaLink
          ctaText
          primaryCtaFields {
            title
            link
          }
        }
        secondaryCta {
          title
          link
          image {
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
        subcaption
        services {
          ctaLink
          ctaText
        }
        headline
        about {
          title
          content
          image {
            localFile {
              childImageSharp {
                gatsbyImageData(
                  quality: 90
                  formats: WEBP
                  layout: CONSTRAINED
                  placeholder: BLURRED
                )
              }
              childrenImageSharp {
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
`
