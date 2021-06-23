import * as React from "react"
import { Box, Text } from "@chakra-ui/layout"
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
  const form = gfForm
  const contact = wpPage.contactPageFields.contactSectionPage
  return (
    <Layout>
      <Seo post={wpPage} />
      <GenericHero title={heroTitle} image={heroImage} />
      <ContactForm contactData={contact} form={form} isContactPage />
    </Layout>
  )
}

export default ContactUs

export const contactPageQuery = graphql`
  query GET_CONTACT_PAGE {
    gfForm(formId: { eq: 1 }) {
      ...GravityFormComponent
      id
      slug
      title
      formId
      formFields {
        id
        label
        labelPlacement
        description
        descriptionPlacement
        type
        choices
        errorMessage
        inputMaskValue
        inputName
        isRequired
        visibility
        cssClass
        defaultValue
        maxLength
        conditionalLogic
        emailConfirmEnabled
      }
      button {
        imageUrl
        text
      }
      confirmations {
        message
      }
    }
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
                  formats: WEBP
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
                  formats: WEBP
                )
              }
            }
          }
        }
      }
    }
  }
`
