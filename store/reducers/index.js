import { combineReducers } from 'redux';

import security from './security';
import customer from './customer';

import { CUSTOMER_SIGN_OUT } from '../actions/types';

const appReducer = combineReducers({
  security,
  customer
});

const rootReducer = (state, action) => {
  if (action.type === CUSTOMER_SIGN_OUT) {
    state = undefined;
  }

  return appReducer(state, action);
};

export default rootReducer;
