import axios from 'axios';

import { CREATE_CLASS, FLASH_MESSAGE, LG_SHOW, FETCH_CLASS_DATA, DELETE_CLASS } from './types'

export const toggleLgShow = (data) => {
    return {
        type: LG_SHOW,
        payload: data
    }
}

export const createClass = ({ className, classImage }) => {
    return (dispatch) => {
        dispatch({type: CREATE_CLASS, payload: true})        
        const data = new FormData()
        data.append('className', className)
        data.append('classImage', classImage)
        axios.post("http://localhost:5000/class/teacher", data)
        .then(res => {
            dispatch(flashMessage({message: res.data.message }))
            dispatch(fetchClassData())                                                                    
        })
        .catch((error) => {
            if (error.message === "Network Error"){
                dispatch(flashMessage({message: "connect to internet" }))                    
            }
            dispatch(flashMessage({message: error.response.data.message }))
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
                dispatch(flashMessage({message: "Network Error" }))                    
                }
                // dispatch(flashMessage({message: error.response.data.message }))
            })
    }
}

export const deleteClass=(classId) => {
    return (dispatch) => {
        dispatch({type: DELETE_CLASS})
         axios.delete(`http://localhost:5000/class/teacher/${classId}`)
        .then(res => {
            dispatch(flashMessage({message: res.data.message }))                        
            dispatch(fetchClassData())                                                                                            
        })
        .catch(error => {
            if (error.message === "Network Error"){
            dispatch(flashMessage({message: "connect to internet" }))                    
            }
            dispatch(flashMessage({message: error.response.data.message }))
        })
    }
}

//student class actions 
export const joinClass = (classId ) => {
    return (dispatch) => {
        dispatch({type: CREATE_CLASS, payload: true})        
   
        axios.post("http://localhost:5000/class/student", {classId})
        .then(res => {
            dispatch(flashMessage({message: res.data.message }))
            dispatch(fetchStudentClassData())                                                                    
        })
        .catch((error) => {
            if (error.message === "Network Error"){
                dispatch(flashMessage({message: "connect to internet" }))                    
            }
            dispatch(flashMessage({message: error.response.data.message }))
        })
    }  
}

export const fetchStudentClassData = () => {
    return (dispatch) => {
            axios.get('http://localhost:5000/class/student')
            .then((res)=> {
                console.log(res.data)
                dispatch(getClassData(res.data))                                    
            })
            .catch((error) => {
                if (error.message === "Network Error"){
                dispatch(flashMessage({message: "Network Error" }))                    
                }
                // dispatch(flashMessage({message: error.response.data.message }))
                console.log(error.response)
            })
    }
}

export const success = (data) => {
    return {
        type: FLASH_MESSAGE,
        payload: data
    }
}

export const flashMessage = (data) => {
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
