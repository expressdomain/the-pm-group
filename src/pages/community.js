import * as React from "react"
import Layout from "../components/Layout/Layout"
import { graphql } from "gatsby"
import { Text, Box } from "@chakra-ui/react"

import Seo from "gatsby-plugin-wpgraphql-seo"
import GenericHero from "../components/GenericHero"
import { ctaItems, ctaLink, ctaText } from "../constants/cta"
import PrimaryCTA from "../components/PrimaryCTA"
import TextImageBlock from "../components/TextImageBlock"
import ClientList from "../components/ClientList"
import CommunityGrid from "../components/CommunityGrid"

const CommunityPage = ({ data }) => {
  // Hero Fields:
  const heroTitle = data.wpPage.communityFields?.communityHero.title
  const heroImage =
    data.wpPage.communityFields?.communityHero.image.localFile.childImageSharp
  // Text Image Block:
  const aboutTitle = data.wpPage.communityFields?.about.title
  const aboutContent = data.wpPage.communityFields?.about.content
  const aboutImage = data.wpPage.communityFields?.about.image
  // Parallax CTA:
  const dividerTitle = data.wpPage.communityFields?.bannerDivider.title
  // Charities:
  const charities = data.wpPage.communityFields?.charities.charityList
  // Community Image Grid:
  const communityImages = data.wpPage.communityFields?.imageGrid.gridImages

  // Replace all instances of '"/"' in seo.schema.raw with '"https://thepmgrp.com/"'
  const schemaRaw = data.wpPage.seo.schema.raw.replace(
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
  // About
  breadcrumbList["itemListElement"][1].item = {
    "@id": `https://thepmgrp.com/${data.wpPage.slug}/`,
    name: data.wpPage.title,
  }
  delete breadcrumbList["itemListElement"][1].name

  data.wpPage.seo.schema.raw = JSON.stringify(schemaObj)
  data.wpPage.seo.metaRobotsNoindex = "index"
  data.wpPage.seo.metaRobotsNofollow = "follow"

  return (
    <Layout>
      <Seo post={data.wpPage} />
      <GenericHero title={heroTitle} image={heroImage} />
      <PrimaryCTA items={ctaItems} link={ctaLink} ctaText={ctaText} />
      <TextImageBlock
        title={aboutTitle}
        content={aboutContent}
        image={aboutImage}
        isSmall
      />
      <CommunityGrid images={communityImages} />
      <Box
        className="aboutTeamTitleWrapper"
        backgroundColor="black"
        width={`100%`}
        textAlign="center"
      >
        <Box className="aboutTeamTitleInner">
          <Text
            tag="h2"
            py={10}
            textTransform="uppercase"
            color="secondary"
            fontSize="3xl"
          >
            {dividerTitle}
          </Text>
        </Box>
      </Box>
      <ClientList clients={charities} />
    </Layout>
  )
}

export default CommunityPage

export const communityPageQuery = graphql`
  query GET_COMMUNITY_PAGE {
    wpPage(title: { eq: "Community" }) {
      title
      uri
      nodeType
      slug
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
      communityFields {
        communityHero {
          title
          image {
            localFile {
              childImageSharp {
                gatsbyImageData(
                  quality: 90
                  placeholder: BLURRED
                  formats: [WEBP, PNG]
                  layout: CONSTRAINED
                )
              }
            }
          }
        }
        about {
          content
          title
          image {
            localFile {
              childImageSharp {
                gatsbyImageData(
                  quality: 90
                  placeholder: BLURRED
                  formats: [WEBP, PNG]
                  layout: CONSTRAINED
                )
              }
            }
          }
        }
        bannerDivider {
          title
        }
        charities {
          charityList {
            link
            name
          }
        }
        imageGrid {
          gridImages {
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
          }
        }
      }
    }
  }
`
