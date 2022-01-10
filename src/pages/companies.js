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

  if (wpPage.seo) {
    // Replace all instances of '"/"' in seo.schema.raw with '"https://thepmgrp.com/"'
    const schemaRaw = wpPage.seo.schema.raw.replace(
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
    // Companies
    breadcrumbList["itemListElement"][1].item = {
      "@id": `https://thepmgrp.com/${wpPage.slug}/`,
      name: wpPage.title,
    }
    delete breadcrumbList["itemListElement"][1].name

    wpPage.seo.schema.raw = JSON.stringify(schemaObj)
    wpPage.seo.metaRobotsNoindex = "index"
    wpPage.seo.metaRobotsNofollow = "follow"
  }

  return (
    <Layout>
      {wpPage.seo && <Seo post={wpPage} />}
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
      slug
      ourCompaniesFields {
        companiesHero {
          image {
            localFile {
              childImageSharp {
                gatsbyImageData(
                  quality: 90
                  placeholder: NONE
                  layout: CONSTRAINED
                  formats: [WEBP, PNG]
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
                    placeholder: NONE
                    layout: CONSTRAINED
                    formats: [WEBP, PNG]
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
