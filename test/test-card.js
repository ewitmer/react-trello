import React from 'react';
import TestUtils from 'react-addons-test-utils';
import chai from 'chai';


const should = chai.should();

import Card from '../js/components/card';
import List from '../js/components/list';

describe('Card component', function(){
	it('Renders the text', function(){
		const text = "testing text";

		const renderer = TestUtils.createRenderer();
		renderer.render(<Card text={text}/>)
		const result = renderer.getRenderOutput();
		
		result.props.children.type.should.equal('div');
		result.props.children.props.children.should.equal(text);
	});

});

describe('List component', function() {
	it('Renders the list', function() {
		const cards = [<Card text='test1'/>, <Card text='test2'/>, <Card text='test3'/>];

		const renderer = TestUtils.createRenderer();
		renderer.render(<List title='test' cards={cards} change={this.changeText} add={this.addCard} value='add test' key={1} />);
		const result = renderer.getRenderOutput();

		result.props.children[1][0].props.text.props.text.should.equal('test1');

	});
});