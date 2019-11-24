import axios from 'axios';

import { ANNOUNCEMENT_CONTENT_CHANGED, POST_ANNOUNCEMENT, FETCH_ANNOUNCEMENTS, FLASH_MESSAGE } from './types'

export const announcementChanged = (text) => {
    return {
        type: ANNOUNCEMENT_CONTENT_CHANGED,
        payload: text
    }  
}

export const postAnnouncement = ({ classId, content }) => {
    return (dispatch) => {
        dispatch({type: POST_ANNOUNCEMENT, payload: true})        
        axios.post(`https://learnacademyapi.herokuapp.com/announcement/teacher/${classId}`, {content})
        .then(res => {
            dispatch(flashMessage({message: res.data.message }))
            dispatch(getAnnouncementData(classId))  
        })
        .catch((error) => {
            if (error.message === "Network Error"){
                dispatch(flashMessage({message: "connect to internet" }))    
            }
            dispatch(flashMessage({message: error.response.data.message }))
        })
    }  
}

export const getAnnouncementData = (classId) => {
    return (dispatch) => {
            axios.get(`https://learnacademyapi.herokuapp.com/announcement/teacher/${classId}`)
            .then((res)=> {
                dispatch(fetchAnnouncementData(res.data)) 
            })
            .catch((error) => {
                if (error.message === "Network Error"){
                dispatch(flashMessage({message: "Network Error" }))   
                }
                dispatch(flashMessage({message: error.response.data.message }))
            })
    }
}

export const getStudentAnnouncementData = (classId) => {
    return (dispatch) => {
            axios.get(`https://learnacademyapi.herokuapp.com/announcement/student/${classId}`)
            .then((res)=> {
                dispatch(fetchAnnouncementData(res.data)) 
            })
            .catch((error) => {
                if (error.message === "Network Error"){
                dispatch(flashMessage({message: "Network Error" }))   
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

export const fetchAnnouncementData = (data) => {
    return {
        type: FETCH_ANNOUNCEMENTS,
        payload: data
    }
}