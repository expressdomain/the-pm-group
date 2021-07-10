import React from "react"
import Layout from "../components/Layout/Layout"
import { graphql } from "gatsby"
import Seo from "gatsby-plugin-wpgraphql-seo"
import { Text, Container, Box } from "@chakra-ui/react"

const ThankYouPage = ({ data }) => {
  return (
    <Layout>
      <Seo post={data?.wpPage} />
      <Container>
        <Box
          py={40}
          display="grid"
          placeItems="center"
          dangerouslySetInnerHTML={{ __html: data?.wpPage.content }}
        />
      </Container>
    </Layout>
  )
}

export default ThankYouPage

export const thankYouPageQuery = graphql`
  query GET_THANK_YOU_PAGE {
    wpPage(title: { eq: "Thank You" }) {
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
      title
      content
    }
  }
`
