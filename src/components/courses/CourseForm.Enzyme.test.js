import expect from 'expect';
import React from 'react';
import {shallow, mount} from 'enzyme';
import ReactTestUtil from 'react-addons-test-utils';
import CourseForm from './CourseForm';

function setup(saving){
  let props = {
    course: {}, saving: saving, errors: {},
    onSave: () => {},
    onChange: () => {}
  };

  return shallow(<CourseForm {...props} />);
}

describe('CourseForm via Enzyme', () => {

    it('Renders a form and h1', () => {
        const wrapper = setup();
        expect(wrapper.find('form').length).toBe(1);
        expect(wrapper.find('h1').text()).toBe('Add Meeting Minute');
    });

    it('Save button is save when not saving...', () => {
        const wrapper = setup(false);
        expect(wrapper.find('input').props().value).toBe('Save');
    });

    it('Save button is save when not saving...', () => {
        const wrapper = setup(true);
        expect(wrapper.find('input').props().value).toBe('saving...');
    });
});
