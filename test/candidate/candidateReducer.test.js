import reducer from '../../src/js/candidate/candidateReducer';

describe('candidate reducer', () => {
    const expectedInitialState = {
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


    it('should return candidate fields with empty values as the initial state', () => {
        const emptyAction = {};
        
        expect(reducer(undefined, emptyAction)).toEqual(expectedInitialState)
    });

    it('should return state with new candidate in list when CANDIDATE_ADDED action is passed', () => {
        const dummyNewCandidate = {
            name: 'Person A',
            picture: 'http://person.com/a.jpg',
            birthDate: '01/01/1900',
            gender: 'female',
            email: 'person@person.com',
            phone: '11 11 11 11',
            address: 'Main Street, 1',
            latitude: '01234567',
            longitude: '8901234',
            tags: ["a", "b", "c"],
            professionalExperiences: [{
                "companyName": "ipsum",
                "role": "voluptate",
                "startDate": "2017-09-01T03:42:00 +03:00",
                "endDate": "2018-04-19T03:34:25 +03:00"
              }],
            formation: [{
                "institution": "sit",
                "course": "eu",
                "isConcluded": true,
                "startDate": "2014-04-23T07:48:08 +03:00",
                "endDate": "2015-01-03T02:38:36 +02:00"
            }]
        };

        const expectedStateWithNewCandidate = {
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
                list: [dummyNewCandidate]
        };

        expect(reducer(expectedInitialState, { type: "CANDIDATE_ADDED", payload: dummyNewCandidate})).toEqual(expectedStateWithNewCandidate);
    });
});