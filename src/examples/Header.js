import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const Header = () => {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
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
  `)
  return (
    <div>
      <h2>{data.site.siteMetadata.title}</h2>
      <p>{data.site.siteMetadata.description}</p>
      <h3>Name: {data.site.siteMetadata.person.name}</h3>
      <h4>Age: {data.site.siteMetadata.person.age}</h4>
    </div>
  )
}

export default Header
