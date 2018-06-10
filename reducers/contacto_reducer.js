import {
  CONTACTO_FETCH_DATA
} from '../actions/types';

export default function (state = {}, action) {
  switch (action.type) {
    case CONTACTO_FETCH_DATA:
      return action.payload;
    default:
      return state;
  }
}
