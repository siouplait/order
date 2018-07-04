import React from 'react'
import './Shoppingcart.css'
import Bell from '../icon/bell_order.png'

const Shoppingcart = ({nbrOrder}) =>
  <div className="s-block-cart" style={{display: nbrOrder > 0 ? 'flex' : 'none'}}>
      <img style={{height: '3em'}} src={Bell} alt="BellIcon"/>
      <p>{nbrOrder}</p>
  </div>
export default Shoppingcart
