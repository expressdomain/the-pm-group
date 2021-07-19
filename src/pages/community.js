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
                  formats: [ WEBP, PNG]
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
                  formats: [ WEBP, PNG]
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
                    formats: [ WEBP, PNG]
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
