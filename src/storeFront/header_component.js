import React from 'react';
import './header.css'

import Cart_Container from './cart_container';

let Header_Component = ({onShowCartClick, showCart}) => {
  return (
    <div className="header" >
     <div onClick={onShowCartClick} className={'cartButton'}>
      <i className="material-icons md-light md-40">shopping_cart</i>
      {showCart ? <Cart_Container/> : null}
    </div>
    </div>
  )
}

export default Header_Component;