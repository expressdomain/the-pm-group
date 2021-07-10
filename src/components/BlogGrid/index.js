import { Box, SimpleGrid, useColorModeValue as mode } from "@chakra-ui/react"
import * as React from "react"
import BlogCard from "../BlogCard"

const BlogGrid = ({ posts }) => {
  return (
    <Box
      as="section"
      bg={posts[0].node ? mode("gray.50", "gray.800") : "white"}
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
              <BlogCard
                title={post.node.title}
                description={post.node.excerpt}
                image={
                  post.node.featuredImage &&
                  post.node.featuredImage.node?.localFile.childImageSharp
                }
                link={post.node.link}
                category={post.node.categories.nodes[0].name}
              />
            ) : (
              <BlogCard
                title={post.title}
                description={post.excerpt}
                image={
                  post.featuredImage &&
                  post.featuredImage.node?.localFile.childImageSharp
                }
                link={`/${post.slug}`}
                category={post.categories.nodes[0].name}
              />
            )
          )}
          {/* <Blog
              category="Fashion"
              media="https://images.unsplash.com/photo-1505944270255-72b8c68c6a70?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8ZmFjaWFsfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
              title="7 Steps to Get Professional Facial Results At Home"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
              href="#"
              author={{
                name: 'Segun Adebayo',
                href: '#',
              }}
            />
            <Blog
              category="Valentine"
              media="https://images.unsplash.com/photo-1516401266446-6432a8a07d41?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MzR8fHZhbGVudGluZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
              title="The Best Excuses To Spend A Cozy Valentine’s Day In"
              description="As much as I love an over-the-top, romantic Valentine’s date, part of me is looking"
              href="#"
              author={{
                name: 'Segun Adebayo',
                href: '#',
              }}
            />
            <Blog
              category="My Style"
              media="https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Nnx8c2hvcHBpbmd8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
              title="Top 5 Best-Sellers, Most-Loved & Favorite Buys of 2020"
              description="HAAAAPPY 2021! It’s the first Monday of the year and I have never been so ready for"
              href="#"
              author={{
                name: 'Segun Adebayo',
                href: '#',
              }}
            /> */}
        </SimpleGrid>
      </Box>
    </Box>
  )
}

export default BlogGrid
