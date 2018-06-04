import reducer from '../../src/js/resume/resumeReducer';

describe('resume reducer', () => {
    it('should return an empty list as the initial state', () => {
        const expectedInitialState = {
            list: []
        }
        const emptyAction = {};
        
        expect(reducer(undefined, emptyAction)).toEqual(expectedInitialState)
    });

    it('should return state with resumes when RESUMES_FETCHED action is passed', () => {
        const dummyResumeList = [{
            id: 0,
            name: "Person A",
            email: "person@a.com"
        }, {
            id: 1,
            name: "Person B",
            email: "person@b.com"
        }];
        const expectedStateWithResumes = {
                list: dummyResumeList
        };

        expect(reducer([], { type: "RESUMES_FETCHED", payload: dummyResumeList})).toEqual(expectedStateWithResumes);
    });
});