import { call, put, takeLatest } from 'redux-saga/effects';
import actionTypes from '../constants/actionTypes';
import { getOffers } from '../api/offers';

const { OFFERS_FETCH_REQUESTED, OFFERS_FETCH_SUCCEEDED, OFFERS_FETCH_FAILED } =
  actionTypes;

function* fetchOffers(action) {
  try {
    const { data } = yield call(getOffers);

    if (!data?.length) {
      throw new Error('As ofertas estão indisponíveis...');
    }

    yield put({ type: OFFERS_FETCH_SUCCEEDED, payload: data });
  } catch (error) {
    yield put({ type: OFFERS_FETCH_FAILED, error: error.message });
  }
}

function* checkoutSaga() {
  yield takeLatest(OFFERS_FETCH_REQUESTED, fetchOffers);
}

export default checkoutSaga;
