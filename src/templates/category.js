import { Box, Container, Grid, Heading, Text } from "@chakra-ui/react"
import Seo from "gatsby-plugin-wpgraphql-seo"
import React from "react"
import Layout from "../components/Layout/Layout"
import WorkItem from "../components/WorkItem"
import Fade from 'react-reveal/Fade';


const Category = data => {
  // SEO Object:
  const { seo, title, description, items } = data.pageContext
  return (
    <Layout>
      <Seo post={{ seo }} />
      <Container>
        <Box display="grid" placeItems="center">
          {title && (
            <Heading
              as="h1"
              textAlign="center"
              fontSize={["6xl"]}
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

        <Grid templateColumns={["repeat(2, 1fr)"]} py={8} gap={3}>
          {console.log(items)}
          {items.map(item => (
            <Fade bottom>
              <WorkItem
              title={item.title}
              type={title}
              image={item.theWorkImage?.photoLink?.localFile?.childImageSharp}
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
