import { FLASH_MESSAGE, LG_SHOW, FETCH_CLASS_DATA, CREATE_CLASS } from '../actions/types'

const INITIAL_STATE = { message: '', lgShow: false, classData: null, loading: false };

export default (state = INITIAL_STATE, action) => {

    switch (action.type) {
        case LG_SHOW:
            return { ...state, lgShow: action.payload }
        case CREATE_CLASS:
            return { ...state, loading: action.payload }
        case FLASH_MESSAGE:
            return { ...state, lgShow: false, message: action.payload.message, loading: false }
        case FETCH_CLASS_DATA: 
            return { ...state,  classData: action.payload, message: '' }
        default:
            return state
    }
}
