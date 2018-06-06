import React from 'react';
import { configure, shallow } from 'enzyme';
import App from '../src/js/app';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('App', () => {
    it('should render as a <div>', () => {
        const wrapper = shallow(<App/>);

        expect(wrapper.type()).toBe('div');
    });
})