let initialState = {
  cartTotal: 0,
  cartItems: [],
  showCart: false,
  items: [{
    title: 'shoes',
    text: 'some description about shoes',
    price: 55
  },
  {
    title: 'elephant',
    text: 'some description about elephant',
    price: 789
  },
  {
    title: 'boat',
    text: 'some description about boat',
    price: 5466
  },
  {
    title: 'car',
    text: 'some description about car',
    price: 3545
  },
  {
    title: 'cap',
    text: 'some description about cap',
    price: 23
  },
  {
    title: 'milk',
    text: 'some description about milk',
    price: 3
  },
  {
    title: 'designer bottle',
    text: 'some description about designer bottle',
    price: 54
  },
  ]
}

const storeFront = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      //dipatch 'calculate cart' action here  
      return Object.assign({}, state, { cartItems: addToCart(itemById(action.id, state.items), state.cartItems), cartTotal: calcCartTotal(state.cartItems) })
    case 'CHECKOUT':
      console.log('checkout', state.cartItems)
    case 'TOGGLE_CART':
      return Object.assign({}, state, { showCart: !state.showCart})
    default:
      return state
  }
}

export default storeFront;

function itemById(id, items) {
  return items[id];
}

function addToCart(item, cart) {
  let newCart = Array.from(cart);
  newCart.push(item);
  return newCart;
}

function calcCartTotal(cartItems) {   
  var total = cartItems.reduce(function (acc, item) {
    return acc + item.price
  }, 0)
  return total
}