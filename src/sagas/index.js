import { helloSaga, watchIncrementAsync} from './actionSagas';

// single entry point to start all Sagas at once
export default function* rootSaga() {
  yield [
    helloSaga(),
    watchIncrementAsync()
  ]
}
