import React from 'react';
import Item_Component from './item_component';
import './grid.css'

let Grid_Component = ({items, onItemClick}) => {
  return(
    <div className="grid_component">
      {items.map(item => <Item_Component key={items.indexOf(item)} title={item.title} text={item.text} price={item.price} onItemClick={onItemClick} id={items.indexOf(item)} />)}
    </div>
  )
}

export default Grid_Component;