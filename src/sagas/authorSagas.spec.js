import test from 'tape';
import { loadAuthors } from './authorSagas';
import { put, call } from 'redux-saga/effects';
import * as ActionTypes from './../actions/actionTypes';
import authorApi from './../api/mockAuthorApi';

test('Author Saga', (assert) => {

    const gen = loadAuthors();
    const authors = [1];

    assert.deepEqual(
      gen.next().value,
      call(authorApi.getAllAuthors),
      'Should load authors using the API'  
    );

    assert.deepEqual(
      gen.next(authors).value,
       put({type: ActionTypes.LOAD_AUTHORS, authors}),
      'Should dispatch the action LOAD_AUTHORS_COMPLETED'  
    );

    assert.end();
});

