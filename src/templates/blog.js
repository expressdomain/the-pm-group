import { Container, Box, Heading } from "@chakra-ui/react"
import Seo from "gatsby-plugin-wpgraphql-seo"
import React from "react"
import { Breadcrumb } from "gatsby-plugin-breadcrumb"
import Layout from "../components/Layout/Layout"
import "gatsby-plugin-breadcrumb/gatsby-plugin-breadcrumb.css"

const BlogPage = data => {
  const { title, seo, content, location, breadcrumb } = data.pageContext
  return (
    <Layout>
      <Seo post={{ seo }} />
      <Container py={8}>
        <Heading tag="h1" mb={4}>
          {title}
        </Heading>
        {/* {console.log()} */}
        <Breadcrumb
          location={location}
          crumbLabel={title}
          crumbSeparator="/"
          crumbs={breadcrumb.crumbs}
        />
        <Box dangerouslySetInnerHTML={{ __html: content }} />
      </Container>
    </Layout>
  )
}

export default BlogPage
