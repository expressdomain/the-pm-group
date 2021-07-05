import React from "react"
import { Link } from "gatsby"

const BreadCrumb = ({ crumbs }) => {
  return (
    <div>
      {crumbs.map(crumb => {
        return (
          <div style={{ display: "inline" }}>
            <Link
              to={crumb.pathname}
              style={{ ...crumb.crumbStyle }}
              activeStyle={{ ...crumb.crumbActiveStyle }}
            >
              {crumb.crumbLabel}
            </Link>
            {crumb.crumbSeparator || " / "}
          </div>
        )
      })}
    </div>
  )
}

export default BreadCrumb
