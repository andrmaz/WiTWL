import React from 'react';
import { shallow } from 'enzyme';
import Current from '../component/Current/Current';

let wrapper;
const mockInitialWeather = {};
const mockWeather = { 
    current: {
        condition: { text: '', icon: ''},
        last_updated: ''
    }
};

describe('Current component', () => {
    it('should render component correctly', () => {
        wrapper = shallow(<Current weather={mockWeather}/>);
        expect(wrapper).toMatchSnapshot()
    })
    it('should return empty strings on initial state', () => {
        wrapper = shallow(<Current weather={mockInitialWeather}/>);
        expect(wrapper.text()).toMatch('Condition:')
    })
})