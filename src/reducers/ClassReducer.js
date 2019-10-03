import { FLASH_MESSAGE, LG_SHOW, FETCH_CLASS_DATA } from '../actions/types'

const INITIAL_STATE = { message: '', lgShow: false, classData: null };

export default (state = INITIAL_STATE, action) => {

    switch (action.type) {
        case LG_SHOW:
            return { ...state, lgShow: action.payload }
        case FLASH_MESSAGE:
            return { ...state, lgShow: false, message: action.payload.message }
        case FETCH_CLASS_DATA: 
            return { ...state,  classData: action.payload }
        default:
            return state
    }
}
