import * as React from "react"
import Layout from "../components/Layout/Layout"
import { graphql } from "gatsby"

import Seo from "gatsby-plugin-wpgraphql-seo"
import GenericHero from "../components/GenericHero"
import ContactForm from "../components/ContactForm"

const ContactUs = ({ data: { wpPage } }) => {
  // Hero component
  const heroTitle = wpPage.contactPageFields.contactHero.contactHeroTitle
  const heroImage =
    wpPage.contactPageFields.contactHero.contactHeroImage.localFile
      .childImageSharp
  // Contact form
  // const form = gfForm
  const contact = wpPage.contactPageFields.contactSectionPage

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
  return (
    <Layout>
      <Seo post={wpPage} />
      <GenericHero title={heroTitle} image={heroImage} />
      <ContactForm contactData={contact} isContactPage />
    </Layout>
  )
}

export default ContactUs

export const contactPageQuery = graphql`
  query GET_CONTACT_PAGE {
    wpPage(title: { eq: "Contact Us" }) {
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
      contactPageFields {
        contactHero {
          contactHeroTitle
          contactHeroImage {
            localFile {
              childImageSharp {
                gatsbyImageData(
                  quality: 90
                  placeholder: BLURRED
                  layout: CONSTRAINED
                  formats: [WEBP, PNG]
                )
              }
            }
          }
        }
        contactSectionPage {
          blurb
          body
          email
          name
          phoneNumber
          position
          title
          franPhoto {
            localFile {
              childImageSharp {
                gatsbyImageData(
                  quality: 90
                  placeholder: BLURRED
                  layout: CONSTRAINED
                  formats: [WEBP, PNG]
                )
              }
            }
          }
        }
      }
    }
  }
`
