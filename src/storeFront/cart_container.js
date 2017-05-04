import { connect } from 'react-redux';
import { checkout } from '../actions'

import Cart_Component from './cart_component';

const mapStateToProps = (state) => {
  return {
    cartItems: state.storeFront.cartItems,
    cartTotal: state.storeFront.cartTotal
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onCheckoutClick: () => dispatch(checkout())
  }
}

let Cart_Container = connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart_Component);

export default Cart_Container;