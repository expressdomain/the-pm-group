import { Box, Container, Grid, Heading, Text } from "@chakra-ui/react"
import Seo from "gatsby-plugin-wpgraphql-seo"
import React from "react"
import Layout from "../components/Layout/Layout"
import WorkItem from "../components/WorkItem"
import Fade from "react-reveal/Fade"

const Category = data => {
  // SEO Object:
  const { seo, title, description, items } = data.pageContext
  return (
    <Layout>
      <Seo post={{ seo }} />
      <Container>
        <Box display="grid" placeItems="center" mt={8}>
          {title && (
            <Heading
              as="h1"
              textAlign="center"
              fontSize={["3xl", "4xl", "6xl"]}
              color="black"
            >
              {title}
            </Heading>
          )}
          {description && (
            <Text textAlign="center" maxWidth={[700]} py={4}>
              {description}
            </Text>
          )}
        </Box>
        <Box>
          <Grid
            gridTemplateColumns={[
              "repeat(1, 1fr)",
              "repeat(2, 1fr)",
              "repeat(2, 1fr)",
            ]}
            py={8}
            gap={3}
          >
            {items.map(item => (
              <Fade bottom key={item.title}>
                <WorkItem
                  title={item.title}
                  type={item.videoFields.videoLink ? "Television" : title}
                  image={
                    item.theWorkImage?.photoLink?.localFile?.childImageSharp ||
                    item.videoFields.videoCoverImage?.localFile.childImageSharp
                  }
                  media={
                    item.videoFields.videoLink ||
                    item.workAudio.radioClip?.link ||
                    ""
                  }
                />
              </Fade>
            ))}
          </Grid>
        </Box>
      </Container>
    </Layout>
  )
}

export default Category

// export default tvQuery = graphql`

// `
