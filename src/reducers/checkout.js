const INITIAL_STATE = {
  data: '',
  status: '',
  error: '',
};

const checkoutReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'DATA_FETCH_SUCCEEDED':
      return { ...state, data: action.payload };
    case 'DATA_FETCH_FAILED':
      return { ...state, error: action.payload };
    default:
      return { ...state };
  }
};

export default checkoutReducer;
