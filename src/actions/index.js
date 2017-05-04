export const addToCart = (id) => {
  return {
    type: 'ADD_TO_CART',
    id
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