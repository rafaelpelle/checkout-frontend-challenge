import actionTypes from '../constants/actionTypes';

const { DATA_FETCH_SUCCEEDED, DATA_FETCH_FAILED } = actionTypes;

const INITIAL_STATE = {
  data: '',
  status: '',
  error: '',
};

const checkoutReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case DATA_FETCH_SUCCEEDED:
      return { ...state, data: action.payload };
    case DATA_FETCH_FAILED:
      return { ...state, error: action.error };
    default:
      return { ...state };
  }
};

export default checkoutReducer;
