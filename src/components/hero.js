import React from 'react'
// import { GatsbyImage } from 'gatsby-plugin-image'
// import { renderRichText } from 'gatsby-source-contentful/rich-text'

const Hero = ({ content }) => (
  <div className="bg-secondary h-96 flex items-end py-4">
    
    <div className="container mx-auto px-4">
      <h1>{content.title}</h1>
        {/* <p>{content.description}</p> */}
    </div>
  </div>
)

export default Hero