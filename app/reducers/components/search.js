export default function search(state = '', action) {
  if (action.type === 'SEARCH_DATA') {
    return state = action.search
  }
  return state
}
