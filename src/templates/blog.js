import { Container, Box, Heading } from "@chakra-ui/react"
import Seo from "gatsby-plugin-wpgraphql-seo"
import React from "react"
import { Breadcrumb } from "gatsby-plugin-breadcrumb"
import Layout from "../components/Layout/Layout"
import "gatsby-plugin-breadcrumb/gatsby-plugin-breadcrumb.css"
import BlogGrid from "../components/BlogGrid"
import { graphql } from "gatsby"

const BlogPage = ({ data, pageContext }) => {
  const { title, seo, content, location, related_posts } = data.wpPost

  const { breadcrumb } = pageContext

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
          sx={{ a: { color: "blue.500", textDecoration: "underline" } }}
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
