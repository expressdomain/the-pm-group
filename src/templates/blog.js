import { Container, Box, Heading } from "@chakra-ui/react"
import Seo from "gatsby-plugin-wpgraphql-seo"
import React from "react"
import { Breadcrumb } from "gatsby-plugin-breadcrumb"
import Layout from "../components/Layout/Layout"
import "gatsby-plugin-breadcrumb/gatsby-plugin-breadcrumb.css"
import BlogGrid from "../components/BlogGrid"
import { graphql } from "gatsby"

const BlogPage = ({ data, pageContext }) => {
  const { title, slug, seo, content, related_posts } = data.wpPost

  const { breadcrumb } = pageContext

  // Replace all instances of '"/"' in seo.schema.raw with '"https://thepmgrp.com/"'
  const schemaRaw = seo.schema.raw.replace(/"\/"/g, '"https://thepmgrp.com/"')

  let schemaObj = JSON.parse(schemaRaw)

  // Modify breadcrumb list
  const breadcrumbList = schemaObj["@graph"][4]
  breadcrumbList["@context"] = "https://schema.org"
  delete breadcrumbList["@id"]
  // Home
  breadcrumbList["itemListElement"][0].item = {
    "@id": `${breadcrumbList["itemListElement"][0].item}`,
    name: "Home",
  }
  delete breadcrumbList["itemListElement"][0].name
  // News
  breadcrumbList["itemListElement"][1].item = {
    "@id": "https://thepmgrp.com/news/",
    name: "News",
  }
  delete breadcrumbList["itemListElement"][1].name
  // Article
  breadcrumbList["itemListElement"].push({
    "@type": "ListItem",
    position: 3,
    item: { "@id": `https://thepmgrp.com/news/${slug}/`, name: title },
  })

  seo.schema.raw = JSON.stringify(schemaObj)
  seo.metaRobotsNoindex = "index"
  seo.metaRobotsNofollow = "follow"

  return (
    <Layout>
      <Seo post={{ seo }} />
      <Container py={8}>
        <Breadcrumb
          location={breadcrumb.location}
          crumbLabel={title}
          crumbSeparator="/"
          crumbs={breadcrumb.crumbs}
        />
        <Heading as="h1" mb={4} color="black">
          {title}
        </Heading>

        <Box
          className="blog-content"
          dangerouslySetInnerHTML={{ __html: content }}
          color="black"
          sx={{
            a: { color: "blue.500", textDecoration: "underline" },
            li: { marginLeft: "35px" },
          }}
        />
        {related_posts.nodes.length > 0 && (
          <>
            <Heading as="h2" mt={8}>
              Related Posts
            </Heading>
            <BlogGrid posts={related_posts.nodes} />
          </>
        )}
      </Container>
    </Layout>
  )
}

export default BlogPage

export const relatedPostsQuery = graphql`
  query BlogPage($id: String!) {
    wpPost(id: { eq: $id }) {
      content
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
      related_posts {
        nodes {
          categories {
            nodes {
              name
            }
          }
          title
          slug
          featuredImage {
            node {
              srcSet
              sourceUrl
            }
          }
        }
      }
    }
  }
`
