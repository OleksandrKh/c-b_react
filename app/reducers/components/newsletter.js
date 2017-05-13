export function sendUserEmail(state = [], action) {
  if (action.type === 'SEND_USER_EMAIL') {
    return [
      ...state,
      action.email
    ]
  }
  return state
}
