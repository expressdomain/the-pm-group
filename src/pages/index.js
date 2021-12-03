import * as React from "react"
import Layout from "../components/Layout/Layout"
import { graphql } from "gatsby"

import Seo from "gatsby-plugin-wpgraphql-seo"
import Hero from "../components/Hero/Hero"
// Loadable Components:
import loadable from "@loadable/component"
import PrimaryCTA from "../components/PrimaryCTA"
import TextImageBlock from "../components/TextImageBlock"
// Loadable Components:
const Features = loadable(() => import("../components/Features"))
const ParallaxCTA = loadable(() => import("../components/ParallaxCTA"))
const ContactForm = loadable(() => import("../components/ContactForm"))
const CompaniesGrid = loadable(() => import("../components/CompaniesGrid"))

// import Features from "../components/Features"
// import ParallaxCTA from "../components/ParallaxCTA"
// import ContactForm from "../components/ContactForm"
// import CompaniesGrid from "../components/CompaniesGrid"

const IndexPage = ({ data: { wpPage } }) => {
  // Hero Fields
  const heroTitle = wpPage?.homeFields?.headline
  const heroCaption = wpPage?.homeFields?.subcaption
  const slides = wpPage?.homeFields?.hero?.slider
  //  Primary CTA Fields :
  const ctaItems = wpPage?.homeFields?.primaryCta?.primaryCtaFields
  const ctaLink = wpPage?.homeFields?.primaryCta?.ctaLink.url
  const ctaText = wpPage?.homeFields?.primaryCta?.ctaText
  // TextImageBlock 1 Fields:
  const aboutTitle = wpPage?.homeFields?.aboutSection?.title
  const aboutContent = wpPage?.homeFields?.aboutSection?.content
  const aboutImage = wpPage?.homeFields?.aboutSection?.image
  // Features/Services:
  const services = wpPage?.homeFields?.services
  // Parallax CTA:
  const secondaryCTAText = wpPage?.homeFields?.secondaryCta?.title
  const secondaryCTAImage = wpPage?.homeFields?.secondaryCta?.image
  // How we got here:
  const gotHereTitle = wpPage?.homeFields?.howWeGotHere?.title
  const gotHereText = wpPage?.homeFields?.howWeGotHere?.content
  const gotHereImage = wpPage?.homeFields?.howWeGotHere?.image
  // Contact Section
  const contactInfo = wpPage?.homeFields?.contactSection
  // const form = gfForm
  // Companies Section
  const companies = wpPage?.homeFields?.companies
  // Custom Schema
  const schema = wpPage?.customSchema.customSchema
  // Modify wpPage.seo.metaRobotsNoindex, wpPage.seo.metaRobotsNofollow to be index, follow respectively
  wpPage.seo.metaRobotsNoindex = "index"
  wpPage.seo.metaRobotsNofollow = "follow"

  return (
    <Layout>
      {schema && <div dangerouslySetInnerHTML={{ __html: schema }} />}
      {wpPage.seo && <Seo post={wpPage} />}
      <Hero
        // image={getImage(heroImage.localFile.childImageSharp)}
        alt={heroTitle}
        title={heroTitle}
        caption={heroCaption}
        slides={slides}
      />
      <PrimaryCTA items={ctaItems} link={ctaLink} ctaText={ctaText} />
      <TextImageBlock
        title={aboutTitle}
        content={aboutContent}
        image={aboutImage}
        isSmall
      />
      <Features features={services} />
      <ParallaxCTA text={secondaryCTAText} image={secondaryCTAImage} />
      <TextImageBlock
        title={gotHereTitle}
        content={gotHereText}
        image={gotHereImage}
        isSmall
      />
      <ContactForm contactData={contactInfo} />
      <CompaniesGrid companies={companies} />
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
      customSchema {
        customSchema
      }
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
          slider {
            caption
            title
            image {
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
            link {
              url
              target
            }
          }
        }
        companies {
          backgroundImage {
            localFile {
              childImageSharp {
                gatsbyImageData(
                  formats: [WEBP, PNG]
                  quality: 90
                  placeholder: BLURRED
                  layout: CONSTRAINED
                )
              }
            }
          }
          companyItem {
            companyLink
            companyImage {
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
        howWeGotHere {
          content
          title
          image {
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
        primaryCta {
          ctaLink {
            url
          }
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
                  formats: [WEBP, PNG]
                  layout: CONSTRAINED
                  placeholder: BLURRED
                )
              }
            }
          }
        }
        subcaption
        services {
          ctaLink {
            url
          }
          ctaText
          serviceEntry {
            content
            icon
            title
          }
        }
        headline
        aboutSection {
          title
          content
          image {
            localFile {
              childImageSharp {
                gatsbyImageData(
                  quality: 90
                  formats: [WEBP, PNG]
                  layout: CONSTRAINED
                  placeholder: BLURRED
                )
              }
              childrenImageSharp {
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
        contactSection {
          body
          fieldGroupName
          title
          name
          position
          phoneNumber
          email
          blurb
          franPhoto {
            localFile {
              childImageSharp {
                gatsbyImageData(
                  quality: 90
                  placeholder: BLURRED
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
