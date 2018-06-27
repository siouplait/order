import React from 'react'

import Button from '../components-modules/Button'
import LinkTemplate from '../components-modules/LinkTemplate'

import logoHeart from '../icon/logo_heart.svg'
import logoThumb from '../icon/like_thumb.png'
import downArrow from '../icon/Down_arrow_icon.svg'

import './SlideMenu.css'

const SlideMenu = () =>
  <div className="s-block-slide-menu">

    <div className="s-menu-landscape">
      <img className="s-mt-5" src={logoHeart} style={{ width: '4em', borderRadius: '100px', backgroundColor: 'silver' }} />
      <p>Say my name</p>
    </div>

    <LinkTemplate text="MES SPOTS" logo={logoHeart} imgHeight="1.3em" style={{filter: 'invert(100%)', color:'black'}}/>

    <div>
      <ul className="s-link-menu">
        <li><a href="">Historique des commandes</a></li>
        <li><a href="">Moyens de paiement</a></li>
        <li><a href="">Aide</a></li>
        <li><a href="">Paramètres</a></li>
        <li><a href="">Mentions légales</a></li>
      </ul>
    </div>

    <div className="s-menu-landscape s-fixed-b">
      <p className="s-question-input" >Pas Siouplait dans ce spot ? <br /> on arrive !</p>
      <div className="s-form-menu">
        <input className="s-input-menu" type="text" placeholder="Nom du Spot ..." />
        <Button classIcon="s-form-menu-btn" icon={downArrow} iconHeight="2em" />
      </div>
      <Button icon={logoThumb} iconHeight="2em" />
      <p><span className="s-menu-year" >©</span> Siouplaît - <span className="s-menu-year">2018</span></p>
    </div>

  </div>

export default SlideMenu
