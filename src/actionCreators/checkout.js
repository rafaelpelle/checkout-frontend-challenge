import types from '../constants/actionTypes';

const {
  OFFERS_FETCH_REQUESTED,
  OFFERS_FETCH_SUCCEEDED,
  OFFERS_FETCH_FAILED,
  SELECT_OFFER,
} = types;

export const dataFetchRequested = () => ({
  type: OFFERS_FETCH_REQUESTED,
});

export const dataFetchSucceeded = (data) => ({
  type: OFFERS_FETCH_SUCCEEDED,
  payload: data,
});

export const dataFetchFailed = (errorMsg) => ({
  type: OFFERS_FETCH_FAILED,
  error: errorMsg,
});

export const selectOffer = (offer) => ({
  type: SELECT_OFFER,
  payload: offer,
});
