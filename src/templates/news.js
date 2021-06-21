import React from "react"
import Layout from "../components/Layout/Layout"
import { graphql } from "gatsby"
import GenericHero from "../components/GenericHero"
import { ctaItems, ctaLink, ctaText } from "../constants/cta"
import PrimaryCTA from "../components/PrimaryCTA"
import BlogGrid from "../components/BlogGrid"

const NewsWire = ({ data }) => {
  // Hero Fields:
  const heroTitle = data?.wpPage?.newsPageFields?.newsPageHero?.heroTitle
  const heroImage =
    data?.wpPage.newsPageFields?.newsPageHero?.heroImage.localFile
      .childImageSharp
  const posts = data?.allWpPost.edges

  return (
    <Layout>
      <GenericHero title={heroTitle} image={heroImage} />
      <PrimaryCTA items={ctaItems} link={ctaLink} ctaText={ctaText} />
      <BlogGrid posts={posts} />
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
