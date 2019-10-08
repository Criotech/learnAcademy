import axios from 'axios';

import { CREATE_LECTURE, FLASH_MESSAGE, FETCH_LECTURES_DATA, DELETE_LECTURE } from './types'

export const createLecture = ({ classId, title, lecture }) => {
    return (dispatch) => {
        dispatch({type: CREATE_LECTURE, payload: true})        
        const data = new FormData()
        data.append('title', title)
        data.append('lecture', lecture)
        axios.post(`http://localhost:5000/lectures/teacher/${classId}`, data)
        .then(res => {
            dispatch(flashMessage({message: res.data.message }))
            dispatch(getLectures(classId))
        })
        .catch((error) => {
            if (error.message === "Network Error"){
                dispatch(flashMessage({message: "connect to internet" }))                    
            }
            dispatch(flashMessage({message: error.response.data.message }))
            console.log(error.response)
        })
    }  
}


export const getLectures = (classId) => {
    return (dispatch) => {
            axios.get(`http://localhost:5000/lectures/teacher/${classId}`)
            .then((res)=> {
                dispatch(fetchLecturesData(res.data))                                    
            })
            .catch((error) => {
                if (error.message === "Network Error"){
                dispatch(flashMessage({message: "Network Error" }))                    
                }
                dispatch(flashMessage({message: error.response.data.message }))
            })
    }
}

export const deleteLecture = ({ classId, lectureId }) => {
     return (dispatch) => {
        dispatch({type: DELETE_LECTURE})
         axios.delete(`http://localhost:5000/lectures/teacher/${classId}/${lectureId}`)
        .then(res => {
            dispatch(flashMessage({message: res.data.message }))                        
            dispatch(getLectures(classId))                                                                                            
        })
        .catch(error => {
            if (error.message === "Network Error"){
            dispatch(flashMessage({message: "connect to internet" }))                    
            }
            dispatch(flashMessage({message: error.response.data.message }))
        })
    }
}

export const flashMessage = (data) => {
    return {
        type: FLASH_MESSAGE,
        payload: data
    }
}

export const fetchLecturesData = (data) => {
    return {
        type: FETCH_LECTURES_DATA,
        payload: data
    }
}
