import firebase from 'firebase';

import {
  NOSOTROS_FETCH_DATA
} from './types';

export const nosotrosFetch = () => {
  return (dispatch) => {
    firebase.database().ref('/church/nosotrosdata')
      .on('value', snapshot => {
        dispatch({
          type: NOSOTROS_FETCH_DATA,
          payload: snapshot.val()
        });
      });
  };
};
