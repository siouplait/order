import React from 'react'
import './Nav.css'

const Nav = ({ children, ...rest }) =>
  <div {...rest}>{children}</div>

export default Nav
