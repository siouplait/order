import React from 'react'
import './Shoppingcart.css'
import Bell from '../icon/bell_order.png'

const Shoppingcart = ({ children, ...rest }) =>
    <div className="s-block-cart">
        <img style={{ height: "3em" }} src={Bell} alt="BellIcon"/>
    </div>

export default Shoppingcart