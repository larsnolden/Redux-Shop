export const addToCart = (item) => {
  return {
    type: 'ADD_TO_CART',
    item
  }
}

export const removeFromCart = (item) => {
  return {
    type: 'REMOVE_FROM_CART',
    item
  }
}


export const cartTotal = () => {
  return {
    type: 'CALC_CART_TOTAL'
  }
}

export const checkout = () => {
  return {
    type: 'CHECKOUT'
  }
}

export const toggleCart = () => {
  return {
    type: 'TOGGLE_CART'
  }
}

export const addToCart_update = (item) => {
  return (dispatch) => {
    dispatch(addToCart(item))
    dispatch(cartTotal())
  }
}

export const removeFromCart_update = (item) => {
  return (dispatch) => {
    dispatch(removeFromCart(item))
    dispatch(cartTotal())
  }
}