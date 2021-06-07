import * as React from "react"
import Layout from "../components/Layout/Layout"
import { graphql } from "gatsby"

import Seo from "gatsby-plugin-wpgraphql-seo"
import CTA from "../components/CTA"

const ExpertisePage = ({ data: { wpPage } }) => {
    // Hero Fields :
    const heroImage = wpPage.expertiseFields.expertiseHero.expertiseHeroImage
    const heroTitle = wpPage.expertiseFields.expertiseHero.title
    //  Primary CTA Fields :

    return(
        <Layout>
            <Seo post={wpPage} />
            <section className="expertiseHeroWrapper heroWrapper">
                <h1 style={{ 
                color: `#2e2e2e`, 
                textAlign: `center`, 
                textTransform: `uppercase`,
                fontSize: `68px`,
                lineHeight: `1.02941176em`,
                fontFamily: `Montserrat` }}>{heroTitle}</h1>
            </section>
            <CTA />
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