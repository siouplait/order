import React from 'react'

const Nav = ({ children, ...rest }) =>
  <div {...rest}>{children}</div>

export default Nav
