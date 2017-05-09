export default function shoppingCart(state = 0, action) {
  if (action.type === 'INCREASE_SHOPPING_CART') {
    return state += 1
  } else if (action.type === 'DECREASE_SHOPPING_CART') {
    if (state === 0) { return state}
    return state -=1
  }
  return state
}
