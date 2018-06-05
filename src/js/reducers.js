import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import resumeReducer from './resume/resumeReducer';
import candidateReducer from './candidate/candidateReducer';

const rootReducer = combineReducers({
    resume: resumeReducer,
    candidate: candidateReducer,
    form: formReducer
});

export default rootReducer;