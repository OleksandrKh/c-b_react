export default function currency(state = 'dollars', action) {
  if (action.type === 'SET_CURRENCY') {
    return state = action.currencyDropdown
  }
  return state
}
