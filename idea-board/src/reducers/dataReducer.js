import initialState from './initialState';
import * as types from '../constants/actionTypes';

export default function dataReducer(state = initialState.data, action) {
  switch (action.type) {
    case types.GET_DATA_FULFILLED:
      return {
      	...state,
        [action.category]: action.payload,
      }
    default:
      return state;
  }
}
