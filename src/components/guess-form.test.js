import React from 'react';
import { shallow, mount } from 'enzyme';

import GuessForm from './guess-form';

describe('<GuessForm />', () => {

    it('Renders without crashing', () => {
        shallow(<GuessForm />);
    });

    it('Should submit the users guess on submit', () => {
    	
    	const callback = jest.fn();
    	const wrapper = mount(<GuessForm onMakeGuess={callback} />);
    	const number = 35;
    	
    	wrapper.find('input[type="number"]').instance().value = number;
    	wrapper.simulate('submit');
    	
    	expect(callback).toHaveBeenCalledWith(number.toString());
  	});
});