import React from 'react';
import { shallow } from 'enzyme';
import Search from '../component/Search/Search';

describe('Search component', () => {
    it('should render component correctly', () => {
        const wrapper = shallow(<Search />);
        expect(wrapper).toMatchSnapshot()
    })
})