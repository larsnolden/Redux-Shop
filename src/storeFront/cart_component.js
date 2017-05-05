import React from 'react';
import './cart.css'

let Cart_Component = ({ cartItems, cartTotal, onCheckoutClick, onIncreaseItemClick, onDecreaseItemClick }) => {
  return (
    <div className={"Cart"}>
      <div className={"section"} >
        <h4>Cart</h4>
      </div>
      {cartItems.map(item => <div className={"outerButtonDiv"}>{item.title.toUpperCase()} | {item.price} x {item.count} = {item.priceTotal}$<button onClick={() => onIncreaseItemClick(item)} className={"countButton"} >+</button><button onClick={() => onDecreaseItemClick(item)} className={"countButton"}>-</button></div>)}
      <button className={"checkoutButton"} onClick={onCheckoutClick}>chekout</button>
    </div>
  )
}

export default Cart_Component;