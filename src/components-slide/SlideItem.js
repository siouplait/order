import React from 'react'

import Button from '../components-modules/Button'
import LinkTemplate from '../components-modules/LinkTemplate'
import Itemblock from '../components-modules/Itemblock'

import btnAdding from "../icon/btn_adding.svg"
import btnRemove from "../icon/btn_remove.svg"

import './SlideItem.css'

const SlideItem = ({ src, dataItem, price }) =>
  <div className="s-block-slide-item">

    <div className="s-thumbnail-slide s-mt-1">
      <img src={src} style={{width: '9em'}} alt="item image" />
      <p>{dataItem}</p>
      <h4 style={{margin: '0'}}>{price}</h4>
      <p>
        zefzrfrf" zrgerg gzrgez zefze zefzef
        zefzef zefze zefzefzefethrth etrhzrth
      </p>
    </div>

    <div className="s-slide-item-form">
      <div className="s-com-item s-mt-6">
        <h4 style={{ margin: '0' }}>Commentaire :</h4>
        <textarea name="" id="" cols="25" rows="4">
          Sauce ? allergie ? autre ...
          (vous avez 140 caractères)
      </textarea>
      </div>

      <div className="s-item-count s-mt-7">
        <Button icon={btnRemove} iconHeight="3em" />
        <p>N°</p>
        <Button icon={btnAdding} iconHeight="3em" />
      </div>
    </div>
  </div>

export default SlideItem
