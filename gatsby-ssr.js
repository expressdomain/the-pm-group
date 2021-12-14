import React from "react"

export const onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    <link
      rel="preconnect"
      key="dns-prefetch-google-tag-manager"
      href="https://www.googletagmanager.com"
      as="script"
      crossorigin
    />,
    <link
      rel="preconnect"
      key="dns-prefetch-google-analytics"
      href="https://www.google-analytics.com"
      as="script"
      crossorigin
    />,
    <link
      rel="preconnect"
      key="dns-prefetch-connect-facebook"
      href="https://connect.facebook.net"
      as="script"
      crossorigin
    />,
  ])
}
