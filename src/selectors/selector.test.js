import expect from 'expect';
import React from 'react';
import {shallow, mount} from 'enzyme';
import ReactTestUtil from 'react-addons-test-utils';
import {authorsFormattedForDropdown} from './selectors';

describe('Authors formatted for dropdown', () => {
    "use strict";
   it('Authors array is formatted', () => {

       const inputAuthors = [
           {
               id: 'anurag-sharma',
               firstName: 'Anurag',
               lastName: 'Sharma'
           },
           {
               id: 'sawan-kumar',
               firstName: 'Sawan',
               lastName: 'Kumar'
           }
       ];

       const outputAuthors = [
           {
               value: 'anurag-sharma',
               text: 'Anurag Sharma'
           },
           {
               value: 'sawan-kumar',
               text: 'Sawan Kumar'
           }
       ];

       expect(authorsFormattedForDropdown(inputAuthors)).toEqual(outputAuthors);

   });
});