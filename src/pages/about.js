import * as React from "react"
import Layout from "../components/Layout/Layout"
import { graphql } from "gatsby"

import { Text, Box } from "@chakra-ui/react"

import Seo from "gatsby-plugin-wpgraphql-seo"
import AboutTeamGrid from "../components/AboutTeamGrid"
import GenericHero from "../components/GenericHero"
import PrimaryCTA from "../components/PrimaryCTA"
import { ctaItems, ctaLink, ctaText } from "../constants/cta"
import Features from "../components/Features"

const AboutPage = ({ data: { wpPage } }) => {
  // About Hero Fields :
  const aboutHero =
    wpPage.aboutFields.aboutHero.aboutBackgroundImage.localFile.childImageSharp
  const aboutTitle = wpPage.aboutFields.aboutHero.aboutTitle
  // About Icon Array Fields :
  const aboutIconArray = wpPage.aboutFields.aboutGrid.aboutEntry
  // About Team Hero
  const aboutTeamTitle = wpPage.aboutFields.aboutTeamHero.aboutTeamHeroTitle
  // About Team Repeater
  const teamRepeater = wpPage.aboutFields.aboutTeam.aboutImageRepeater

  return (
    <Layout>
      <Seo post={wpPage} />
      <GenericHero title={aboutTitle} image={aboutHero} isSmall />
      <PrimaryCTA items={ctaItems} link={ctaLink} ctaText={ctaText} />
      <Features features={aboutIconArray} isAbout />
      <Box
        className="aboutTeamTitleWrapper"
        backgroundColor="black"
        width={`100%`}
        textAlign="center"
        mt={10}
      >
        <Box className="aboutTeamTitleInner">
          <Text
            tag="h2"
            py={10}
            textTransform="uppercase"
            color="secondary"
            fontSize={['xl','2xl','3xl']}
          >
            {aboutTeamTitle}
          </Text>
        </Box>
      </Box>

      <AboutTeamGrid team={teamRepeater} />
    </Layout>
  )
}

export default AboutPage

export const aboutPageQuery = graphql`
  query GET_ABOUT_PAGE {
    wpPage(title: { eq: "About" }) {
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
      aboutFields {
        aboutHero {
          aboutTitle
          aboutBackgroundImage {
            localFile {
              childImageSharp {
                gatsbyImageData(
                  quality: 90
                  formats: [ WEBP, PNG]
                  layout: CONSTRAINED
                  placeholder: BLURRED
                )
              }
            }
          }
        }
        aboutGrid {
          aboutEntry {
            content
            title
            icon
          }
        }
        aboutTeamHero {
          aboutTeamHeroTitle
          aboutTeamHeroImage {
            localFile {
              childImageSharp {
                gatsbyImageData(
                  quality: 90
                  formats: [ WEBP, PNG]
                  layout: CONSTRAINED
                  placeholder: BLURRED
                )
              }
            }
          }
        }
        aboutTeam {
          aboutImageRepeater {
            teamJobTitle
            teamName
            teamLink {
              title
              url
            }
            teamImage {
              localFile {
                childImageSharp {
                  gatsbyImageData(
                    quality: 90
                    formats: [ WEBP, PNG]
                    layout: CONSTRAINED
                    placeholder: BLURRED
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
