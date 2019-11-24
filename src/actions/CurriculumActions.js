import axios from 'axios';

import { CREATE_CURRICULUM, FLASH_MESSAGE, FETCH_CURRICULUM_CONTENT, CURRICULUM_CONTENT_CHANGED } from './types'

export const contentChanged = (text) => {
    return {
        type: CURRICULUM_CONTENT_CHANGED,
        payload: text
    }  
}

export const createCurriculum = ({ classId, content }) => {
    return (dispatch) => {
        dispatch({type: CREATE_CURRICULUM, payload: true})        
        axios.post(`https://learnacademyapi.herokuapp.com/curriculum/teacher/${classId}`, {content})
        .then(res => {
            dispatch(flashMessage({message: res.data.message }))
            dispatch(getCurriculumData(classId))                                                                    
        })
        .catch((error) => {
            if (error.message === "Network Error"){
                dispatch(flashMessage({message: "connect to internet" }))    
            }
            dispatch(flashMessage({message: error.response.data.message }))
        })
    }  
}


export const getCurriculumData = (classId) => {
    return (dispatch) => {
            axios.get(`https://learnacademyapi.herokuapp.com/curriculum/teacher/${classId}`)
            .then((res)=> {
                dispatch(fetchCurriculumData(res.data[0].content)) 
            })
            .catch((error) => {
                if (error.message === "Network Error"){
                dispatch(flashMessage({message: "Network Error" }))                                    
                }
                // dispatch(flashMessage({message: error.response.data.message }))
            })
    }
}

export const getStudentCurriculumData = (classId) => {
    return (dispatch) => {
            axios.get(`https://learnacademyapi.herokuapp.com/curriculum/student/${classId}`)
            .then((res)=> {
                dispatch(fetchCurriculumData(res.data[0].content)) 
            })
            .catch((error) => {
                if (error.message === "Network Error"){
                dispatch(flashMessage({message: "Network Error" }))                                    
                }
                // dispatch(flashMessage({message: error.response.data.message }))
            })
    }
}

export const flashMessage = (data) => {
    return {
        type: FLASH_MESSAGE,
        payload: data
    }
}

export const fetchCurriculumData = (data) => {
    return {
        type: FETCH_CURRICULUM_CONTENT,
        payload: data
    }
}
