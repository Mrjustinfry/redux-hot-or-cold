import React from 'react';
import {shallow} from 'enzyme';

import AuralStatus from './aural-status';

describe('<AuralStatus />', () => {

    it('Renders without crashing', () => {
        shallow(<AuralStatus />);
    });

    it('Should provide a status update', () => {
    
    	let msg = 'Test status';
    	let wrapper = shallow(<AuralStatus auralStatus={msg} />);
    
    	expect(wrapper.contains(msg)).toEqual(true);
  	});

});