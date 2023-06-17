import { call, put, takeLatest } from 'redux-saga/effects';
import actionTypes from '../constants/actionTypes';

const { DATA_FETCH_SUCCEEDED, DATA_FETCH_FAILED } = actionTypes;

function* fetchData(action) {
  try {
    const data = yield call('Api.fetchData');
    yield put({ type: DATA_FETCH_SUCCEEDED, payload: data });
  } catch (error) {
    yield put({ type: DATA_FETCH_FAILED, error: error.message });
  }
}

function* checkoutSaga() {
  yield takeLatest('DATA_FETCH_REQUESTED', fetchData);
}

export default checkoutSaga;
