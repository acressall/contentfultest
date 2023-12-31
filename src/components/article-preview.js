import React from 'react'
import { Link } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import { renderRichText } from 'gatsby-source-contentful/rich-text'

import Container from './container'
import Tags from './tags'

const ArticlePreview = ({ posts }) => {
  if (!posts) return null
  if (!Array.isArray(posts)) return null

  return (
    <Container>
      <ul>
        {posts.map((post) => {
          return (
            <li key={post.slug}>
              <Link to={`/blog/${post.slug}`}>
                <GatsbyImage alt="" image={post.heroImage.gatsbyImage} />
                <h2>{post.title}</h2>
              </Link>
              <div>
                {post.description?.raw && renderRichText(post.description)}
              </div>
              <div>
                <small className="meta">{post.publishDate}</small>
                <Tags tags={post.tags} />
              </div>
            </li>
          )
        })}
      </ul>
    </Container>
  )
}

export default ArticlePreview
