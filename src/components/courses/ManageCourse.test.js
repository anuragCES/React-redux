import expect from 'expect';
import React from 'react';
import {shallow, mount} from 'enzyme';
import ReactTestUtil from 'react-addons-test-utils';
import {ManageCoursePage} from './ManageCoursePage';

describe('Manage Meeting Minutes', () => {

  const props = {
    authors: [],
    actions: {saveCourse: () => { return Promise.resolve(); }},
    course: {id: '', watchHref: '', title: '', authorId: '', length: '', category: ''}
  };

  it('Title shoud be more than 1', ()=>{
    const wrapper = mount(<ManageCoursePage {...props}/>);
    let submitButton = wrapper.find('input').last();

    expect(submitButton.prop('type')).toBe('submit');
    submitButton.simulate('click');
    expect(wrapper.state().errors.title).toBe('Title must be at least 5 characters.');
  });

});
