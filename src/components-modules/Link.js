import React from 'react'
import './Link.css'

const Link = ({ children, ...rest }) =>
  <a {...rest} >{children}</a>

export default Link
