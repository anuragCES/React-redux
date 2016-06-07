import expect from 'expect';
import React from 'react';
import ReactTestUtil from 'react-addons-test-utils';
import CourseForm from './CourseForm';

function setup() {

    let props = {
        course: {}, saving: false, errors: {},
        onSave: () => {},
        onChange: () => {}
    };

    let renderer = ReactTestUtil.createRenderer();
    renderer.render((<CourseForm {...props}/>));
    let output = renderer.getOutput();

    return {
        output,
        renderer,
        props
    };
}

describe('CourseForm via React Test Utils', () => {
    
    it('Renders a form and h1', () => {
        let output = setup();
    });

});