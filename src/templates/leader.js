import Seo from "gatsby-plugin-wpgraphql-seo"
import React from "react"
import GenericHero from "../components/GenericHero"
import Layout from "../components/Layout/Layout"
import { ctaItems, ctaLink, ctaText } from "../constants/cta"
import PrimaryCTA from "../components/PrimaryCTA"
import { Container, Heading, Box } from "@chakra-ui/react"

const LeadershipTemplate = data => {
  const { heroPic, name, position, bio } = data.pageContext.fields
  const { title, seo } = data.pageContext
  return (
    <Layout>
      <Seo post={{ seo }} />
      <GenericHero title={title} image={heroPic.localFile.childImageSharp}/>
      <PrimaryCTA items={ctaItems} link={ctaLink} ctaText={ctaText} />
      <Container py={4}>
        {name && (
          <Heading tag="h2" color="black">
            {name}
          </Heading>
        )}
        {position && (
          <Heading tag="h2" fontSize="xl">
            {position}
          </Heading>
        )}
        {bio && <Box my={4} dangerouslySetInnerHTML={{ __html: bio }} />}
      </Container>
    </Layout>
  )
}

export default LeadershipTemplate
