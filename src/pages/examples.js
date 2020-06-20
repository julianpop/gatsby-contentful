import React from "react"
import Header from "../examples/Header"
import Layout from "../components/Layout"
import { graphql } from "gatsby"

const examples = ({ data }) => {
  const {
    site: {
      info: { author },
    },
  } = data
  return (
    <Layout>
      <h1>Example Page</h1>
      <Header></Header>
      <h4>Author: {author}</h4>
    </Layout>
  )
}

export const query = graphql`
  {
    site {
      info: siteMetadata {
        author
        data
        description
        person {
          age
          name
        }
        title
      }
    }
  }
`

export default examples
