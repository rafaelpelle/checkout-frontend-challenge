import { combineReducers } from 'redux';
import checkoutReducer from './checkout';

const rootReducer = combineReducers({
  checkoutReducer,
});

export default rootReducer;
