import React from 'react';
import { shallow } from 'enzyme';

import Feedback from './feedback';

describe('<Feedback />', () => {

    it('Renders without crashing', () => {
        shallow(<Feedback id="feedback" />);
    });

    it('Should provide feedback to the user', () => {
   
    	let msg = 'Test feedback';  
    	let wrapper = shallow(<Feedback feedback={msg} />);
    
    	expect(wrapper.contains(msg)).toEqual(true);
  	});

});