export default function initialSiteData(state = {}, action) {
  if (action.type === 'GET_JSON_DATA') {
    return Object.assign({}, state, action.initialSiteData)
  }
  return state
}
