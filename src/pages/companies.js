import * as React from "react"
import Layout from "../components/Layout/Layout"
import { graphql } from "gatsby"
import Seo from "gatsby-plugin-wpgraphql-seo"
import GenericHero from "../components/GenericHero"
import { ctaItems, ctaLink, ctaText } from "../constants/cta"
import PrimaryCTA from "../components/PrimaryCTA"
import CompanyItems from "../components/CompanyItems"

const CompaniesPage = ({ data: { wpPage } }) => {
  // Hero Fields
  const heroTitle = wpPage.ourCompaniesFields.companiesHero.title
  const heroImage =
    wpPage.ourCompaniesFields.companiesHero.image.localFile.childImageSharp
  // Companies
  const companies = wpPage.ourCompaniesFields.companiesItems.items

  return (
    <Layout>
      <Seo post={wpPage} />
      <GenericHero title={heroTitle} image={heroImage} />
      <PrimaryCTA items={ctaItems} link={ctaLink} ctaText={ctaText} />
      <CompanyItems companies={companies} />
    </Layout>
  )
}

export default CompaniesPage

export const companiesPageQuery = graphql`
  query GET_COMPANIES_PAGE {
    wpPage(title: { eq: "Companies" }) {
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
      ourCompaniesFields {
        companiesHero {
          image {
            localFile {
              childImageSharp {
                gatsbyImageData(
                  quality: 90
                  placeholder: BLURRED
                  layout: CONSTRAINED
                  formats: [AVIF, WEBP]
                )
              }
            }
          }
          title
        }
        companiesItems {
          items {
            description
            image {
              localFile {
                childImageSharp {
                  gatsbyImageData(
                    quality: 90
                    placeholder: BLURRED
                    layout: CONSTRAINED
                    formats: [AVIF, WEBP]
                  )
                }
              }
            }
            link
            name
          }
        }
      }
    }
  }
`
