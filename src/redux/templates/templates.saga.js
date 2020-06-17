import { takeLatest, call, put, all } from 'redux-saga/effects';
import templatesTypes from './templates.types';
import {
  fetchTemplatesSuccess,
  fetchTemplatesFailure,
  deleteTemplateFailure,
  deleteTemplateSuccess,
  createTemplateFailure,
  createTemplateSuccess,
} from './templates.actions';

import {
  getTemplatesSnapshot,
  deleteTemplate,
  createTemplate,
} from '../../data-parser/templateParser';

export function* onFetchStartAsyc() {
  try {
    const result = yield getTemplatesSnapshot();
    yield put(fetchTemplatesSuccess(result.data));
  } catch (e) {
    yield put(fetchTemplatesFailure(e));
  }
}

export function* onDeleteTemplate({ payload: { _id } }) {
  try {
    const data = yield deleteTemplate(_id);
    yield put(deleteTemplateSuccess(_id));
  } catch (e) {
    yield put(deleteTemplateFailure(e));
  }
}
export function* onFetchTemplatesStart() {
  yield takeLatest(templatesTypes.FETCH_TEMPLATES_START, onFetchStartAsyc);
}

export function* onCreateTemplateAsync({ payload }) {
  try {
    const result = yield createTemplate(payload);
    const data = { ...result.data, newTemplate: true };
    yield put(createTemplateSuccess(data));
  } catch (error) {
    yield put(createTemplateFailure(error));
  }
}

export function* onCreateTemplateStart() {
  yield takeLatest(templatesTypes.CREATE_TEMPLATE_START, onCreateTemplateAsync);
}
export function* onDeleteTemplateStart() {
  yield takeLatest(templatesTypes.DELETE_TEMPLATE_START, onDeleteTemplate);
}

export function* templatesSagas() {
  yield all([
    call(onFetchTemplatesStart),
    call(onDeleteTemplateStart),
    call(onCreateTemplateStart),
  ]);
}
