import TestRenderer from 'react-test-renderer';
import React from 'react';
import FormMore from './FormMore';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {shallow, mount, render} from 'enzyme';

Enzyme.configure({adapter: new Adapter()});

it('Test hello', () => {
    const testRenderer = TestRenderer.create(<FormMore/>);
    const testJSON = testRenderer.toJSON();
    expect(testJSON.type).toBe('main');
});

it('Test form enzyme', async () => {
    const wrapper = shallow(<FormMore/>);
    wrapper.setState({text: '9659725075'});
    wrapper.find('form').simulate('submit', {
        preventDefault: () => {
        }
    });
    //console.log('!!!!!!!!!!!!!!!!!!!!!!!!' + wrapper.html());
});

it('Test change text', () => {
    const wrapper = shallow(<FormMore/>);
    wrapper.find('textarea').simulate('change', {
        target: {
            value: "TEST"
        }
    });
    //console.log('!!!!!!!!!!!!!!!!!!!!!!!!' + wrapper.html());
});

it('Test parse data backend', () => {
    const wrapper = shallow(<FormMore/>);
    wrapper.setState({
        code: [{
            "number": "9659725075",
            "code": "965",
            "company": "ПАО Вымпел-Коммуникации",
            "region": "Омская обл."
        }, {
            "number": "9132341234",
            "code": "913",
            "company": "ПАО Мобильные ТелеСистемы",
            "region": "Алтайский край"
        }, null]
    });
    console.log('!!!!!!!!!!!!!!!!!!!!!!!!' + wrapper.html());
});