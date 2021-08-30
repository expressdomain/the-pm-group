import { Box, SimpleGrid, useColorModeValue as mode } from "@chakra-ui/react"
import * as React from "react"
import BlogCard from "../BlogCard"
import Fade from "react-reveal/Fade"

const BlogGrid = ({ posts }) => {
  return (
    <Box
      as="section"
      bg={posts[0]?.node ? mode("gray.50", "gray.800") : "white"}
      py={[10]}
    >
      <Box
        maxW={{
          base: "xl",
          md: "7xl",
        }}
        mx="auto"
        px={{
          base: "6",
          md: "8",
        }}
      >
        <SimpleGrid
          columns={{
            base: 1,
            md: 3,
          }}
          spacing="12"
          mb="10"
        >
          {posts.map(post =>
            post.node ? (
              <Fade bottom key={post.node.title}>
                <BlogCard
                  title={post.node.title}
                  description={post.node.excerpt}
                  imageSrc={post.node.featuredImage?.node?.mediaItemUrl}
                  imageSrcSet={post.node.featuredImage?.node?.srcSet}
                  link={`${post.node.link}`}
                  category={post.node.categories.nodes[0].name}
                />
              </Fade>
            ) : (
              <Fade bottom>
                <BlogCard
                  title={post.title}
                  description={post.excerpt}
                  imageSrc={post.featuredImage?.node?.mediaItemUrl}
                  imageSrcSet={post.featuredImage?.node?.srcSet}
                  link={`/${post.slug}/`}
                  category={post.categories.nodes[0].name}
                />
              </Fade>
            )
          )}
        </SimpleGrid>
      </Box>
    </Box>
  )
}

export default BlogGrid
