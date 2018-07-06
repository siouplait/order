import React from 'react'
import { actions } from '../reduce/reducer'

import Button from '../components-modules/Button'

import btnAdding from '../icon/btn_adding.svg'
import btnRemove from '../icon/btn_remove.svg'

import './SlideItem.css'

const getQty = (product, order) => {
  if (!product) return 0
  const orderItem = order.find(o => o.id === product.id)
  if (!orderItem) return 0
  return orderItem.qty
}

const SlideItem = ({ place, order, product, itemOpen }) => 
  <div className="s-block-slide-item" style={{ transform: itemOpen ? 'translate(0%)' : 'translate(100%)' }}>
    <div className="s-thumbnail-slide s-mt-1">
      <img
        src={product.custom_image && product.custom_image !== null ? product.custom_image
          : place.logo && place.logo.small}
        style={{width: '9em'}}
        alt="item-im"
      />
      <p>{product.custom_name && product.custom_name}</p>
      <h4 style={{ margin: '0' }}>{product.price && product.price.toFixed(2)} €</h4>
      <div className="s-slide-description">
        <p>{product.description}</p>
      </div>
    </div>
    <div className="s-slide-item-form">
      <div className="s-com-item s-mt-6">
        <h4 style={{ margin: '0' }}>Commentaire :</h4>
        <textarea
          style={{border: '1px solid silver'}}
          cols="25"
          rows="4"
          placeholder="Sauce ? allergie ? autre ...
          (vous avez 140 caractères)"
        />
      </div>

      <div className="s-item-count s-mt-7 s-mr-5">
        <Button action={() => actions.updateOrder(product, -1)} icon={btnRemove} iconHeight="3em" />
        <p>x {getQty(product, order)}</p>
        <Button action={() => actions.updateOrder(product, 1)} icon={btnAdding} iconHeight="3em" />
      </div>
    </div>
  </div>

export default SlideItem
