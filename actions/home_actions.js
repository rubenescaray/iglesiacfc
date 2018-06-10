import firebase from 'firebase';

import {
  HOME_FETCH_DATA
} from './types';

export const slidesFetch = () => {
  return (dispatch) => {
    firebase.database().ref('/church/homedata')
      .on('value', snapshot => {
        dispatch({
          type: HOME_FETCH_DATA,
          payload: snapshot.val()
        });
      });
  };
};
