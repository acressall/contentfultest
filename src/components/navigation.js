import React from 'react'
import { Link } from 'gatsby'


const Navigation = () => (
  <nav role="navigation" aria-label="Main">
    <Link to="/">
      <span />
      <span>Gatsby Starter Contentful</span>
    </Link>
    <ul>
      <li>
        <Link to="/" activeClassName="active">
          Home
        </Link>
      </li>
      <li>
        <Link to="/blog/" activeClassName="active">
          Blog
        </Link>
      </li>
    </ul>
  </nav>
)

export default Navigation
