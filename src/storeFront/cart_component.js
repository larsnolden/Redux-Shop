import React from 'react';
import './cart.css'

let Cart_Component = ({ cartItems, cartTotal, onCheckoutClick }) => {
  return (
    <div className={'Cart'}>
      <h4>Cart</h4>
      <ul>
        {cartItems.map(item => <li>{item.text}</li>)}
      </ul>
      <h5>Total: {cartTotal}$</h5>
      <button onClick={onCheckoutClick}>chekout</button>
    </div>
  )
}

export default Cart_Component;