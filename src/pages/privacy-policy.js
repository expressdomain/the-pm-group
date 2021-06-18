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

  return (
    <Layout>
      <Seo post={wpPage} />
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
