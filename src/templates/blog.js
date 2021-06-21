import React from "react"
import Layout from "../components/Layout/Layout"

const BlogPage = data => {
  console.log(data.pageContext.content)
  return <Layout></Layout>
}

export default BlogPage
