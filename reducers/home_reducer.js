import {
  HOME_FETCH_DATA
} from '../actions/types';

export default function (state = {}, action) {
  switch (action.type) {
    case HOME_FETCH_DATA:
      return action.payload;
    default:
      return state;
  }
}
