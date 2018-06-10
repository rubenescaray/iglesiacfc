import { Permissions, Notifications } from 'expo';
import { AsyncStorage } from 'react-native';
import axios from 'axios';

const PUSH_ENDPOINT = 'https://us-central1-icfc-c9ca8.cloudfunctions.net/saveToken';

export default async () => {
  let previousToken = await AsyncStorage.getItem('pushToken');

  // console.log('Previous:');
  // console.log(previousToken);

  if (previousToken) {
    // await axios.post(PUSH_ENDPOINT, { token: previousToken });
    return;
  } else {
    let { status } = await Permissions.askAsync(Permissions.REMOTE_NOTIFICATIONS);

    if (status !== 'granted') {
      return;
    }

    let token = await Notifications.getExponentPushTokenAsync();

    // console.log('New Token:');
    // console.log(token);

    await axios.post(PUSH_ENDPOINT, { token });

    AsyncStorage.setItem('pushToken', token);
  }
};
