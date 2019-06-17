import TestRenderer from 'react-test-renderer';
import React from 'react';
import Form from './Form';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {shallow, mount, render} from 'enzyme';

Enzyme.configure({adapter: new Adapter()});


it('Test form enzyme', async () => {
    const wrapper = shallow(<Form/>);
    wrapper.setState({text: '9659725075'});
    wrapper.find('form').simulate('submit', {
        preventDefault: () => {
        }
    });
    //console.log('!!!!!!!!!!!!!!!!!!!!!!!!' + wrapper.html());
});

it('Test change text', () => {
    const wrapper = shallow(<Form/>);
    wrapper.find({placeholder: "Enter number"}).simulate('change', {
        target: {value: 'CHANGE VALUE'}
    });
    //console.log('!!!!!!!!!!!!!!!!!!!!!!!!' + wrapper.html());
});


it('Test form', () => {
    const testRenderer = TestRenderer.create(<Form/>);
    const testJSON = testRenderer.toJSON();
    expect(testJSON.type).toBe('main');
});
