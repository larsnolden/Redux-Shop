import React from 'react';
import './header.css'

import Cart_Container from './cart_container';

let Header_Component = ({ onShowCartClick, showCart, cartTotal }) => {
  return (
    <div className={"header"} >
      <div className={'cartOverview'}>
        <h1>{cartTotal}$</h1>
        <button onClick={onShowCartClick} className={'cartButton'}>
          <span className={"md-30"} > Cart <i className={"material-icons md-light md-30"}>shopping_cart</i></span>
        </button>
      </div>
      {showCart ? <Cart_Container /> : null}
    </div >
  )
}

export default Header_Component;