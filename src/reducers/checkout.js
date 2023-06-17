import actionTypes from '../constants/actionTypes';
import status from '../constants/status';

const { OFFERS_FETCH_REQUESTED, OFFERS_FETCH_SUCCEEDED, OFFERS_FETCH_FAILED } =
  actionTypes;

const INITIAL_STATE = {
  offers: {
    data: null,
    status: status.idle,
    error: null,
  },
};

const checkoutReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case OFFERS_FETCH_REQUESTED:
      return {
        ...state,
        offers: {
          ...state.offers,
          data: null,
          status: status.loading,
          error: null,
        },
      };
    case OFFERS_FETCH_SUCCEEDED:
      return {
        ...state,
        offers: {
          ...state.offers,
          data: action.payload,
          status: status.success,
        },
      };
    case OFFERS_FETCH_FAILED:
      return {
        ...state,
        offers: {
          ...state.offers,
          status: status.error,
          error: action.error,
        },
      };
    default:
      return { ...state };
  }
};

export default checkoutReducer;
