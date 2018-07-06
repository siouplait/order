import React from 'react'
import imgTip from '../icon/pourboire.png'
import './Tip.css'

const addNumber = (evt) => {
  const num = evt.target.value
  Array.from(document.getElementsByClassName('s-input-tip-select')).forEach((e, i) => {
    e.value = num[i] ? num[i] : 0
  })
}

const Tip = ({tip}) =>
  <div className="s-block-tip s-mt-3">
    <div className="s-t-tip">

      {/* <input type="number" id="s-input-tip" style={{ display: 'block' }} onChange={actions.upTip} /> */}
      <label className="s-label-tips" htmlFor="s-input-tip"></label>

      <img src={imgTip} alt="tip img" style={{ width: '200px' }} />
      <input className="s-input-tip1 s-input-tip s-input-tip-select" type="number" placeholder={0}/>
      <input className="s-input-tip2 s-input-tip s-input-tip-select" type="number" placeholder={0}/>
      <input className="s-input-tip3 s-input-tip s-input-tip-select" type="number" placeholder={0}/>
      <input className="s-input-tip4 s-input-tip s-input-tip-select" type="number" placeholder={0}/>
      <input className="s-input-tip5 s-input-tip" id="s-input-tip" type="number" placeholder={0} onInput={addNumber}/>
    </div>

    <h2 className="s-m-0 s-mt-2">Un pourboire Siouplaît ?</h2>
    <p className="s-mt-0 s-mx-2">C'est pas obligatoire, mais ça fait toujours plaisir</p>
  </div>

export default Tip
