import React from 'react';
import { configure, shallow, dive } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store'


import { Candidate } from '../../src/js/candidate/candidate';
import CandidateDetails from '../../src/js/candidate/candidateDetails';

configure({ adapter: new Adapter() });

describe('Candidate component', () => {
    const mockStore = configureStore();
    const store = mockStore();

    it('should show candidate form when candidate list is empty', () => {
        const wrapper = shallow(
            <Provider store={store}>
                <Candidate candidateList={[]}/>
            </Provider>
        );

        expect(wrapper.dive().find('ReduxForm')).toHaveLength(1);
    });

    it('should show candidate details when candidate list is not empty', () => {
        const candidateList = [{
            "name": "Rogers Campbell",
            "gender": "male",
            "email": "rogerscampbell@aquasseur.com",
            "phone": "+55 11 (881) 501-2780",
            "address": "862 Grove Street, Sussex, North Carolina, 9296"
        }];
        
        const wrapper = shallow(
            <Provider store={store}>
                <Candidate candidateList={[candidateList]}/>
            </Provider>
        );

        expect(wrapper.dive().find(CandidateDetails)).toHaveLength(1);
    });
});