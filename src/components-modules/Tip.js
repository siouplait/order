import React from 'react'
import Button from '../components-modules/Button'
import imgTip from '../icon/pourboire.png'
import './Tip.css'

const Tip = () =>
  <div className="s-block-tip s-mt-5">
    <div>
      <input className="s-input-tip s-input-t-1" type="text" value="0" disabled/>
      <input className="s-input-tip s-input-t-2" type="text" value="0" disabled/>
      <input className="s-input-tip s-input-t-3" type="text" value="0" disabled/>
      <input className="s-input-tip s-input-t-4" type="text" value="0" disabled/>
      <img src={imgTip} alt="tip img" style={{ width: '35vh' }} />
    </div>
    <label htmlFor="s-input-btn">click</label>
    <input id="s-input-btn" type="number"/>
    <h2 className="s-m-0 s-mt-2">Un pourboire Siouplaît ?</h2>
    <p className="s-mt-0">C'est pas obligatoire, mais ça fait toujours plaisir</p>
  </div>

export default Tip