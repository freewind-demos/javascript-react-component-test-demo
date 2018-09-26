import Hello from '../hello.jsx';
import jasmineEnzyme from 'jasmine-enzyme';
import {shallow, configure} from 'enzyme';
import React from 'react';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

describe('<Hello />', () => {
    beforeEach(() => {
        jasmineEnzyme();
    });

    it('has empty name by default', () => {
        const wrapper = shallow(<Hello/>);
        expect(wrapper.find('#username').text()).toEqual('');
    });

    it('changes the title when input value changes', () => {
        const wrapper = shallow(<Hello/>);
        wrapper.find('#username').simulate('change', {target: {value: 'Freewind'}});
        expect(wrapper.find('#title').text()).toEqual('Hello Freewind');
    });

    it('test method handleNewUsername directly', () => {
        const wrapper = shallow(<Hello/>);
        const component = wrapper.instance();
        component.updateUserName('new-username');
        expect(component.state.username).toEqual('new-username');
    });

});
