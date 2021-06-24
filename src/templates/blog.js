import { Container, Box } from "@chakra-ui/react"
import React from "react"
import Layout from "../components/Layout/Layout"

const BlogPage = data => {
  return (
    <Layout>
      <Container>
        <Box dangerouslySetInnerHTML={{ __html: data.pageContext.content }} />
      </Container>
    </Layout>
  )
}

export default BlogPage
