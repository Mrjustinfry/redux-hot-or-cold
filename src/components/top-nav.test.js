import React from 'react';
import { shallow } from 'enzyme';

import TopNav from './top-nav';

describe('<TopNav />', () => {

    it('Renders without crashing', () => {
        shallow(<TopNav />);
    });

    it('Should restart the game when "new game" is clicked', () => {
    
      const callback = jest.fn();
      const wrapper = shallow(<TopNav onRestartGame={callback} />);
      const link = wrapper.find('.new');
    
      link.simulate('click', {
        preventDefault() {}
      });
    
      expect(callback).toHaveBeenCalled();
  	
  	});
});