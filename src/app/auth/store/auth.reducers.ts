import * as AuthActions from './auth.actions';

export interface State {
  token: string,
  authenticated: boolean
}

//Initial state 
const initalState: State = {
  token: null,
  authenticated: false
}

export function authReducer(state = initalState, action: AuthActions.AuthActions) {
  switch (action.type) {
    case AuthActions.SIGN_UP:
    case AuthActions.SIGN_IN:
      return {
        ...state,
        authenticated: true
      }

    case AuthActions.LOGOUT:
      return {
        ...state,
        token: null,
        authenticated: false
      }
    case AuthActions.SET_TOKEN:
      return {
        ...state,
        token: action.payload,
      }

    default:
      return state;
  }
}
