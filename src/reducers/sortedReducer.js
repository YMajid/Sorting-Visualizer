import { createAction, handleActions } from 'redux-actions';

const initialState = false;

export const SET_SORTED = 'SET_SORTED';
export const setSorted = createAction(SET_SORTED);

export const isSorted = handleActions(
  {
    SET_SORTED: (state, { payload }) => {
      return payload;
    },
  },
  initialState
);
