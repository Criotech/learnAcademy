import { CHAT_RECIEVED } from '../actions/types';

const INITIAL_STATE = {
    QAData: [],
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CHAT_RECIEVED:
            return { ...state, ...INITIAL_STATE, QAData: [ ...state.QAData, {...action.payload.val(), chatId: action.payload.key } ] }
        default:
            return state;
    }
}