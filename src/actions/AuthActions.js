import axios from 'axios';
import jwt from 'jsonwebtoken';

import setAuthorizationToken from '../utils/setAuthorizationToken'
import { EMAIL_CHANGED, PASSWORD_CHANGED, FULL_NAME_CHANGED, SIGN_UP, 
    SET_CURRENT_USER, AUTH_ERROR } from './types';


export const emailChanged = (text) => {
    return {
        type: EMAIL_CHANGED,
        payload: text
    }  
}

export const passwordChanged = (text) => {
    return {
        type: PASSWORD_CHANGED,
        payload: text
    }
}

export const fullNameChanged = (text) => {
    return {
        type: FULL_NAME_CHANGED,
        payload: text
    }
}

export const signup = ({ email, password, role, fullName }) => {
    return (dispatch) => {
        dispatch({type: SIGN_UP})        
        axios.post("http://localhost:5000/users/signup", { email, password, role, fullName })
        .then(user => console.log(user))
        .catch((error) => {
            dispatch(errorMessage({message: error.response.data.message }))
        })
    }  
}

export const login = ({ email, password }) => {
    return (dispatch) => {
        dispatch({type: SIGN_UP})        
        axios.post("http://localhost:5000/users/login", { email, password })
        .then(res => {
            const token = res.data.token;
            localStorage.setItem('jwtToken', token);
            setAuthorizationToken(token);
            dispatch(setCurrentUser(jwt.decode(token)))
        })
        .catch(error => {
            dispatch(errorMessage({message: error.response.data.message }))
        })
    }  
}

export const logout = () => {
    return dispatch => {
        localStorage.removeItem('jwtToken');
        setAuthorizationToken(false);
        dispatch(setCurrentUser({}))
    }
}


export const setCurrentUser = (user) => {
    return {
        type: SET_CURRENT_USER,
        user
    }
}

export const errorMessage = (data) => {
    return {
        type: AUTH_ERROR,
        payload: data
    }
}