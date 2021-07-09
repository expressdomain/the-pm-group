import { Container, Box, Heading } from "@chakra-ui/react"
import Seo from "gatsby-plugin-wpgraphql-seo"
import React from "react"
import { Breadcrumb } from "gatsby-plugin-breadcrumb"
import Layout from "../components/Layout/Layout"
import "gatsby-plugin-breadcrumb/gatsby-plugin-breadcrumb.css"
import BlogGrid from "../components/BlogGrid"

const BlogPage = data => {
  const { title, seo, content, location, breadcrumb, related_posts } = data.pageContext

  console.log(related_posts.nodes);
  return (
    <Layout>
      <Seo post={{ seo }} />
      <Container py={8}>
        <Heading tag="h1" mb={4}>
          {title}
        </Heading>
        <Breadcrumb
          location={location}
          crumbLabel={title}
          crumbSeparator="/"
          crumbs={breadcrumb.crumbs}
        />
        <Box dangerouslySetInnerHTML={{ __html: content }} />
        <Heading tag="h2" mt={8} >
          Related Posts
        </Heading>
        <BlogGrid posts={related_posts.nodes} />
      </Container>
    </Layout>
  )
}

export default BlogPage
