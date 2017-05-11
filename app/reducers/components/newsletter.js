export function getUserEmail(state = '', action) {
  if (action.type === 'GET_USER_EMAIL') {
    return state = action.email
  }
  return state
}

export function sendUserEmail(state = [], action) {
  if (action.type === 'SEND_USER_EMAIL') {
    return [
      ...state,
      action.email
    ]
  }
  return state
}
