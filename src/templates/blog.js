import { Container, Box, Heading } from "@chakra-ui/react"
import Seo from "gatsby-plugin-wpgraphql-seo"
import React from "react"
import { Breadcrumb } from "gatsby-plugin-breadcrumb"
import Layout from "../components/Layout/Layout"
import "gatsby-plugin-breadcrumb/gatsby-plugin-breadcrumb.css"
import BlogGrid from "../components/BlogGrid"
import { graphql } from "gatsby"

const BlogPage = data => {
  const { title, seo, content, location, breadcrumb } = data.pageContext

  const { related_posts } = data.data.allWpPost.nodes[0]
  return (
    <Layout>
      <Seo post={{ seo }} />
      <Container py={8}>
      <Breadcrumb
          location={location}
          crumbLabel={title}
          crumbSeparator="/"
          crumbs={breadcrumb.crumbs}
        />
        <Heading as="h1" mb={4} color="black">
          {title}
        </Heading>

        <Box dangerouslySetInnerHTML={{ __html: content }} />
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
    allWpPost(filter: { id: { eq: $id } }) {
      nodes {
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
                localFile {
                  childImageSharp {
                    gatsbyImageData(
                      layout: CONSTRAINED
                      formats: [WEBP, PNG]
                      quality: 90
                      aspectRatio: 1.66
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
  }
`
