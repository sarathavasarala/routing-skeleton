import React from 'react'
import { Link, IndexLink } from 'react-router'
import './main.scss'

export default React.createClass({
  render() {
    return (
      <div>
        <div className="header">
          <div className="container">
            <div className="link-wrapper">
              <IndexLink to="/" activeClassName="active" onlyActiveOnIndex={true}> Home </IndexLink>
              <Link activeClassName="active" to = "/about"> About </Link>
              <Link activeClassName="active" to = "/profile"> Profile </Link>
            </div>
          </div>
        </div>
        <div className="container">
          {this.props.children}
        </div>
      </div>
    )
  }
})