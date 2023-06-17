import actionTypes from '../constants/actionTypes';
import status from '../constants/status';

const { OFFERS_FETCH_REQUESTED, OFFERS_FETCH_SUCCEEDED, OFFERS_FETCH_FAILED } =
  actionTypes;

const INITIAL_STATE = {
  data: null,
  status: status.idle,
  error: null,
};

const checkoutReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case OFFERS_FETCH_REQUESTED:
      return {
        ...state,
        status: status.loading,
      };
    case OFFERS_FETCH_SUCCEEDED:
      return {
        ...state,
        data: action.payload,
        status: status.success,
      };
    case OFFERS_FETCH_FAILED:
      return {
        ...state,
        error: action.error,
        status: status.error,
      };
    default:
      return { ...state };
  }
};

export default checkoutReducer;
