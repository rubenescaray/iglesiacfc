import firebase from 'firebase';

import {
  CONTACTO_FETCH_DATA
} from './types';

export const contactoFetch = () => {
  return (dispatch) => {
    firebase.database().ref('/church/contactodata')
      .on('value', snapshot => {
        dispatch({
          type: CONTACTO_FETCH_DATA,
          payload: snapshot.val()
        });
      });
  };
};
