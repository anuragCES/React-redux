import expect from 'expect';
import React from 'react';
import ReactTestUtil from 'react-addons-test-utils';
import CourseForm from './CourseForm';

// It is much simpler to implement using Enzyme - Shallow
function setup(saving) {

    let props = {
        course: {}, saving: saving, errors: {},
        onSave: () => {},
        onChange: () => {}
    };

    let renderer = ReactTestUtil.createRenderer();
    renderer.render((<CourseForm {...props}/>));
    let output = renderer.getRenderOutput();

    return {
        output,
        renderer,
        props
    };
}

describe('CourseForm via React Test Utils', () => {

    it('Renders a form and h1', () => {
        const {output} = setup();
        expect(output.type).toBe('form');

        let [ h1 ] = output.props.children;
        expect(h1.type).toBe('h1');
    });

    it('Save button is save when not saving...', () => {
        const {output} = setup(false);
        const saveButton = output.props.children[5];
        expect(saveButton.props.value).toBe('Save');
    });

    it('Save button is save when not saving...', () => {
        const {output} = setup(true);
        const saveButton = output.props.children[5];
        expect(saveButton.props.value).toBe('saving...');
    });
});
