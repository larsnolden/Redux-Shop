import { connect } from 'react-redux';
import { checkout } from '../actions'

import Cart_Component from './cart_component';

import {
  addToCart_update,
  removeFromCart_update
} from '../actions';

const mapStateToProps = (state) => {
  return {
    cartItems: state.storeFront.cartItems,
    cartTotal: state.storeFront.cartTotal
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onCheckoutClick: () => dispatch(checkout()),
    onIncreaseItemClick: (item) => dispatch(addToCart_update(item)),
    onDecreaseItemClick: (item) => dispatch(removeFromCart_update(item))
  }
}

let Cart_Container = connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart_Component);

export default Cart_Container;