import React from 'react'
import { graphql, Link } from 'gatsby'
import Img from 'gatsby-image'

import Layout from '../components/layout'

const Products = ({ data: { allContentfulProduct } }) => (
  <Layout>
    <div>
      {allContentfulProduct.edges.map(({ node: product }) => (
        <div key={product.id}>
          <h2>Garb Products </h2>
          <Link
            to={`/products/${product.slug}`}
            style={{
              textDecoration: 'none',
              color: '#551a8b',
            }}
          >
            <h3>
              {product.name} • {''}
              <span
                style={{
                  color: '#f60',
                  fontSize: '1.2rem',
                  fontWeight: 300,
                }}
              >
                ${product.price}
              </span>
            </h3>
          </Link>
          <Img style={{ maxWidth: 600 }} src={product.image.file.url} />
        </div>
      ))}
    </div>
  </Layout>
)

export const query = graphql`
  {
    allContentfulProduct {
      edges {
        node {
          id
          slug
          name
          price
          image {
            file {
              url
            }
          }
        }
      }
    }
  }
`

export default Products
