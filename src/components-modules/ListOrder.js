import React from 'react'
import { actions } from '../reduce/reducer'
import Button from './Button'
import './ListOrder.css'

const ListOrder = ({ list }) =>
  <div className="s-block-list-order">
    {console.log(list)}
    <table className="s-table-order">
      <thead>
        <tr>
          <th className="s-t-qte">QTE</th>
          <th className="s-t-article">ARTICLE</th>
          <th className="s-t-price">PRIX UNIT</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {list.map((item, index) =>
          <tr key={`list-${index}`}>
            <td className="s-t-qte">{item.qty}</td>
            <td className="s-t-article">{item.custom_name}</td>
            <td className="s-t-price">{(item.price).toFixed(2)} €</td>
            <td>
              <Button
                text="Modifier"
                className="s-simple"
                action={() => actions.switchItem(item)}
              />
            </td>
          </tr>
        )}
      </tbody>
    </table>
  </div>

export default ListOrder
