import axios from 'axios';

import { CREATE_LECTURE, FLASH_MESSAGE, FETCH_LECTURES_DATA, DELETE_LECTURE, GET_VIDEO_URL } from './types'

export const createLecture = ({ classId, title, lecture }) => {
    return (dispatch) => {
        dispatch({type: CREATE_LECTURE, payload: true})        
        const data = new FormData()
        data.append('title', title)
        data.append('lecture', lecture)
        axios.post(`https://learnacademyapi.herokuapp.com/lectures/teacher/${classId}`, data)
        .then(res => {
            dispatch(flashMessage({mes: res.data.message }))
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
            axios.get(`https://learnacademyapi.herokuapp.com/lectures/teacher/${classId}`)
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
         axios.delete(`https://learnacademyapi.herokuapp.com/lectures/teacher/${classId}/${lectureId}`)
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

//students gets the lectures for a particular class he is registered to 
export const studentsGetLectures = (classId) => {
    return (dispatch) => {
        axios.get(`https://learnacademyapi.herokuapp.com/lectures/student/${classId}`) 
        .then(res => {
            dispatch(fetchLecturesData(res.data))             
        })
        .catch((error) => {
            console.log(error)
        })
}
}

//pass video url to parent
export const passVideoToParent = (data) => {
    return {
        type: GET_VIDEO_URL,
        payload: data
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
