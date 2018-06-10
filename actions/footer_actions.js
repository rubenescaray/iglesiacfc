import firebase from 'firebase';

import {
  FOOTER_DATA
} from './types';

export const footerLinks = () => {
  return (dispatch) => {
    firebase.database().ref('/church/footer')
      .on('value', snapshot => {
        dispatch({
          type: FOOTER_DATA,
          payload: snapshot.val()
        });
      });
  };
};
