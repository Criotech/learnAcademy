import axios from 'axios';

import { SIGN_UP } from './types'

export const createClass = ({ email, password, role, fullName }) => {
    return (dispatch) => {
        dispatch({type: SIGN_UP})        
        axios.post("http://localhost:5000/users/signup", { email, password, role, fullName })
        .then(user => console.log(user))
        .catch((error) => {
        })
    }  
}