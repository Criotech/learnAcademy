// import { FLASH_info, FETCH_CURRICULUM_CONTENT, CURRICULUM_CONTENT_CHANGED } from '../actions/types'
import { ANNOUNCEMENT_CONTENT_CHANGED, FETCH_ANNOUNCEMENTS, FLASH_MESSAGE } from '../actions/types'

const INITIAL_STATE = { inf: '', content: '', announcements: '' };

export default (state = INITIAL_STATE, action) => {

    switch (action.type) {
        case ANNOUNCEMENT_CONTENT_CHANGED:
            return { ...state, info: '', content: action.payload }
        case FETCH_ANNOUNCEMENTS:
            return { ...state, announcements: action.payload, info: '', content: '' }
        case FLASH_MESSAGE:
            return { ...state, info: action.payload.info }
        default:
            return state
    }
}
