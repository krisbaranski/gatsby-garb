import * as React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

import gatsbyLogo from '../images/gatsby-icon.png'

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `rebeccapurple`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      {/* Title / Logo Area */}
      <span style={{ display: 'flex', alignItems: 'center' }}>
        <img
          src={gatsbyLogo}
          alt="Gatsby Logo"
          style={{
            width: 50,
            margin: '0 10px',
            border: '4px solid white',
            borderRadius: '50%',
          }}
        />
        <h1 style={{ margin: 0 }}>
          <Link
            to="/"
            style={{
              color: `white`,
              textDecoration: `none`,
            }}
          >
            {siteTitle}
          </Link>
        </h1>
      </span>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
