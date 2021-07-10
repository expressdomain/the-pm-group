/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require("path")
const { createFilePath } = require("gatsby-source-filesystem")
const fetch = require("node-fetch")

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions
  const result = await graphql(
    `
      {
        workTemplates: allWpCategory {
          edges {
            node {
              uri
              nodeType
              slug
              description
              name
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
                  raw
                }
              }
              description
              name
              leaders {
                nodes {
                  slug
                  title
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
                      raw
                    }
                  }
                  leaderFields {
                    bio
                    name
                    position
                    heroPic {
                      localFile {
                        childImageSharp {
                          gatsbyImageData(
                            quality: 90
                            layout: CONSTRAINED
                            formats: WEBP
                            placeholder: BLURRED
                          )
                        }
                      }
                    }
                  }
                }
              }
              works {
                nodes {
                  videoFields {
                    videoLink
                    videoDescription
                    videoCoverImage {
                      localFile {
                        childImageSharp {
                          gatsbyImageData(
                            quality: 90
                            placeholder: BLURRED
                            layout: CONSTRAINED
                            formats: WEBP
                          )
                        }
                      }
                    }
                  }
                  workAudio {
                    radioClip {
                      link
                    }
                  }
                  title
                  id
                  theWorkImage {
                    photoLink {
                      localFile {
                        childImageSharp {
                          gatsbyImageData(
                            quality: 90
                            layout: CONSTRAINED
                            formats: WEBP
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
        }
        allWpPost(sort: { fields: date, order: DESC }, limit: 1000) {
          edges {
            node {
              id
              uri
              slug
              content
              title
              related_posts {
                nodes {
                  categories {
                    nodes {
                      name
                    }
                  }
                  title
                  slug
                  excerpt
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
                  raw
                }
              }
              internal {
                type
              }
            }
          }
        }
      }
    `
  )
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }
  // Create Work Template Page:
  const workItems = result.data.workTemplates.edges

  workItems.forEach(cat => {
    if (cat.node.name !== "Agency News" || "Leadership") {
      createPage({
        path: `/our-work/${cat.node.slug}`,
        component: path.resolve("./src/templates/category.js"),
        context: {
          items: cat.node.works.nodes,
          title: cat.node.name,
          description: cat.node.description,
          seo: cat.node.seo,
        },
      })
    }
    if (cat.node.name === "Leadership") {
      cat.node.leaders.nodes.forEach(node => {
        createPage({
          path: node.slug,
          component: path.resolve("./src/templates/leader.js"),
          context: {
            title: node.title,
            fields: node.leaderFields,
            seo: node.seo,
          },
        })
      })
    }
  })

  // Create blog-list pages
  const posts = result.data.allWpPost.edges

  posts.forEach(post => {
    createPage({
      path: `/news/${post.node.slug}`,
      component: path.resolve("./src/templates/blog.js"),
      context: {
        id: post.node.id,
        content: post.node.content,
        title: post.node.title,
        seo: post.node.seo,
        related_posts: post.node.related_posts
      },
    })
  })

  // Creating Individual Blog Pages:
  const postsPerPage = 12
  const numPages = Math.ceil(posts.length / postsPerPage)
  Array.from({ length: numPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/news` : `/news/${i + 1}`,
      component: path.resolve("./src/templates/news.js"),
      context: {
        limit: postsPerPage,
        skip: i * postsPerPage,
        numPages,
        currentPage: i + 1,
      },
    })
  })
}
exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions
  if (node.internal.type === `Post`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions
  const typeDefs = `
    type WpPost implements Node {
      related_posts: WpNodePost!
    }
    type WpNodePost implements Node {
      nodes: [WpPost]
    }
  `
  createTypes(typeDefs)
}

let auth =
  "Basic " +
  Buffer.from(
    process.env.HTTPBASICAUTH_USERNAME +
      ":" +
      process.env.HTTPBASICAUTH_PASSWORD
  ).toString("base64")
let headers = {
  Authorization: auth,
}

exports.createResolvers = ({ createResolvers, schema }) =>
  createResolvers({
    WpPost: {
      related_posts: {
        resolve: async (source, args, context, info) => {
          const { databaseId } = source

          const response = await fetch(
            `${process.env.BASE_URL}/wp-json/yarpp/v1/related/${databaseId}`,
            {
              headers: headers,
            }
          ).then(res => res.json())

          if (response && response.length) {
            const result = await context.nodeModel.runQuery({
              query: {
                filter: { databaseId: { in: response.map(({ id }) => id) } },
              },
              type: "WpPost",
            })
            return { nodes: result }
          } else return { nodes: [] }
        },
      },
    },
  })