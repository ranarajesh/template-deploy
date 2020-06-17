import { call, all } from 'redux-saga/effects';

import { templatesSagas } from './templates/templates.saga';

export default function* rootSaga() {
  yield all([call(templatesSagas)]);
}
