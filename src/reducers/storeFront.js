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
      console.log(`state: ${JSON.stringify(state)}`);
      return Object.assign({}, state, { cartItems: addToCart(action.item, state.cartItems) })
    case 'REMOVE_FROM_CART':
      console.log(`state: ${JSON.stringify(state)}`);
      return Object.assign({}, state, { cartItems: removeFromCart(action.item, state.cartItems) })
    case 'CHECKOUT':
      console.log('checkout', state.cartItems)
    case 'TOGGLE_CART':
      return Object.assign({}, state, { showCart: !state.showCart })
    case 'CALC_CART_TOTAL':
      return Object.assign({}, state, { cartTotal: calcCartTotal(state.cartItems) })
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
  if (newCart.includes(item)) {
    let newItem = newCart[newCart.indexOf(item)];
    newItem.count += 1;
    newItem.priceTotal = newItem.price * newItem.count;
    return newCart;
  }
  else {
    item.count = 1;
    item.priceTotal = item.price;
    newCart.push(item);
    return newCart;
  }
}

function removeFromCart(item, cart) {
  let newCart = Array.from(cart);
  if (newCart.includes(item)) {
    if (item.count >= 2) {
      let newItem = newCart[newCart.indexOf(item)];
      newItem.count -= 1;
      newItem.priceTotal = newItem.price * newItem.count;
      return newCart;
    }
    else {
      newCart.splice(newCart[newCart.indexOf(item)], 1);
      return newCart;
    }
  }
}

function calcCartTotal(cartItems) {
  var total = cartItems.reduce(function (acc, item) {
    return acc + item.priceTotal
  }, 0)
  return total
}