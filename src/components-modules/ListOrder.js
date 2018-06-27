import React from 'react'
import LinkTemplate from './LinkTemplate'
import './ListOrder.css'

const ListOrder = ({list}) =>
  <div className="s-block-list-order">
    <table className="s-table-order">
      <thead>
        <tr>
          <th className="s-t-qte">QTE</th>
          <th className="s-t-article">ARTICLE</th>
          <th className="s-t-price">PRIX</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {list.map((item, index) =>
          <tr key={index}>
            <td className="s-t-qte">{item.qte}</td>
            <td className="s-t-article">{item.name}</td>
            <td className="s-t-price">{(item.price * item.qte).toFixed(2)} €</td>
            <td><LinkTemplate className="s-td-modif" text="Modifier"/></td>
          </tr>
        )}
      </tbody>
    </table>
  </div>

export default ListOrder
