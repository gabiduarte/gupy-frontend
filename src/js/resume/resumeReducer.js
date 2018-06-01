const INITIAL_STATE = {
    list: [{
        _id: 0,
        name: 'Person A',
        email: 'person@a.com'
    }, {
        _id: 1,
        name: 'Person B',
        email: 'person@b.com'
    }]
}

export default (state = INITIAL_STATE, action) => {
    return state;
}