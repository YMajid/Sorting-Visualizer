import { combineReducers, createStore } from 'redux';
import { array } from './array/arrayReducer';
import { isSorted } from './sorted/sortedReducer';

const reducers = combineReducers({
  array,
  isSorted,
});
const store = createStore(reducers);

export default store;
