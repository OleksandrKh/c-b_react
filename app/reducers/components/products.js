export default function products(state = [], action) {
  if (action.type === 'CREATE_PRODUCTS_STORE') {
    return [
      ...state,
      action.products
    ]
  }
  return state
}
