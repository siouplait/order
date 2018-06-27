import React from 'react'
import Nav from './Nav'
import './PageTemplate.css'

const PageTemplate = ({ nav, children, className, center }) => {
  return (
    <div className="s-main-block">
      { nav?<Nav className={`s-nav-menu ${nav}`} /> : ''}
      
      <div className={center ? `s-justify-content-center s-content-box ${className}` : `s-content-box ${className}`}>
        {children.map((e, i) => {
          return e.props.full ? e : <div key={`s-box-${i}`} className="s-box ">{e}</div>
        })}
      </div>
    </div>
  )
}

export default PageTemplate
