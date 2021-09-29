require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `The PM Group | San Antonio’s Largest Ad and Marketing Agency`,
    description: `The PM Group is San Antonio's top advertising & marketing agency, leading in award-winning and results-driven campaigns with over 30 years of expertise.`,
    author: `@NoisyTrumpet`,
    siteUrl: `https://thepmgrp.com`,
  },
  flags: {
    DEV_SSR: true,
    FAST_DEV: true,
  },
  plugins: [
    "@chakra-ui/gatsby-plugin",
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    // {
    //   resolve: `gatsby-plugin-advanced-sitemap`,
    //   // options: {
    //   //   additionalSitemaps: [
    //   //     {
    //   //       url: `https://thepmgrp.sitemap.xml`,
    //   //     },
    //   //   ],
    //   // },
    //   // Exclude links:
    //   exclude: [`/dev-404-page`, `/404`, `/404.html`],
    // },
    // Force Trailing Slash: failed and caused errors
    // `gatsby-plugin-force-trailing-slashes`,
    // CSP:
    {
      resolve: `gatsby-plugin-csp`,
      options: {
        disableOnDev: true,
        reportOnly: false, // Changes header to Content-Security-Policy-Report-Only for csp testing purposes
        mergeScriptHashes: true, // you can disable scripts sha256 hashes
        mergeStyleHashes: true, // you can disable styles sha256 hashes
        mergeDefaultDirectives: true,
        directives: {
          "script-src": "'self' www.google-analytics.com",
          "style-src": "'self' 'unsafe-inline'",
          "img-src": "'self' data: www.google-analytics.com"
          // you can add your directives or override defaults
        }
      }
    },
    // Peact for speed!
    `gatsby-plugin-preact`,
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: "https://thepmgrp.com",
        sitemap: "https://thepmgrp.com/sitemap.xml",
        policy: [
          {
            userAgent: "*",
            allow: "/",
            disallow: [
              "/login/",
              "/cgi-bin/",
              "/wp-admin/",
              "/wp-login.php",
              "/wp-admin/admin-ajax.php",
              "/wp-",
              "/?s=",
              "*&s=",
              "/search",
              "/author/",
              "*?attachment_id=",
              "*/feed",
              "*/rss",
              "*/embed",
              "/wp-admin/",
              "/trackback/",
              "/tag/*",
              "/category/agency-news/",
              "/category/uncategorized/",
              "/product/*",
            ],
          },
        ],
      },
    },
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
        // auth: {
        //   htaccess: {
        //     username: process.env.HTTPBASICAUTH_USERNAME,
        //     password: process.env.HTTPBASICAUTH_PASSWORD,
        //   },
        // },
        production: {
          hardCacheMediaFiles: true,
          allow404Images: true,
        },
        develop: {
          hardCacheData: true,
          hardCacheMediaFiles: true,
        },
        schema: {
          requestConcurrency: 5,
          perPage: 20,
          timeout: 3000000,
        },
        type: {
          Post: {
            limit:
              process.env.NODE_ENV === "development"
                ? // Lets just pull 50 posts in development to make it easy on ourselves (aka. faster).
                  50
                : // and we don't actually need more than 5000 in production for this particular site
                  500,
          },
        },
      },
    },
    // Removing Gravity Forms from the build in favor of netlify forms
    // {
    //   resolve: "gatsby-source-gravityforms",
    //   options: {
    //     // Base URL needs to include protocol (http/https)
    //     baseUrl: process.env.BASE_URL,
    //     // Gravity Forms API
    //     api: {
    //       key: process.env.CONSUMER_KEY,
    //       secret: process.env.CONSUMER_SECRET,
    //     },
    //     // Set to true to enable selfsigned certs in development mode
    //     allowSelfSigned: false,
    //     // Basic Auth
    //     // basicAuth: {
    //     //   username: process.env.HTTPBASICAUTH_USERNAME,
    //     //   password: process.env.HTTPBASICAUTH_PASSWORD,
    //     // },
    //     // ignoreFields: [
    //     //     // Top level fields within the Gravity Forms return
    //     //     // to ignore.
    //     //     // Default ignore is 'notifications'. To keep this
    //     //     // as set, remove the ignoreFields setting from here.
    //     //     // If adding more fields, you will need to include
    //     //     // notifications to ensure it is ignored.
    //     // ],
    //   },
    // },
    {
      resolve: `gatsby-plugin-breadcrumb`,
      options: {
        // defaultCrumb: optional To create a default crumb
        // see Click Tracking default crumb example below
        useAutoGen: true,
        autoGenHomeLabel: `Home`,
        defaultCrumb: {
          // location: required and must include the pathname property
          location: {
            pathname: "https://thepmgrp.com",
          },
          // crumbLabel: required label for the default crumb
          crumbLabel: "Home",
          // all other properties optional
          crumbSeparator: " / ",
        },
        // generate breadcrumbs for (see below for details).
        exclude: [
          `**/dev-404-page/**`,
          `**/404/**`,
          `**/404.html`,
          `**/offline-plugin-app-shell-fallback/**`,
        ],
        trailingSlashes: true,
        // usePathPrefix: optional, if you are using pathPrefix above
        // usePathPrefix: '/blog',
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
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        // Defaults used for gatsbyImageData and StaticImage
        // defaults: {},
        // Set to false to allow builds to continue on image errors
        failOnError: false,
        // deprecated options and their defaults:
        // base64Width: 20,
        // forceBase64Format: ``, // valid formats: png,jpg,webp
        // useMozJpeg: process.env.GATSBY_JPEG_ENCODER === `MOZJPEG`,
        // stripMetadata: true,
        // defaultQuality: 50,
      },
    },
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
    // `gatsby-plugin-remove-fingerprints`,
    `gatsby-plugin-gatsby-cloud`,
    // `gatsby-plugin-preact`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-netlify`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    // Chakra UI:
  ],
}
