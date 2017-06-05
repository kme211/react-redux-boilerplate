import { combineReducers } from 'redux';
import tacos from './tacoReducer';

const rootReducer = combineReducers({
  tacos
});

export default rootReducer;