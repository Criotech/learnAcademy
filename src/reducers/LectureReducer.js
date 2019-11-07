import { CREATE_LECTURE, FLASH_MESSAGE, FETCH_LECTURES_DATA, GET_VIDEO_URL } from '../actions/types'

const INITIAL_STATE = { mes: '',  lectures: '', status: false, url: '' };

export default (state = INITIAL_STATE, action) => {

    switch (action.type) {
        case CREATE_LECTURE:
            return { ...state, status: action.payload }
        case FETCH_LECTURES_DATA:
            return { ...state, lectures: action.payload, status: false }
        case FLASH_MESSAGE:
            return { ...state, status: false, mes: action.payload.mes }
        case GET_VIDEO_URL:
            return { ...state, url: action.payload }
         default: 
            return state
    }
}
