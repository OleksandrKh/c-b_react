export default function language(state = 'en', action) {
  if (action.type === 'SET_LANGUAGE') {
    return state = action.language
  }
  return state
}
