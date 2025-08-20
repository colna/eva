import React from 'react'
import PropTypes from 'prop-types'
import { Link } from '@kfe/eva'
import './Logo.css'

class Logo extends React.PureComponent {
  static propTypes = {
    name: PropTypes.string
  }

  render() {
    return (
      <Link to="/">
        <div className="App-logo">{this.props.name}</div>
      </Link>
    )
  }
}

export default Logo
