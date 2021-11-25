import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'

const PostTemplate = ({ data: post }) => (
  <Layout>
    <div>
      <h1>{post.markdownRemark.frontmatter.title}</h1>
    </div>
    <div dangerouslySetInnerHTML={{ __html: post.markdownRemark.html }} />
  </Layout>
)

export const query = graphql`
  query ($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`

export default PostTemplate
