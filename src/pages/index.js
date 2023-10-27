import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'

import Layout from '../components/layout'
import Hero from '../components/hero'
import ArticlePreview from '../components/article-preview'

class RootIndex extends React.Component {
  render() {
    const products = get(this, 'props.data.allContentfulProducts.nodes')
    const hero = get(this, 'props.data.allContentfulHero.nodes')

    return (
      <Layout location={this.props.location}>
        <Hero content={hero} />
        <ArticlePreview products={products} />
      </Layout>
    )
  }
}

export default RootIndex

export const pageQuery = graphql`
  query HomeQuery {
    allContentfulProducts {
      nodes {
        productName
        url
      }
    }

    allContentfulHero (
      filter: { contentful_id: { eq: "645523fc-5814-53ec-9b92-cdac707a1440" } }
    ) {
      nodes {
        id
        title
      }
    }
  }
`
