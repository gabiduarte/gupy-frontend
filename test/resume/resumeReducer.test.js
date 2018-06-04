import reducer from '../../src/js/resume/resumeReducer';

describe('resume reducer', () => {
    it('should return an empty list as the initial state', () => {
        const emptyAction = {};
        const expectedInitialState = {
            list: []
        }

        expect(reducer(undefined, emptyAction)).toEqual(expectedInitialState)
    });
});