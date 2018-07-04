import React from 'react'
import { actions } from '../reduce/reducer'
import Button from '../components-modules/Button'

import btnBurger from '../icon/btn_burger.svg'
import btnBack from '../icon/btn_back.svg'
import './Button.css'
import './Nav.css'

const Nav = ({ actionBurger, actionBack, children, ...rest }) =>
  <div {...rest}>
    {children}
    <Button className="s-nav-btn-back" action={actionBack} icon={btnBack} iconHeight="3.2em" />
    <h1>Siouplaît!</h1>
    <Button className="s-nav-btn-burger" action={() => actions.switchMenu()} icon={btnBurger} iconHeight="2.7em" />
  </div>

export default Nav
