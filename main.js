import Expo from 'expo';
import React from 'react';
import { StyleSheet, View, Image, Dimensions, Platform, StatusBar } from 'react-native';
import firebase from 'firebase';
import { DrawerNavigator, DrawerItems } from 'react-navigation';
import { Provider } from 'react-redux';
import registerForNotifications from './services/push_notifications';
import store from './store';

import HomeScreen from './screens/HomeScreen';
import NosotrosScreen from './screens/NosotrosScreen';
import NotificacionesScreen from './screens/NotificacionesScreen';
import ContactoScreen from './screens/ContactoScreen';

import Footer from './components/Footer';

const SCREEN_WIDTH = Dimensions.get('window').width;

const CustomDrawerContentComponent = props => (
  <View style={{ flex: 1, backgroundColor: '#F4F3F2' }}>
    <View style={styles.drawerImage}>
      <Image
        source={require('./assets/img/logo-cfc-menu.png')}
        style={{ width: SCREEN_WIDTH * 0.57 }}
        resizeMode="contain"
      />
    </View>
    <DrawerItems {...props} />
  </View>
);

class App extends React.Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyDG9QxUDSiXwJDHcCR1_0_FGUSKoYJkMo0',
      authDomain: 'icfc-c9ca8.firebaseapp.com',
      databaseURL: 'https://icfc-c9ca8.firebaseio.com',
      projectId: 'icfc-c9ca8',
      storageBucket: 'icfc-c9ca8.appspot.com',
      messagingSenderId: '264210776085'
    };
    firebase.initializeApp(config);
    registerForNotifications();
  }

  render() {
    const MainNavigator = DrawerNavigator({
      Home: {
        path: '/home',
        screen: HomeScreen,
      },
      Nosotros: {
        path: '/nosotros',
        screen: NosotrosScreen,
      },
      Notificaciones: {
        path: '/notificaciones',
        screen: NotificacionesScreen,
      },
      Contacto: {
        path: '/contacto',
        screen: ContactoScreen,
      },
    }, {
      initialRouteName: 'Home',
      contentOptions: {
        activeTintColor: '#660091',
        activeBackgroundColor: '#e7e7e7',
        inactiveTintColor: '#000',
        inactiveBackgroundColor: 'transparent',
        labelStyle: {
          fontSize: 15,
          marginLeft: 0,
        },
      },
      drawerWidth: SCREEN_WIDTH * 0.7,
      drawerPosition: 'right',
      contentComponent: CustomDrawerContentComponent,
    });

    return (
      <Provider store={store}>
        <View style={styles.container}>
          <MainNavigator />
          <Footer />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  drawerImage: {
    alignItems: 'center',
  },
  container: {
    flex: 1,
    marginTop: Platform.OS === 'ios' ? 20 : StatusBar.currentHeight,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
});

Expo.registerRootComponent(App);
