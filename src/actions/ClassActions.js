import axios from 'axios';

import { CREATE_CLASS, FLASH_MESSAGE, LG_SHOW, FETCH_CLASS_DATA } from './types'

export const toggleLgShow = (data) => {
    return {
        type: LG_SHOW,
        payload: data
    }
}

export const createClass = ({ className, classImage }) => {
    return (dispatch) => {
        dispatch({type: CREATE_CLASS})        
        const data = new FormData()
        data.append('className', className)
        data.append('classImage', classImage)
        axios.post("http://localhost:5000/class/teacher", data)
        .then(res => {
            console.log(res.data)
            dispatch(errorMessage({message: res.data.message }))                    
        })
        .catch((error) => {
            if (error.message === "Network Error"){
                dispatch(errorMessage({message: "connect to internet" }))                    
            }
            dispatch(errorMessage({message: error.response.data.message }))
        })
    }  
}

export const fetchClassData = () => {
    return (dispatch) => {
            axios.get('http://localhost:5000/class/teacher')
            .then((res)=> {
                dispatch(getClassData(res.data))                                    
            })
            .catch((error) => {
                if (error.message === "Network Error"){
                dispatch(errorMessage({message: "connect to internet" }))                    
                }
                dispatch(errorMessage({message: error.response.data.message }))
            })
    }
}

export const success = (data) => {
    return {
        type: FLASH_MESSAGE,
        payload: data
    }
}

export const errorMessage = (data) => {
    return {
        type: FLASH_MESSAGE,
        payload: data
    }
}

export const getClassData = (data) => {
    return {
        type: FETCH_CLASS_DATA,
        payload: data
    }
}