import axios from 'axios';

import { CREATE_LECTURE, FLASH_MESSAGE } from './types'

export const createLecture = ({ classId, title, lecture }) => {
    console.log(classId, title, lecture)
    return (dispatch) => {
        dispatch({type: CREATE_LECTURE, payload: true})        
        const data = new FormData()
        data.append('title', title)
        data.append('lecture', lecture)
        axios.post(`http://localhost:5000/lectures/teacher/${classId}`, data)
        .then(res => {
            // dispatch(flashMessage({message: res.data.message }))
            // dispatch(fetchClassData())
            console.log(res.data)                                                                    
        })
        .catch((error) => {
            if (error.message === "Network Error"){
                // dispatch(flashMessage({message: "connect to internet" }))                    
            }
            // dispatch(flashMessage({message: error.response.data.message }))
            console.log(error.response)
        })
    }  
}