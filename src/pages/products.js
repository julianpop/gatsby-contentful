import React from "react"
import { graphql, Link } from "gatsby"
import Image from "gatsby-image"
import Layout from "../components/Layout"
import styles from "../components/products.module.css"

const ComponentName = ({ data }) => {
  const {
    allContentfulProduct: { nodes: products },
  } = data

  return (
    <Layout>
      <h1>Products</h1>
      <h2><a href="/products/latest">See latest products</a></h2>
      <section className={styles.page}>
        {products.map((product) => {
          return (
            <article key={product.id}>
              <Link to={`/products/${product.slug}`}>
                <Image fluid={product.image.fluid} alt={product.title}></Image>
              </Link>
              <h2>
                {product.title} <span>${product.price}</span>
              </h2>
              <Link to={`/products/${product.slug}`}>more details</Link>
            </article>
          )
        })}
      </section>
    </Layout>
  )
}

export const query = graphql`
  {
    allContentfulProduct {
      nodes {
        id
        title
        slug
        price
        image {
          fluid {
            ...GatsbyContentfulFluid
          }
        }
      }
    }
  }
`

export default ComponentName
