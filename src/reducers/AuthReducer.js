import { EMAIL_CHANGED, PASSWORD_CHANGED, FULL_NAME_CHANGED, SET_CURRENT_USER, AUTH_ERROR } from '../actions/types';
import _  from 'lodash'

const INITIAL_STATE = { email: '', password: '', fullName: '', isAuthenticated: false, user: {}, message: '', status: false };

export default (state = INITIAL_STATE, action) => {

    switch (action.type) {
        case EMAIL_CHANGED:
            return { ...state, message: '', email: action.payload }
        case PASSWORD_CHANGED:
            return { ...state, message: '', password: action.payload }
       case FULL_NAME_CHANGED:
            return { ...state, message: '', fullName: action.payload }
        case SET_CURRENT_USER: 
            return { ...state, isAuthenticated: !_.isEmpty(action.user), user: action.user }
        case AUTH_ERROR:
            return { ...state, ...INITIAL_STATE, message: action.payload.message }
        default:
            return state
    }
}
