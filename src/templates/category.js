import { Box, Container, Grid, Heading } from "@chakra-ui/react"
import Seo from "gatsby-plugin-wpgraphql-seo"
import React from "react"
import Layout from "../components/Layout/Layout"
import { graphql } from "gatsby"
import WorkItem from "../components/WorkItem"
import Fade from "react-reveal/Fade"

const Category = ({ data }) => {
  // SEO & Data Object
  const { seo, name, description, customSchema: schema, slug } = data.wpCategory

  const { nodes: works } = data.allWpWork
  if (seo) {
    // Replace all instances of '"/"' in seo.schema.raw with '"https://thepmgrp.com/"'
    const schemaRaw = seo.schema.raw.replace(/"\/"/g, '"https://thepmgrp.com/"')
    // Raplace all instances of 'category' in schemaRaw with 'our-work'
    const schemaRawReplaced = schemaRaw.replace(/category/g, "our-work")
    const schemaObject = JSON.parse(schemaRawReplaced)
    const breadcrumbList = schemaObject["@graph"][3]
    breadcrumbList["@context"] = "https://schema.org"
    delete breadcrumbList["@id"]
    // Home
    breadcrumbList["itemListElement"][0].item = {
      "@id": `${breadcrumbList["itemListElement"][0].item}`,
      name: "Home",
    }
    delete breadcrumbList["itemListElement"][0].name
    // Our Work
    breadcrumbList["itemListElement"][1].item = {
      "@id": "https://thepmgrp.com/our-work/",
      name: "Our Work",
    }
    delete breadcrumbList["itemListElement"][1].name
    // Work Category
    breadcrumbList["itemListElement"].push({
      "@type": "ListItem",
      position: 3,
      item: { "@id": `https://thepmgrp.com/our-work/${slug}/`, name: name },
    })

    seo.schema.raw = JSON.stringify(schemaObject)
    seo.metaRobotsNoindex = "index"
    seo.metaRobotsNofollow = "follow"
  }

  return (
    <Layout>
      {seo && <Seo post={{ seo }} />}
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
                  placeholder: NONE
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
                  placeholder: NONE
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
                  placeholder: NONE
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
          raw
        }
      }
      customSchema {
        customSchema
      }
    }
  }
`
