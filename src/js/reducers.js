import { combineReducers } from 'redux';
import resumeReducer from './resume/resumeReducer';

const rootReducer = combineReducers({
    resume: resumeReducer
});

export default rootReducer;