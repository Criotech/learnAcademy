
import { combineReducers } from "redux";
import AuthReducer from './AuthReducer'
import ClassReducer from './ClassReducer'
import CurriculumReducer from './CurriculumReducer'
import AnnouncementReducer from './AnnouncementReducer'
import LectureReducer from './LectureReducer'
import TestReducer from './TestReducer'
import QAReducer from './QAReducer'
import { RESET_STORE } from "../actions/types";

// Combine all reducers.
const appReducer = combineReducers({
    auth: AuthReducer,
    ClassReducer,
    CurriculumReducer,
    AnnouncementReducer,
    LectureReducer,
    TestReducer,
    QAReducer
});

const rootReducer = (state, action) => {
  // when a logout action is dispatched it will reset redux state
  if (action.type === RESET_STORE) {
    state = undefined;
  }

  return appReducer(state, action);
};

export default rootReducer;
