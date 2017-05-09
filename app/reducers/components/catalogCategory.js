export default function catalogCategory(state = 'all', action) {
  if (action.type === 'SET_CATALOG_CATEGORY') {
    return state = action.category
  }
  return state
}
