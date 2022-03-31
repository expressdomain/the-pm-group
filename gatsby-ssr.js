import React from "react"
import { Partytown } from "@builder.io/partytown/react"

const resolveUrl = url => {
  if (
    url.hostname === "www.google-analytics.com" ||
    url.hostname === "connect.facebook.net"
  ) {
    var proxyUrl = new URL(`https://coop-atm.mygenfcu.workers.dev/?${url.href}`)
    // proxyUrl.searchParams.append('', )
    return proxyUrl
  }
  return url
}

export const onRenderBody = ({ setHeadComponents, setPreBodyComponents }) => {
  if (process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "test")
    return null
  setHeadComponents([
    <Partytown key="partytown" debug={false} forward={['dataLayer.push']} resolveUrl={resolveUrl}/>,
    // <link
    //   rel="preconnect"
    //   key="dns-prefetch-google-tag-manager"
    //   href="https://www.googletagmanager.com"
    //   as="script"
    //   crossorigin
    // />,
    // <link
    //   rel="preconnect"
    //   key="dns-prefetch-connect-facebook"
    //   href="https://connect.facebook.net"
    //   as="script"
    //   crossorigin
    // />,
    <link
      rel="preload"
      key="preload-montserrat-latin-500"
      href="/static/montserrat-latin-500-normal-730131c0fbe55c1ba2828ac133d40a44.woff2"
      as="font"
      type="font/woff2"
      crossorigin
    />,
    <link
      rel="preload"
      key="preload-montserrat-latin-700"
      href="/static/montserrat-latin-700-normal-6077783c63fa414406e1ddbc1e62388b.woff2"
      as="font"
      type="font/woff2"
      crossorigin
    />,

    <script
      key="google-tag-manager-head"
      type="text/partytown"
      dangerouslySetInnerHTML={{
        __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','${process.env.GATSBY_GOOGLE_TAG_MANAGER_ID}');`,
      }}
    />,
  ]),
    setPreBodyComponents([
      <noscript
        key="google-tagmanager-body"
        type="text/partytown"
        dangerouslySetInnerHTML={{
          __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=${process.env.GATSBY_GOOGLE_TAG_MANAGER_ID}" height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
        }}
      />,
    ])
}
