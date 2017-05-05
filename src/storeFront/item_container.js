import React from 'react';
import {
  connect
} from 'react-redux';

import Grid_Component from './grid_component';
import {
  addToCart_update
} from '../actions';

const mapStateToProps = (state) => {
  return {
    items: state.storeFront.items
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onItemClick: (item) => {
      dispatch(addToCart_update(item))
    }
  }
}

let Item_Container = connect(
  mapStateToProps,
  mapDispatchToProps
)(Grid_Component);

export default Item_Container;