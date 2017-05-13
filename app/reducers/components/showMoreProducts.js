export default function showMoreProducts(state = 4, action) {
  switch (action.type) {
    case 'SHOW_MORE_PRODUCTS':
      return state = action.showNumberOfProducts
      break;
    default:
      return state;
  }
}
