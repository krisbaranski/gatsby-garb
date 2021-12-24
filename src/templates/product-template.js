import React from 'react'
import { graphql, Link } from 'gatsby'
import Img from 'gatsby-image'

import Layout from '../components/layout'

const ProductTemplate = ({ data: { contentfulProduct } }) => (
  <Layout>
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginLeft: '0 auto',
        width: '100%',
      }}
    >
      <h2>
        {contentfulProduct.name} -{' '}
        <span style={{ color: '#ccc' }}>
          Added on {contentfulProduct.createdAt}
        </span>
      </h2>
      <h4>${contentfulProduct.price}</h4>
      <p>{contentfulProduct.description}</p>
      <Img
        style={{
          margin: '0 auto',
          maxWidth: 600,
        }}
        src={contentfulProduct.image}
      />
    </div>
    <Link to="/products">Go to Products Page</Link>
  </Layout>
)

export const query = graphql`
  query ($slug: String!) {
    contentfulProduct(slug: { eq: $slug }) {
      name
      price
      description
      createdAt(formatString: "MMMM Do, YYYY, h:mm:ss a")
      image {
        file {
          url
        }
      }
    }
  }
`

export default ProductTemplate
