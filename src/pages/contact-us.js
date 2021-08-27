import * as React from "react"
import Layout from "../components/Layout/Layout"
import { graphql } from "gatsby"

import Seo from "gatsby-plugin-wpgraphql-seo"
import GenericHero from "../components/GenericHero"
import ContactForm from "../components/ContactForm"

const ContactUs = ({ data: { wpPage, gfForm } }) => {
  // Hero component
  const heroTitle = wpPage.contactPageFields.contactHero.contactHeroTitle
  const heroImage =
    wpPage.contactPageFields.contactHero.contactHeroImage.localFile
      .childImageSharp
  // Contact form
  // const form = gfForm
  // const contact = wpPage.contactPageFields.contactSectionPage
  return (
    <Layout>
      <Seo post={wpPage} />
      <GenericHero title={heroTitle} image={heroImage} />
      <ContactForm isContactPage />
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
