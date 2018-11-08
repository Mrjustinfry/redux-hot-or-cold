import React from 'react';
import { shallow, mount } from 'enzyme';

import Game from './game';

describe('<Game />', () => {

    it('Renders without crashing', () => {
        shallow(<Game />);
    });

    it('Should start a new game on restart', () => {
    	
    	const wrapper = shallow(<Game />);

    	wrapper.setState({
    		guesses: [15, 30, 28, 80],
    		feedback: 'test',
    		correctAnswer: 8
    	});

    	wrapper.instance().restartGame();
    	
    	expect(wrapper.state('guesses')).toEqual([]);
    	expect(wrapper.state('feedback')).toEqual('Make your guess!');
    	expect(wrapper.state('correctAnswer')).toBeGreaterThanOrEqual(0);
    	expect(wrapper.state('correctAnswer')).toBeLessThanOrEqual(100);
    });

    it('Should tell the user if they are hot or cold', () => {
    
    	const wrapper = shallow(<Game />);

    	wrapper.setState({
      		correctAnswer: 1
    	});

    	wrapper.instance().makeGuess(1);
    		expect(wrapper.state('guesses')).toEqual([1]);
    		expect(wrapper.state('feedback')).toEqual('You got it!');	    	

    	wrapper.instance().makeGuess(2);
    		expect(wrapper.state('guesses')).toEqual([1,2]);
    		expect(wrapper.state('feedback')).toEqual('You\'re Hot!');

    	wrapper.instance().makeGuess(20);
    		expect(wrapper.state('guesses')).toEqual([1,2,20]);
    		expect(wrapper.state('feedback')).toEqual('You\'re Warm.');	
    	
    	wrapper.instance().makeGuess(40);
    		expect(wrapper.state('guesses')).toEqual([1,2,20,40]);
    		expect(wrapper.state('feedback')).toEqual('You\'re Cold...');

    	wrapper.instance().makeGuess(80);
    		expect(wrapper.state('guesses')).toEqual([1,2,20,40,80]);
    		expect(wrapper.state('feedback')).toEqual('You\'re Ice Cold...');	
	});

});