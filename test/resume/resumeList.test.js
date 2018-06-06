import React from 'react';
import { ResumeList } from '../../src/js/resume/resumeList';

import { configure, mount, debug } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });


describe('Resume List', () => {
    const mockFetch = jest.fn();

    it('should call fetchResumes when mounting the component', () => {        
        mount(<ResumeList list={[]} fetchResumes={mockFetch}/>);

        expect(mockFetch.mock.calls.length).toBe(1);
    });

    it('should show a message when there is no resumes to be shown', () => {
        const wrapper = mount(<ResumeList list={[]} fetchResumes={mockFetch}/>);

        expect(wrapper.find('.resumes').text()).toEqual('No Resumes');
    });

    it('should render a list of resumes when mounting the component with available list on props', () => {
        const fakeResumeList = [{
            "_id": "1234",
            "name": "Rogers Campbell",
            "gender": "male",
            "email": "rogerscampbell@aquasseur.com",
            "phone": "+55 11 (881) 501-2780",
            "address": "862 Grove Street, Sussex, North Carolina, 9296"
          },
          {
            "_id": "5678",
            "name": "Cochran Melton",
            "gender": "male",
            "email": "cochranmelton@aquasseur.com",
            "phone": "+55 11 (870) 551-2610",
            "address": "714 Gilmore Court, Newry, New Jersey, 7758"
          }];

        const wrapper = mount(<ResumeList list={fakeResumeList} fetchResumes={mockFetch}/>);

        expect(wrapper.find('[data-id="1234"]')).toHaveLength(1);
        expect(wrapper.find('[data-id="5678"]')).toHaveLength(1);
    });
});