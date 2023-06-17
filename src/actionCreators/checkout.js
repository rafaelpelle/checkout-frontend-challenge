import {
  DATA_FETCH_REQUESTED,
  DATA_FETCH_SUCCEEDED,
  DATA_FETCH_FAILED,
} from '../constants/actionTypes';

export const dataFetchRequested = () => ({
  type: DATA_FETCH_REQUESTED,
});

export const dataFetchSucceeded = (data) => ({
  type: DATA_FETCH_SUCCEEDED,
  payload: data,
});

export const dataFetchFailed = (errorMsg) => ({
  type: DATA_FETCH_FAILED,
  error: errorMsg,
});
