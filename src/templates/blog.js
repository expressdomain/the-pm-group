import { Container, Box, Heading } from "@chakra-ui/react"
import Seo from "gatsby-plugin-wpgraphql-seo"
import React from "react"
import Layout from "../components/Layout/Layout"

const BlogPage = data => {
  const {title, seo, content} = data.pageContext
  return (
    <Layout>
      <Seo post={{seo}} />
      <Container py={8}>
        <Heading tag="h1" mb={4}>
        {title}
        </Heading>
        <Box dangerouslySetInnerHTML={{ __html: content }} />
      </Container>
    </Layout>
  )
}

export default BlogPage
