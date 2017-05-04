import React from 'react';
import {
  connect
} from 'react-redux';

import Grid_Component from './grid_component';
import {
  addToCart
} from '../actions';

const mapStateToProps = (state) => {
  return {
    items: state.storeFront.items
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onItemClick: (id) => {
      dispatch(addToCart(id))
    }
  }
}

let Item_Container = connect(
  mapStateToProps,
  mapDispatchToProps
)(Grid_Component);

export default Item_Container;