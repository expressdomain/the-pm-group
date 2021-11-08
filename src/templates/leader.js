import Seo from "gatsby-plugin-wpgraphql-seo"
import React from "react"
import GenericHero from "../components/GenericHero"
import Layout from "../components/Layout/Layout"
import { ctaItems, ctaLink, ctaText } from "../constants/cta"
import PrimaryCTA from "../components/PrimaryCTA"
import { graphql } from "gatsby"
import { Container, Heading, Box } from "@chakra-ui/react"

const LeadershipTemplate = ({ data }) => {
  const {
    heroPic,
    name: personName,
    position,
    bio,
  } = data.wpLeader.leaderFields
  const { title, seo, slug } = data.wpLeader

  // Replace all instances of '"/"' in seo.schema.raw with '"https://thepmgrp.com/"'
  const schemaRaw = seo.schema.raw.replace(/"\/"/g, '"https://thepmgrp.com/"')
  // Replace all instances of '/leaders/' with an '/'
  const schemaRawClean = schemaRaw.replace(/\/leaders\//g, "/")
  // Initalize schema object
  let schemaObj = JSON.parse(schemaRawClean)
  // Modify breadcrumb list
  const breadcrumbList = schemaObj["@graph"][3]
  // Home
  breadcrumbList["itemListElement"][0].item = {
    "@id": `${breadcrumbList["itemListElement"][0].item}`,
    name: "Home",
  }

  // breadcrumbList["itemListElement"][0].splice(2, 2)

  const { name, ...breadcrumbListRest } = breadcrumbList["itemListElement"][0]
  breadcrumbList["itemListElement"][0] = breadcrumbListRest
  // About
  breadcrumbList["itemListElement"][1].item = {
    "@id": `https://thepmgrp.com/${slug}/`,
    name: title,
  }
  // Destructure Object Instead of using delete
  const { name: newName, ...breadcrumbListRest1 } = breadcrumbList[
    "itemListElement"
  ][1]
  // Set Destructured Object as equal to what we're trying to change
  breadcrumbList["itemListElement"][1] = breadcrumbListRest1
  // Delete last item in breadCrumbList Until we refactor leadership pages
  breadcrumbList.itemListElement.pop()
  seo.schema.raw = JSON.stringify(schemaObj)
  seo.metaRobotsNoindex = "index"
  seo.metaRobotsNofollow = "follow"

  return (
    <Layout>
      <Seo post={{ seo }} />
      <GenericHero title={title} image={heroPic.localFile.childImageSharp} />
      <PrimaryCTA items={ctaItems} link={ctaLink} ctaText={ctaText} />
      <Container py={4}>
        {personName && (
          <Heading tag="h2" color="black">
            {personName}
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
      slug
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
