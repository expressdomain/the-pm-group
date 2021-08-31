import React from "react"
import Layout from "../components/Layout/Layout"
import { graphql, navigate } from "gatsby"
import GenericHero from "../components/GenericHero"
import { ctaItems, ctaLink, ctaText } from "../constants/cta"
import PrimaryCTA from "../components/PrimaryCTA"
import BlogGrid from "../components/BlogGrid"
import { ChevronRightIcon, ChevronLeftIcon } from "@chakra-ui/icons"
import { Paginated } from "@makotot/paginated"
import { Container, Grid, Stack, Button, Center } from "@chakra-ui/react"
import Seo from "gatsby-plugin-wpgraphql-seo"

const NewsWire = ({ data, pageContext }) => {
  // Hero Fields:
  const heroTitle = data?.wpPage?.newsPageFields?.newsPageHero?.heroTitle
  const heroImage =
    data?.wpPage.newsPageFields?.newsPageHero?.heroImage.localFile
      .childImageSharp
  const posts = data?.allWpPost.edges

  const { currentPage, numPages } = pageContext
  const isLast = currentPage === numPages
  const prevPage = currentPage - 1 === 1 ? "" : (currentPage - 1).toString()
  const nextPage = (currentPage + 1).toString()

  return (
    <Layout>
      <Seo post={data?.wpPage} />
      <GenericHero title={heroTitle} image={heroImage} />
      <PrimaryCTA items={ctaItems} link={ctaLink} ctaText={ctaText} />
      <BlogGrid posts={posts} />
      <Container display="flex" justifyContent="space-between" pt={10}>
        <Paginated
          currentPage={currentPage}
          totalPage={numPages}
          siblingsSize={1}
          boundarySize={1}
        >
          {({
            pages,
            currentPage,
            hasPrev,
            hasNext,
            getFirstBoundary,
            getLastBoundary,
            isPrevTruncated,
            isNextTruncated,
          }) => (
            <Grid
              width="100%"
              justifyContent="center"
              alignItems="center"
              gridTemplateColumns="min-content 1fr min-content"
              gridGap={2}
            >
              <Stack direction="row">
                {hasPrev() && (
                  <Button
                    leftIcon={<ChevronLeftIcon />}
                    bgColor="secondary"
                    color="black"
                    onClick={() => navigate(`/news/${prevPage}`)}
                  >
                    Prev
                  </Button>
                )}
              </Stack>
              <Center>
                <Stack direction="row">
                  {getFirstBoundary().map(boundary => (
                    <Button
                      key={boundary}
                      bgColor="secondary"
                      variant="outline"
                      color="black"
                      onClick={() => navigate(`/news/`)}
                    >
                      {boundary}
                    </Button>
                  ))}
                  {isPrevTruncated && <span>...</span>}
                  {pages.map(page => {
                    return page === currentPage ? (
                      <Button
                        key={page}
                        bgColor="secondary"
                        variant="solid"
                        color="black"
                      >
                        {page}
                      </Button>
                    ) : (
                      <Button
                        key={page}
                        bgColor="secondary"
                        variant="outline"
                        color="black"
                        onClick={() => navigate(`/news/${page}`)}
                      >
                        {page}
                      </Button>
                    )
                  })}

                  {isNextTruncated && <span>...</span>}
                  {getLastBoundary().map(boundary => (
                    <Button
                      key={boundary}
                      bgColor="secondary"
                      variant="outline"
                      color="black"
                      onClick={() => navigate(`/news/${boundary}`)}
                    >
                      {boundary}
                    </Button>
                  ))}
                </Stack>
              </Center>

              <Stack direction="row">
                {!isLast && (
                  <Button
                    rightIcon={<ChevronRightIcon />}
                    bgColor="secondary"
                    color="black"
                    onClick={() => navigate(`/news/${nextPage}`)}
                  >
                    Next
                  </Button>
                )}
              </Stack>
            </Grid>
          )}
        </Paginated>

        {/* {!isFirst && (
          <Link to={`/news/${prevPage}`} rel="prev">
            ← Previous Page
          </Link>
        )}
        {Array.from({ length: numPages }, (_, i) => (
          <Link
            key={`pagination-number${i + 1}`}
            to={`/news/${i === 0 ? "" : i + 1}`}
          >
            {i + 1}
          </Link>
        ))}
        {!isLast && (
          <Link to={`/news/${nextPage}`} rel="next">
            Next Page →
          </Link>
        )} */}
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
        breadcrumbs {
          text
          url
        }
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
                  formats: [WEBP, PNG]
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
              srcSet
              sourceUrl
            }
          }
        }
      }
    }
  }
`
