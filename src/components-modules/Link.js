import React from 'react'

const Link = ({ children, ...rest }) =>
  <a {...rest} >{children}</a>

export default Link
