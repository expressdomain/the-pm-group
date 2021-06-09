import * as React from "react"
import Layout from "../components/Layout/Layout"
import { graphql } from "gatsby"

import { Container, Text, Box } from "@chakra-ui/react"

import Seo from "gatsby-plugin-wpgraphql-seo"
import AboutIconGrid from "../components/AboutIconGrid"
// import AboutTeamGrid from "../components/AboutTeamGrid"

const AboutPage = ({ data: { wpPage } }) => {
    // About Hero Fields :
    const aboutTitle = wpPage.aboutFields.aboutHero.aboutTitle
    // About Icon Array Fields :
    const aboutIconArray = wpPage.aboutFields.aboutGrid.aboutEntry
    // About Team Hero
    const aboutTeamTitle = wpPage.aboutFields.aboutTeamHero.aboutTeamHeroTitle
    // About Team Repeater
    // const teamRepeater = wpPage.aboutFields.aboutTeamHero

    return(
    <Layout>
        <Seo post={wpPage} />
        <Box className="aboutHeroWrapper heroWrapper" my={20} style={{ textAlign: `center` }}>
            <Text style={{ 
                color: `#2e2e2e`, 
                textAlign: `center`, 
                textTransform: `uppercase`,
                fontSize: `68px`,
                lineHeight: `1.02941176em`,
                fontFamily: `Montserrat` }} tag="h1">{aboutTitle}</Text>
        </Box>
        <AboutIconGrid iconGrid={aboutIconArray} />
        <Box className="aboutTeamTitleWrapper" style={{ 
            backgroundColor: `#16171d`, 
            width: `100%`, 
            textAlign: `center` }} my={10}>
            <Box className="aboutTeamTitleInner">
                <Text tag="h2" py={10} style={{ 
                    textTransform: `uppercase`, 
                    color: `#ffc529`, 
                    fontSize: `34px` }}>{aboutTeamTitle}</Text>
            </Box>
        </Box>
        {/* <AboutTeamGrid team={teamRepeater} /> */}
    </Layout>
    )
}

export default AboutPage

export const aboutPageQuery = graphql`
query GET_ABOUT_PAGE {
wpPage(title: {eq: "About"} ) {
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
                formats: WEBP
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
          icon
          title
        }
      }
      aboutTeamHero {
        aboutTeamHeroTitle
        aboutTeamHeroImage {
          localFile {
            childImageSharp {
              gatsbyImageData(
                quality: 90
                formats: WEBP
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
                  formats: WEBP
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