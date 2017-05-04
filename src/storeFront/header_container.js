import Header_Component from './header_component';
import { connect } from 'react-redux';
import { toggleCart } from '../actions';

let mapStateToProps = (state) => {
  return {
    showCart: state.storeFront.showCart
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    onShowCartClick: () => dispatch(toggleCart())
  }
}

let Header_Container = connect(
  mapStateToProps,
  mapDispatchToProps
) (Header_Component)

export default Header_Container;