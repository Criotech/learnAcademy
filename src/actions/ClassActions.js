import axios from 'axios';

import { CREATE_CLASS, FLASH_MESSAGE, LG_SHOW, FETCH_CLASS_DATA, DELETE_CLASS, GET_STUDENTS_LIST, ADD_STUDENT } from './types'

export const toggleLgShow = (data) => {
    return {
        type: LG_SHOW,
        payload: data
    }
}

export const createClass = ({ className, classImage }) => {
    return (dispatch) => {
        dispatch({ type: CREATE_CLASS, payload: true })
        const data = new FormData()
        data.append('className', className)
        data.append('classImage', classImage)
        axios.post("https://learnacademyapi.herokuapp.com/class/teacher", data)
            .then(res => {
                dispatch(flashMessage({ message: res.data.message }))
                dispatch(fetchClassData())
            })
            .catch((error) => {
                if (error.message === "Network Error") {
                    dispatch(flashMessage({ message: "connect to internet" }))
                } else if (error.response.data.message) {
                    dispatch(flashMessage({ message: "error in creating class" }))
                }
            })
    }
}

export const fetchClassData = () => {
    return (dispatch) => {
        axios.get('https://learnacademyapi.herokuapp.com/class/teacher')
            .then((res) => {
                dispatch(getClassData(res.data))
            })
            .catch((error) => {
                if (error.message === "Network Error") {
                    dispatch(flashMessage({ message: "Network Error" }))
                } else if (error.response.data.message) {
                    dispatch(flashMessage({ message: error.response.data.message }))
                }
            })
    }
}

export const deleteClass = (classId) => {
    return (dispatch) => {
        dispatch({ type: DELETE_CLASS })
        axios.delete(`https://learnacademyapi.herokuapp.com/class/teacher/${classId}`)
            .then(res => {
                dispatch(flashMessage({ message: res.data.message }))
                dispatch(fetchClassData())
            })
            .catch(error => {
                if (error.message === "Network Error") {
                    dispatch(flashMessage({ message: "Network Error" }))
                } else if (error.response.data.message) {
                    dispatch(flashMessage({ message: error.response.data.message }))
                }
            })
    }
}

//teacher add student to a particular class
export const addStudent = ({ classId, studentMail }) => {
    return (dispatch) => {
        dispatch({ type: ADD_STUDENT })
        axios.post(`https://learnacademyapi.herokuapp.com/class/teacher/${classId}/addStudent`, { studentMail })
            .then(res => {
                dispatch(flashMessage({ message: res.data.message }))
                dispatch(getStudentsDetails(classId))
            })
            .catch((err => console.log(err)))
    }
}

// teacher gets studentsDetails from a single class 
export const getStudentsDetails = (classId) => {
    return (dispatch) => {
        axios.get(`https://learnacademyapi.herokuapp.com/class/teacher/members/${classId}`)
            .then(res => {
                dispatch(getStudentsData(res.data))
            })
            .catch((err => console.log(err)))
    }
}

//student class actions 
export const joinClass = (classId) => {
    return (dispatch) => {
        dispatch({ type: CREATE_CLASS, payload: true })

        axios.post("https://learnacademyapi.herokuapp.com/class/student", { classId })
            .then(res => {
                dispatch(flashMessage({ message: res.data.message }))
                dispatch(fetchStudentClassData())
            })
            .catch((error) => {
               if (error.message === "Network Error") {
                    dispatch(flashMessage({ message: "Network Error" }))
                } else if (error.response.data.message) {
                    dispatch(flashMessage({ message: error.response.data.message }))
                }
            })
    }
}

export const fetchStudentClassData = () => {
    return (dispatch) => {
        axios.get('https://learnacademyapi.herokuapp.com/class/student')
            .then((res) => {
                console.log(res.data)
                dispatch(getClassData(res.data))
            })
            .catch((error) => {
                if (error.message === "Network Error") {
                    dispatch(flashMessage({ message: "Network Error" }))
                } else if (error.response.data.message) {
                    dispatch(flashMessage({ message: error.response.data.message }))
                }
                // console.log(error.response)
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

export const getStudentsData = (data) => {
    return {
        type: GET_STUDENTS_LIST,
        payload: data
    }
}
