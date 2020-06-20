import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import img from "../images/tech3.jpeg"
import Image from "gatsby-image"

const getImages = graphql`
  {
    fixed: file(relativePath: { eq: "tech1.jpeg" }) {
      childImageSharp {
        fixed(width: 300, height: 300, grayscale: true) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    fluid: file(relativePath: { eq: "tech2.jpeg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
  }
`

const Images = () => {
  const data = useStaticQuery(getImages)
  return (
    <section className="images">
      <article className="single-image">
        <h3>Basic Image</h3>
        <img src={img} width="100%"></img>
      </article>
      <article className="single-image">
        <h3>Fixed Image/Blur</h3>
        <Image fixed={data.fixed.childImageSharp.fixed}></Image>
      </article>
      <article className="single-image">
        <h3>Fluid Image/SVG</h3>
        <Image fluid={data.fluid.childImageSharp.fluid}></Image>
      </article>
    </section>
  )
}

export default Images
