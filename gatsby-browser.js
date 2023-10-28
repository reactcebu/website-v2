import React from "react"
import { Layout } from "./src/components"

const wrapPageElement = ({ element, props }) => {
  return <Layout {...props}>{element}</Layout>
}

export { wrapPageElement }
