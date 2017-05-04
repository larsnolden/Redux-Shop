import React from 'react';
import './item.css'

let Item_Component = ({ title, text, price, onItemClick, id }) => {
  return (
    <div className='item' onClick={() => onItemClick(id)}>
      <h3>{title}</h3>
        <p>{text}</p>
        <span>{price}$</span>
    </div>
  )
}

export default Item_Component;