import { combineReducers, createStore } from 'redux';
import { array } from './arrayReducer';
import { isSorted } from './sortedReducer';

const reducers = combineReducers({
  array,
  isSorted,
});
const store = createStore(reducers);

export default store;
