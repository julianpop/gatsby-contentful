import React from "react"
import { Link } from "gatsby"

export const Navbar = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
          <li>
            <Link to="/examples">Examples</Link>
          </li>
          <li>
            <Link to="/images">Images</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Navbar