import React from 'react'
import Nav from './Nav'
import './PageTemplate.css'

const PageTemplate = ({ nav, children, className }) => {
  return (
    <div className={` ${className} s-main-block`}>
      {nav ? <Nav full className={`s-nav-menu ${nav}`} /> : ''}
      <div className="s-content-main">
        <div className="s-content-box">
          {children.map((e, i) => {
            return e.props.full ? e : <div key={`s-box-${i}`} className="s-box">{e}</div>
          })
          }
        </div>
      </div>
    </div>
  )
}

export default PageTemplate
