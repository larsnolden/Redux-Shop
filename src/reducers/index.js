import { combineReducers } from 'redux';
import storeFront from './storeFront';

const rootReducer = combineReducers({
  storeFront: storeFront
});

export default rootReducer;
