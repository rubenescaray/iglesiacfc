import {
  FOOTER_DATA
} from '../actions/types';

export default function (state = {}, action) {
  switch (action.type) {
    case FOOTER_DATA:
      return action.payload;
    default:
      return state;
  }
}
