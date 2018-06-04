const INITIAL_STATE = {
    list: []
}

export default (state = INITIAL_STATE, action) => {
    if (action.type == 'RESUMES_FETCHED') {
        return {...state, list: action.payload}
    }
    return state;
}