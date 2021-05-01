import * as React from "react"
import { graphql } from "gatsby"
import { getImage } from "gatsby-plugin-image"

import Layout from "../components/Layout/Layout"
import Seo from "gatsby-plugin-wpgraphql-seo"
import Hero from "../components/Hero/Hero"

const IndexPage = ({ data: { wpPage } }) => {
  // Hero Fields
  const heroImage = wpPage.homeFields.hero.heroImages[0].image
  const heroAlt = wpPage.homeFields.hero.heroImages[0].label
  const heroTitle = wpPage.homeFields.headline
  const heroCaption = wpPage.homeFields.subcaption
  return (
    <Layout>
      <Seo post={wpPage} />
      <Hero
        image={getImage(heroImage.localFile.childImageSharp)}
        alt={heroAlt}
        title={heroTitle}
        caption={heroCaption}
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
