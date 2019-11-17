import { CHAT_RECIEVED, UPDATE_CHAT } from '../actions/types';

const INITIAL_STATE = {
    QAData: [],
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CHAT_RECIEVED:
            return { ...state, ...INITIAL_STATE, QAData: [ ...state.QAData, {...action.payload.val(), chatId: action.payload.key } ] }
        case UPDATE_CHAT:
            const idx = state.QAData.findIndex(item => item.id === action.payload.val().id);
            return { ...state,  QAData: [ ...state.QAData.slice(0, idx), { ...action.payload.val(), chatId: action.payload.key }, ...state.QAData.slice(idx + 1) ] }         
        default:
            return state;
    }
}