import { FLASH_MESSAGE, FETCH_TEST_DATA, UPDATE_ANS, FETCH_PROFILE, RESET_TEST } from '../actions/types'
const INITIAL_STATE = { alert: '',  test: '', status: false, profile: '' };

export default (state = INITIAL_STATE, action) => {

    switch (action.type) {
        case FETCH_TEST_DATA:
            return { ...state, test: action.payload }
        case FLASH_MESSAGE:
            return { ...state, alert: action.payload.alert }
        case FETCH_PROFILE: 
            return { profile: action.payload }
        case RESET_TEST:
            return { ...state, ...INITIAL_STATE }
        case UPDATE_ANS:
            let updatedData =  state.test.testData.map((p, index) =>
                index === action.payload.i
                ? { ...p, userAns: action.payload.choice }
                : p
            );

            let updatedObj = { ...state.test, testData: updatedData }

            return { ...state, test: updatedObj }
        default: 
            return state
    }
}
