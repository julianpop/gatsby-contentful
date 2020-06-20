import React from "react"
import Layout from "../components/Layout"
import styles from "../components/blog.module.css"

const blog = () => (
  <Layout>
    <div className={styles.page}>
      <h1>Blog page</h1>
      <p className={styles.text}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis viverra
        faucibus elementum. Nam eget magna enim.
      </p>
    </div>
  </Layout>
)

export default blog
