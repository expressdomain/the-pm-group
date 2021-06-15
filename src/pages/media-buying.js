import * as React from "react"
import Layout from "../components/Layout/Layout"
import { graphql } from "gatsby"

import Seo from "gatsby-plugin-wpgraphql-seo"

const MediaBuying = ({ data: { wpPage }}) => {
    return(
        <Layout>
            <Seo post={wpPage} />
        </Layout>
    )
}

export default MediaBuying
