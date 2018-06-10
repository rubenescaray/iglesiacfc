import firebase from 'firebase';

import {
  NOTIFICACIONES_FETCH_DATA
} from './types';

export const notificacionesFetch = () => {
  return (dispatch) => {
    firebase.database().ref('/church/notificaciones')
      .on('value', snapshot => {
        dispatch({
          type: NOTIFICACIONES_FETCH_DATA,
          payload: snapshot.val()
        });
      });
  };
};
