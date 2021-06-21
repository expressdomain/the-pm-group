require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `The PM Group | San Antonio’s Largest Ad and Marketing Agency`,
    description: `The PM Group is San Antonio's top advertising & marketing agency, leading in award-winning and results-driven campaigns with over 30 years of expertise.`,
    author: `@NoisyTrumpet`,
  },
  flags: {
    DEV_SSR: true,
    FAST_DEV: true,
    PRESERVE_WEBPACK_CACHE: true,
  },
  plugins: [
    "@chakra-ui/gatsby-plugin",
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      /**
       * First up is the WordPress source plugin that connects Gatsby
       * to your WordPress site.
       *
       * visit the plugin docs to learn more
       * https://github.com/gatsbyjs/gatsby/blob/master/packages/gatsby-source-wordpress/README.md
       *
       */
      resolve: `gatsby-source-wordpress`,
      options: {
        // the only required plugin option for WordPress is the GraphQL url.
        url: process.env.WPGRAPHQL_URL,
        auth: {
          htaccess: {
            username: process.env.HTTPBASICAUTH_USERNAME,
            password: process.env.HTTPBASICAUTH_PASSWORD,
          },
        },
        develop: {
          hardCacheData: true,
        },
        schema: {
          requestConcurrency: 50,
          timeout: 10000000,
        },
        type: {
          Post: {
            limit:
              process.env.NODE_ENV === "development"
                ? // Lets just pull 50 posts in development to make it easy on ourselves (aka. faster).
                  50
                : // and we don't actually need more than 5000 in production for this particular site
                  5000,
          },
        },
      },
    },
    {
      resolve: "gatsby-source-gravityforms",
      options: {
        // Base URL needs to include protocol (http/https)
        baseUrl: process.env.BASE_URL,
        // Gravity Forms API
        api: {
          key: process.env.CONSUMER_KEY,
          secret: process.env.CONSUMER_SECRET,
        },
        // Set to true to enable selfsigned certs in development mode
        allowSelfSigned: false,
        // Basic Auth
        basicAuth: {
          username: process.env.HTTPBASICAUTH_USERNAME,
          password: process.env.HTTPBASICAUTH_PASSWORD,
        },
        // ignoreFields: [
        //     // Top level fields within the Gravity Forms return
        //     // to ignore.
        //     // Default ignore is 'notifications'. To keep this
        //     // as set, remove the ignoreFields setting from here.
        //     // If adding more fields, you will need to include
        //     // notifications to ensure it is ignored.
        // ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `the-pmg-group`,
        short_name: `pmg`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // `gatsby-plugin-gatsby-cloud`,
    `gatsby-plugin-preact`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-netlify`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    // Chakra UI:
  ],
}
