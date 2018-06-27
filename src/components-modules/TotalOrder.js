import React from 'react'
import './TotalOrder.css'

const TotalOrder = ({list}) =>
  <div className="s-total-price">
    <p style={{ fontWeight: 'bold' }}>TOTAL
      <span style={{ fontWeight: 'normal' }}> : {list.reduce((a, b) => a + (b.price * b.qte), 0).toFixed(2)} €</span>
    </p>
  </div>

export default TotalOrder