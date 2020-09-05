import React from "react"
import Layout from "../components/Layout"
import { graphql, Link } from "gatsby"
import Image from "gatsby-image"
import styles from "../components/products.module.css"

const ComponentHomepage = ({ data }) => {
  const {
    allContentfulProduct: { nodes: products },
  } = data

  return (
    <Layout>
      <h1>This is a Gatsby/Contenful Tutorial</h1>
      <p>
        My first Gatsby/Contentful site. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Mauris id sodales enim. Suspendisse convallis lorem sit
        amet nunc gravida gravida. Ut porta eros quis sem faucibus dignissim.
        Morbi mattis aliquet mauris, id ullamcorper neque aliquet ac.
      </p>
      <p>
        <Link to="/blog" className={styles.prodhomeBTN}>
          Read More
        </Link>
      </p>
      <h1><a href="/products/latest">Latest Products</a></h1>
      <section className={styles.prodhome}>
        {products.map((product) => {
          return (
            <article key={product.id}>
              <Link to={`/products/${product.slug}`}>
                <Image fluid={product.image.fluid} alt={product.title}></Image>
              </Link>
              <h2>{product.title}</h2>
              <p>
                <b>${product.price}</b>
              </p>
              <span className={styles.prodhomeBTN}>
                <Link
                  to={`/products/${product.slug}`}
                  className={styles.prodhomeBTNLink}
                >
                  more details
                </Link>
              </span>
            </article>
          )
        })}
      </section>
    </Layout>
  )
}

export const query = graphql`
  {
    allContentfulProduct(limit: 3, sort: { fields: createdAt, order: DESC }) {
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

export default ComponentHomepage
