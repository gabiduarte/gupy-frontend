const INITIAL_STATE = {
    name: '',
    picture: '',
    birthDate: '',
    gender: '',
    email: '',
    phone: '',
    address: '',
    latitude: '',
    longitude: '',
    tags: [],
    professionalExperiences: [],
    formation: [],

    list: []
};

export default (state = INITIAL_STATE, action) => {
    if(action.type == 'CANDIDATE_ADDED') {
        const updatedStateList = state.list.concat(action.payload);
        return {...state, list: updatedStateList}
    }

    return state;
}