import React from 'react'
import { graphql, StaticQuery, Link } from 'gatsby'

import Layout from '../components/layout'

const getImageData = graphql`
  {
    allFile {
      edges {
        node {
          relativePath
          id
          size
        }
      }
    }
  }
`

export default () => (
  <Layout>
    <h1>Hello from Page 3</h1>
    <h3>Image File Data</h3>
    <StaticQuery
      query={getImageData}
      render={data => (
        <table>
          <thead>
            <tr>
              <th>Relative Path</th>
              <th>ID</th>
              <th>Size</th>
            </tr>
          </thead>
          <tbody>
            {data.allFile.edges.map(({ node }, index) => (
              <tr key={index}>
                <td>{node.relativePath}</td>
                <td>{node.id}</td>
                <td>{node.size}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    />
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)
