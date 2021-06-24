import React from "react"
import Layout from "../components/Layout/Layout"
import { graphql } from "gatsby"
import GenericHero from "../components/GenericHero"
import { ctaItems, ctaLink, ctaText } from "../constants/cta"
import PrimaryCTA from "../components/PrimaryCTA"
import BlogGrid from "../components/BlogGrid"
import Link from "../components/Link/Link"
import { Container } from "@chakra-ui/react"

const NewsWire = ({ data, pageContext }) => {
  // Hero Fields:
  const heroTitle = data?.wpPage?.newsPageFields?.newsPageHero?.heroTitle
  const heroImage =
    data?.wpPage.newsPageFields?.newsPageHero?.heroImage.localFile
      .childImageSharp
  const posts = data?.allWpPost.edges

  const { currentPage, numPages } = pageContext
  const isFirst = currentPage === 1
  const isLast = currentPage === numPages
  const prevPage = currentPage - 1 === 1 ? "" : (currentPage - 1).toString()
  const nextPage = (currentPage + 1).toString()

  return (
    <Layout>
      <GenericHero title={heroTitle} image={heroImage} />
      <PrimaryCTA items={ctaItems} link={ctaLink} ctaText={ctaText} />
      <BlogGrid posts={posts} />
      <Container display="flex" justifyContent="space-between" pt={10}>
        {!isFirst && (
          <Link to={`/news/${prevPage}`} rel="prev">
            ← Previous Page
          </Link>
        )}
        {!isLast && (
          <Link to={`/news/${nextPage}`} rel="next">
            Next Page →
          </Link>
        )}
      </Container>
    </Layout>
  )
}

export default NewsWire

export const newsQuery = graphql`
  query GET_NEWS_PAGE($skip: Int!, $limit: Int!) {
    wpPage(title: { eq: "Newswire" }) {
      title
      uri
      nodeType
      seo {
        title
        metaDesc
        focuskw
        metaKeywords
        metaRobotsNoindex
        metaRobotsNofollow
        opengraphTitle
        opengraphDescription
        opengraphImage {
          altText
          sourceUrl
          srcSet
        }
        twitterTitle
        twitterDescription
        twitterImage {
          altText
          sourceUrl
          srcSet
        }
        canonical
        cornerstone
        schema {
          articleType
          pageType
          raw
        }
      }
      newsPageFields {
        newsPageHero {
          heroImage {
            localFile {
              childImageSharp {
                gatsbyImageData(
                  quality: 90
                  layout: CONSTRAINED
                  formats: [AVIF, WEBP]
                  placeholder: BLURRED
                )
              }
            }
          }
          heroTitle
        }
      }
    }
    allWpPost(sort: { fields: date, order: DESC }, limit: $limit, skip: $skip) {
      edges {
        node {
          nodeType
          seo {
            title
            metaDesc
            focuskw
            metaKeywords
            metaRobotsNoindex
            metaRobotsNofollow
            opengraphTitle
            opengraphDescription
            opengraphImage {
              altText
              sourceUrl
              srcSet
            }
            twitterTitle
            twitterDescription
            twitterImage {
              altText
              sourceUrl
              srcSet
            }
            canonical
            cornerstone
            schema {
              articleType
              pageType
              raw
            }
          }
          content
          excerpt
          link
          slug
          title
          categories {
            nodes {
              name
            }
          }
          featuredImage {
            node {
              localFile {
                childImageSharp {
                  gatsbyImageData(
                    layout: CONSTRAINED
                    formats: [AVIF, WEBP]
                    quality: 90
                    aspectRatio: 1.66
                    placeholder: BLURRED
                  )
                }
              }
            }
          }
        }
      }
    }
  }
`
