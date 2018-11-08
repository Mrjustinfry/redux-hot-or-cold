import React from 'react';
import { shallow } from 'enzyme';

import GuessList from './guess-list';

describe('<GuessList />', () => {

    it('Renders without crashing', () => {
        shallow(<GuessList guesses={[]} />);
    });

    it('Provides list of numbers guessed', () => {
    
        const numbers = [1, 5, 30, 99, 15, 22];
        const wrapper = shallow(<GuessList guesses={numbers} />);
        const content = wrapper.find('li');
   
        numbers.forEach((number, index) => {
            expect(content.at(index).text()).toEqual(number.toString());
    	});
  	});

});