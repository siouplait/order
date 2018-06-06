import React from 'react'
import Button from '../components-modules/Button'

import btnBurger from '../icon/btn_burger.svg'
import btnBack from '../icon/btn_back.svg'
import './Button.css'
import './Nav.css'

const Nav = ({ children, ...rest }) =>
  <div {...rest}>{children}
    <Button className="s-btn-icon">
      <img className="s-btn-img-resize" src={btnBurger} alt="button burger" />
    </Button>
    <Button className="s-btn-icon">
      <img className="s-btn-img-resize" src={btnBack} alt="button back" />
    </Button>
    <h1>Siouplaît!</h1>
  </div>

export default Nav
