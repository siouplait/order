import React from 'react'
import { Link } from '@reach/router'
import { actions } from '../reduce/reducer'
import Bell from '../icon/bell_order.png'
import './Shoppingcart.css'

const Shoppingcart = ({ nbrOrder }) =>
  <div className="s-block-cart" style={{ display: nbrOrder > 0 ? 'flex' : 'none' }}>
    <Link to="/commande-page" onClick={actions.closeSlide}>
      <img style={{ height: '3em' }} src={Bell} alt="BellIcon" />
      <h3>{nbrOrder}</h3>
    </Link>
  </div>
export default Shoppingcart
