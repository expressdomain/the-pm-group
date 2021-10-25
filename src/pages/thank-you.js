import React from "react"
import Layout from "../components/Layout/Layout"
import { graphql } from "gatsby"
import Seo from "gatsby-plugin-wpgraphql-seo"
import { Box } from "@chakra-ui/react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Fade from "react-reveal/Fade"

const ThankYouPage = ({ data }) => {
  const thankYouPageTitle = data.wpPage?.title
  const thankYouHeroImage =
    data.wpPage?.featuredImage?.node?.localFile.childImageSharp

  return (
    <Layout>
      <Seo post={data?.wpPage} />
      <Box position={`relative`} display="grid" placeItems="center">
        <Box style={{ gridArea: "1/1" }} zIndex={4}>
          <Fade bottom>
            <Box
              py={4}
              px={4}
              display="grid"
              placeItems="center"
              sx={{
                color: "white",
                textTransform: "uppercase",
                h1: {
                  fontSize: { base: "2.4rem", md: "3rem" },
                  fontWeight: "800",
                  lineHeight: { base: "1.2", md: "1.5" },
                  margin: { base: "1rem auto", md: "auto" },
                },
                p: {
                  fontSize: { base: "1.2rem", md: "1.6rem" },
                },
              }}
              dangerouslySetInnerHTML={{ __html: data?.wpPage.content }}
            />
          </Fade>
        </Box>
        {thankYouHeroImage && thankYouPageTitle && (
          <GatsbyImage
            image={getImage(thankYouHeroImage)}
            alt={thankYouPageTitle}
            style={{
              gridArea: "1/1",
              height: "100%",
              minWidth: "100%",
            }}
          />
        )}
      </Box>
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
      featuredImage {
        node {
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
`
