import types from '../constants/actionTypes';

const {
  OFFERS_FETCH_REQUESTED,
  OFFERS_FETCH_SUCCEEDED,
  OFFERS_FETCH_FAILED,
  SUBSCRIPTION_REQUESTED,
  SUBSCRIPTION_SUCCEEDED,
  SUBSCRIPTION_FAILED,
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

export const subscriptionRequested = (data, navigate) => ({
  type: SUBSCRIPTION_REQUESTED,
  payload: data,
  meta: { navigate },
});

export const subscriptionSucceeded = (data) => ({
  type: SUBSCRIPTION_SUCCEEDED,
  payload: data,
});

export const subscriptionFailed = (errorMsg) => ({
  type: SUBSCRIPTION_FAILED,
  error: errorMsg,
});

export const selectOffer = (offer) => ({
  type: SELECT_OFFER,
  payload: offer,
});
