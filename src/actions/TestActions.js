import axios from 'axios';

import { FETCH_TEST_DATA, FLASH_MESSAGE, UPDATE_ANS, FETCH_PROFILE } from './types'

export const createTest = ({ classId, questions }) => {
    console.log(questions)
    return (dispatch) => {
        const data = new FormData()
        data.append('questions', questions)
        
        axios.post(`http://localhost:5000/test/teacher/${classId}`, data)
        .then(res => {
            console.log(res.data)
            dispatch(flashMessage({alert: res.data.message }))
            dispatch(getTest(classId))
        })
        .catch((error) => {
            if (error.message === "Network Error"){
                dispatch(flashMessage({alert: "connect to internet" }))                    
            }
            // dispatch(flashMessage({alert: error.response.data.message }))
            console.log(error.response)
        })
    }  
}

export const updateTimer = ({ classId, timer}) => {
    console.log(classId, timer)
    return (dispatch) => {
        axios.post(`http://localhost:5000/test/teacher/timer/${classId}`, {timer})
        .then((res)=> {
                dispatch(flashMessage({alert: res.data.message })) 
        })
    }
} 


//Too lazy to create a new file for profile actions so

//PROFILE
//submit userAns
export const userScore = ({ correct, classId, studentName, studentId, total }) => {
    console.log(correct, classId, studentName, studentId)
    return (dispatch) => {
        axios.post(`http://localhost:5000/profiles/${classId}`, {correct, classId, studentName, studentId, total})
        .then((res)=> {
                dispatch(flashMessage({alert: res.data.message }))                            
        })
    }
} 

export const getStudentsProfile = ((classId)=> {
    return (dispatch) => {
        axios.get(`http://localhost:5000/profiles/teacher/${classId}`)
        .then((res)=>{
            console.log(res.data)
            dispatch(fetchStudentsScore(res.data))
        })
        .catch(err=> {
            console.log(err.response)
        })
        
    }
})

export const getTest = (classId) => {
    return (dispatch) => {
            axios.get(`http://localhost:5000/test/teacher/${classId}`)
            .then((res)=> {
                dispatch(fetchTestData(res.data))                                    
            })
            .catch((error) => {
                if (error.message === "Network Error"){
                dispatch(flashMessage({alert: "Network Error" }))                    
                }
                dispatch(flashMessage({alert: error.response }))
            })
    }
}

//students section 
export const checkIfEnrolled = ({ classId, studentId }) => {
    return (dispatch) => {
        axios.post(`http://localhost:5000/test/student/${classId}`, {studentId})
        .then((res) => {
            if (res.data) {
                dispatch(fetchTestData(res.data))                                                    
            } else {
                console.log('error occured')
                dispatch(flashMessage({alert: 'Sorry you are not emrolled for the test'}))                
            }
        }) 
    }  
}

export const updateAns = (data) => {
    return {
        type: UPDATE_ANS,
        payload: data
    }
}

export const fetchTestData = (data) => {
    return {
        type: FETCH_TEST_DATA,
        payload: data
    }
}

export const flashMessage = (data) => {
    return {
        type: FLASH_MESSAGE,
        payload: data
    }
}

export const fetchStudentsScore = (data) => {
    return {
        type: FETCH_PROFILE,
        payload: data
    }
}