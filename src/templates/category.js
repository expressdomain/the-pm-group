import { Box, Container, Grid, Heading } from "@chakra-ui/react"
import Seo from "gatsby-plugin-wpgraphql-seo"
import React from "react"
import Layout from "../components/Layout/Layout"
import { graphql } from "gatsby"
import WorkItem from "../components/WorkItem"
import Fade from "react-reveal/Fade"

const Category = ({ data }) => {
  // SEO & Data Object
  const { seo, name, description, customSchema: schema } = data.wpCategory

  const { nodes: works } = data.allWpWork

  // Replace all instances of '"/"' in seo.schema.raw with '"https://thepmgrp.com/"'
  const schemaRaw = seo.schema.raw.replace(/"\/"/g, '"https://thepmgrp.com/"')

  seo.schema.raw = schemaRaw
  console.log(seo.schema.raw)

  return (
    <Layout>
      <Seo post={{ seo }} />
      {schema.customSchema && (
        <div dangerouslySetInnerHTML={{ __html: schema.customSchema }} />
      )}
      <Container>
        <Box display="grid" placeItems="center" mt={8}>
          {name && (
            <Heading
              as="h1"
              textAlign="center"
              fontSize={["3xl", "4xl", "6xl"]}
              color="black"
            >
              {name}
            </Heading>
          )}
          {description && (
            <Box
              textAlign="center"
              maxWidth={[700]}
              py={4}
              dangerouslySetInnerHTML={{ __html: description }}
              sx={{ a: { color: "secondary", fontWeight: "bold" } }}
            />
            // <Text textAlign="center" maxWidth={[700]} py={4}>
            //   {description}
            // </Text>
          )}
        </Box>
        <Box>
          <Grid
            gridTemplateColumns={[
              "repeat(1, 1fr)",
              "repeat(2, 1fr)",
              "repeat(2, 1fr)",
            ]}
            py={8}
            gap={3}
          >
            {works.map(item => (
              <Fade bottom key={item.id}>
                <WorkItem
                  title={item.title}
                  type={item.videoFields.videoLink ? "Television" : name}
                  image={
                    item.theWorkImage?.photoLink?.localFile?.childImageSharp ||
                    item.videoFields.videoCoverImage?.localFile
                      .childImageSharp ||
                    item.featuredImage?.node?.localFile?.childImageSharp
                  }
                  media={
                    item.videoFields.videoLink ||
                    item.workAudio.radioClip?.link ||
                    ""
                  }
                />
              </Fade>
            ))}
          </Grid>
        </Box>
      </Container>
    </Layout>
  )
}

export default Category

export const categoryQuery = graphql`
  query CategoryQuery($slug: String!) {
    allWpWork(
      filter: { categories: { nodes: { elemMatch: { slug: { eq: $slug } } } } }
      sort: { fields: menuOrder, order: ASC }
    ) {
      nodes {
        id
        menuOrder
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
        videoFields {
          videoLink
          videoDescription
          videoCoverImage {
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
        workAudio {
          radioClip {
            link
          }
        }
        title
        theWorkImage {
          photoLink {
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
    wpCategory(slug: { eq: $slug }) {
      description
      name
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
          raw
        }
      }
      customSchema {
        customSchema
      }
    }
  }
`
