import Seo from "gatsby-plugin-wpgraphql-seo"
import React from "react"
import GenericHero from "../components/GenericHero"
import Layout from "../components/Layout/Layout"
import { ctaItems, ctaLink, ctaText } from "../constants/cta"
import PrimaryCTA from "../components/PrimaryCTA"
import { graphql } from "gatsby"
import { Container, Heading, Box } from "@chakra-ui/react"

const LeadershipTemplate = ({ data }) => {
  const { heroPic, name, position, bio } = data.wpLeader.leaderFields
  const { title, seo } = data.wpLeader
  return (
    <Layout>
      <Seo post={{ seo }} />
      <GenericHero title={title} image={heroPic.localFile.childImageSharp} />
      <PrimaryCTA items={ctaItems} link={ctaLink} ctaText={ctaText} />
      <Container py={4}>
        {name && (
          <Heading tag="h2" color="black">
            {name}
          </Heading>
        )}
        {position && (
          <Heading tag="h2" fontSize="xl">
            {position}
          </Heading>
        )}
        {bio && <Box my={4} dangerouslySetInnerHTML={{ __html: bio }} />}
      </Container>
    </Layout>
  )
}

export default LeadershipTemplate

export const leaderQuery = graphql`
  query LeaderQuery($slug: String!) {
    wpLeader(slug: { eq: $slug }) {
      title
      seo {
        breadcrumbs {
          text
          url
        }
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
          raw
        }
      }
      leaderFields {
        bio
        name
        position
        heroPic {
          localFile {
            childImageSharp {
              gatsbyImageData(
                quality: 90
                layout: CONSTRAINED
                formats: [WEBP, PNG]
                placeholder: BLURRED
              )
            }
          }
        }
      }
    }
  }
`
