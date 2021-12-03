import * as React from "react"
import Layout from "../components/Layout/Layout"
import { graphql } from "gatsby"

import Seo from "gatsby-plugin-wpgraphql-seo"
import GenericHero from "../components/GenericHero"
import PolicyContent from "../components/PrivacyPolicyContent"

import { Container, Text, Center } from "@chakra-ui/react"

const PrivacyPolicy = ({ data: { wpPage } }) => {
  // Hero Title
  const privacyTitle = "Privacy Policy"
  // Privacy Policy Date & Description
  const date = wpPage.PrivacyFields.effectiveDate
  const description = wpPage.PrivacyFields.policyDescription
  //  Repeater content
  const policies = wpPage.PrivacyFields.policyContent.policyRepeater

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

  return (
    <Layout>
      {wpPage.seo && <Seo post={wpPage} />}
      <GenericHero title={privacyTitle} />
      <Container>
        <Center my={5}>{date}</Center>
        <Text dangerouslySetInnerHTML={{ __html: description }} />
      </Container>
      <PolicyContent privacy={policies} />
    </Layout>
  )
}

export default PrivacyPolicy

export const privacyPolicyQuery = graphql`
  query GET_PRIVACY_POLICY {
    wpPage(title: { eq: "Privacy Policy" }) {
      uri
      nodeType
      slug
      title
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
      PrivacyFields {
        effectiveDate
        policyDescription
        policyContent {
          policyRepeater {
            sectionTitle
            sectionContent
          }
        }
      }
    }
  }
`
