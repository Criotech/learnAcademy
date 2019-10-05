import { FLASH_MESSAGE, FETCH_CURRICULUM_CONTENT, CURRICULUM_CONTENT_CHANGED } from '../actions/types'

const INITIAL_STATE = { message: '', content: '' };

export default (state = INITIAL_STATE, action) => {

    switch (action.type) {
        case CURRICULUM_CONTENT_CHANGED:
            return { ...state, message: '', content: action.payload }
        case FETCH_CURRICULUM_CONTENT:
            return { ...state, content: action.payload }
        case FLASH_MESSAGE:
            return { ...state, message: action.payload.message }
        default:
            return state
    }
}
