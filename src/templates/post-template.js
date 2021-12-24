import React from 'react'
import { graphql, Link } from 'gatsby'

import Layout from '../components/layout'

const PostTemplate = ({ data: post }) => (
  <Layout>
    <div>
      <h1>{post.markdownRemark.frontmatter.title}</h1>
      <h4>
        {post.markdownRemark.timeToRead}{' '}
        {post.markdownRemark.timeToRead > 1 ? 'minutes' : 'minute'}
      </h4>
    </div>
    <div dangerouslySetInnerHTML={{ __html: post.markdownRemark.html }} />
    <br />
    <Link to="/blog/">Go to Blog</Link> <br />
    <Link to="/">Go to Homepage</Link>
    <br />
  </Layout>
)

export const query = graphql`
  query ($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      timeToRead
      frontmatter {
        title
      }
    }
  }
`

export default PostTemplate
