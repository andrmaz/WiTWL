import React from 'react';
import { shallow } from 'enzyme';
import Forecast from '../component/Forecast/Forecast';

let wrapper
const mockWeather = {
    forecast: { 
        forecastday: [{
            day: {
                condition: '',
                text: ''
            },
            date: ''
        }]
    }
}

describe('Forecast Component', () => {
    beforeEach(() => {
        wrapper = shallow(<Forecast weather={mockWeather}/>)
    })
    it('should render component correctly', () => {
        expect(wrapper).toMatchSnapshot()
    })
    it('should render forecast correctly', () => {
        expect(mockWeather.forecast.forecastday).toHaveLength(1)
    })
})