import { call, put, takeLatest } from 'redux-saga/effects';
import actionTypes from '../constants/actionTypes';
import { getOffers, postSubscription } from '../api/offers';

const {
  OFFERS_FETCH_REQUESTED,
  OFFERS_FETCH_SUCCEEDED,
  OFFERS_FETCH_FAILED,
  SUBSCRIPTION_REQUESTED,
  SUBSCRIPTION_SUCCEEDED,
  SUBSCRIPTION_FAILED,
} = actionTypes;

function* fetchOffers() {
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

function* createSubscription({ payload, meta }) {
  try {
    const { data } = yield call(postSubscription, {
      ...payload,
      gateway: 'iugu',
      userId: 1,
    });

    if (!data?.id) {
      throw new Error('Não foi possível realizar o pagamento...');
    }

    yield put({ type: SUBSCRIPTION_SUCCEEDED, payload: data });

    meta.navigate('/success');
  } catch (error) {
    yield put({ type: SUBSCRIPTION_FAILED, error: error.message });
  }
}

function* checkoutSaga() {
  yield takeLatest(OFFERS_FETCH_REQUESTED, fetchOffers);
  yield takeLatest(SUBSCRIPTION_REQUESTED, createSubscription);
}

export default checkoutSaga;
