import React from "react"
import Layout from "../components/Layout/Layout"
import { graphql } from "gatsby"
import Seo from "gatsby-plugin-wpgraphql-seo"
import { Box, Text, Heading, chakra } from "@chakra-ui/react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Logo from "../SVG/Logo"

const NotFoundPage = ({ data }) => {
  const backgroundImage = data.backgroundImage.childImageSharp
  const errorNumImage = data.errorNumImage.childImageSharp
  const arrowImage = data.arrowImage.childImageSharp

  return (
    <Layout>
      <Seo title="404: Not found" />
      <Box position={`relative`} display="grid" placeItems="center">
        <Box style={{ gridArea: "1/1" }} zIndex={4} pt={4} pb={8}>
          <Box maxW="1400px" m="auto">
            {errorNumImage && (
              <GatsbyImage
                image={getImage(errorNumImage)}
                alt="404 number image"
                style={{
                  gridArea: "1/1",
                  height: "100%",
                  minHeight: "100px",
                  minWidth: "100%",
                }}
              />
            )}
          </Box>
          <Box
            py={4}
            px={4}
            maxW="95%"
            m="auto"
            display="grid"
            gridTemplateColumns={{
              base: "100%",
              md: "50% 50%",
              lg: "20% 35% 45%",
            }}
            gridTemplateRows={{
              base: "repeat(3, auto)",
              md: "repeat(2, auto)",
              lg: "auto",
            }}
            gridGap={8}
            placeItems="center"
          >
            <Box backgroundColor="white" height={{ base: "150px", lg: "auto" }}>
              <Logo
                height={{ base: "100%", lg: "auto" }}
                width={{ base: "auto", lg: "100%" }}
              />
            </Box>
            <Box textAlign="center" maxW="100%">
              <Heading
                textTransform="uppercase"
                fontSize={{ base: "6.2vw", md: "4vw", lg: "3.2vw" }}
                fontWeight="800"
                color="secondary"
                lineHeight="1.5"
                margin="auto"
                opacity="0.8"
              >
                You may be lost.
              </Heading>
              <Box maxW={{ base: "90%", md: "95%" }} m="auto">
                <Text
                  fontSize={{ base: "5.2vw", md: "2.8vw", lg: "2.2vw" }}
                  lineHeight="1.2"
                  color="white"
                >
                  This page is missing or the link used is incorrect.
                </Text>
              </Box>
            </Box>
            <Box
              position={`relative`}
              display="grid"
              placeItems="center"
              justifySelf={{ base: "center", lg: "left" }}
              maxW={{ base: "90%", sm: "80%", md: "60%", lg: "90%" }}
              gridColumnStart={{ base: "1", md: "1", lg: "3" }}
              gridColumnEnd={{ base: "2", md: "3", lg: "4" }}
            >
              <chakra.a
                href="/"
                rel="noopener noreferrer"
                _hover={{
                  textDecoration: `underline`,
                  color: `white`,
                }}
                transition={`all .3s ease-in-out`}
              >
                <Box position={`relative`} display="grid" placeItems="center">
                  <Box
                    style={{ gridArea: "1/1" }}
                    zIndex={5}
                    justifySelf="left"
                    ml="13%"
                  >
                    <Box py={4} px={4} display="grid" placeItems="center">
                      <Text
                        color="white"
                        textTransform="uppercase"
                        fontSize={{ base: "8vw", md: "6vw", lg: "4vw" }}
                        fontWeight="800"
                        lineHeight={{ base: "1.2", md: "1.5" }}
                      >
                        Go Back
                      </Text>
                    </Box>
                  </Box>
                  {arrowImage && (
                    <GatsbyImage
                      image={getImage(arrowImage)}
                      alt="Go Back arrow image"
                      style={{
                        gridArea: "1/1",
                        // height: "100%",
                        width: "100%",
                      }}
                    />
                  )}
                </Box>
              </chakra.a>
            </Box>
          </Box>
        </Box>
        {backgroundImage && (
          <GatsbyImage
            image={getImage(backgroundImage)}
            alt="404 background asphault image"
            style={{
              gridArea: "1/1",
              height: "100%",
              minHeight: "400px",
              minWidth: "100%",
            }}
          />
        )}
      </Box>
    </Layout>
  )
}

export default NotFoundPage

export const notFoundPageQuery = graphql`
  query NOT_FOUND_PAGE {
    backgroundImage: file(relativePath: { eq: "asphault-background.jpg" }) {
      childImageSharp {
        gatsbyImageData(
          formats: WEBP
          layout: CONSTRAINED
          placeholder: BLURRED
          quality: 90
        )
      }
    }
    errorNumImage: file(relativePath: { eq: "404.png" }) {
      childImageSharp {
        gatsbyImageData(
          formats: WEBP
          layout: CONSTRAINED
          placeholder: BLURRED
          quality: 90
        )
      }
    }
    arrowImage: file(relativePath: { eq: "asphault-arrow.png" }) {
      childImageSharp {
        gatsbyImageData(
          formats: WEBP
          layout: CONSTRAINED
          placeholder: BLURRED
          quality: 90
        )
      }
    }
  }
`
