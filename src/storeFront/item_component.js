import React from 'react';
import './item.css'

let Item_Component = ({ title, text, price, onItemClick, item }) => {
  return (
    <div className='card'>
      <div className={"section"}><h3>{title}</h3></div>
      <p>{text}</p>
      <div className={"section price"}>{price}$</div>
      <button className={"addToCartButton"} onClick={() => onItemClick(item)}>Add to cart</button>
    </div>
  )
}

export default Item_Component;