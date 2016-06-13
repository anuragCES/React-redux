import { watchLoadCourses, mySaga} from './courseSagas';
import {watchAuthors} from './authorSagas';

// single entry point to start all Sagas at once
export default function* rootSaga() {
  yield [
    watchLoadCourses(),
    watchAuthors(),
    mySaga()
  ]
}
