import React from 'react'
import './PageTemplate.css'

const PageTemplate = ({ children, ...rest }) =>
  <div {...rest}>{children}</div>

export default PageTemplate
