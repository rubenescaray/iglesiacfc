import _ from 'lodash';
import React, { Component } from 'react';
import { View } from 'react-native';
import { Notifications, AppLoading } from 'expo';
import { Icon } from 'react-native-elements';

import { connect } from 'react-redux';
import { slidesFetch } from '../actions';


import Header from '../components/Header';
import Slides from '../components/Slides';

class HomeScreen extends Component {
  static navigationOptions = {
    drawerLabel: 'Inicio',
    drawerIcon: ({ tintColor }) => (
      <Icon
        name="home"
        size={30}
        style={{
          width: 50,
          height: 50,
          alignItems: 'center',
          justifyContent: 'center',
        }}
        type="material-commnity"
        color={tintColor}
      />
    ),
  };

  componentWillMount() {
    this.notificationSubscription = Notifications.addListener(this.handleNotification);
    this.props.slidesFetch();
  }

  handleNotification = (notification) => {
    console.log('Push received!');
    const { data: { idPost }, origin } = notification;
    console.log(notification);
    if (origin === 'selected') {
      if (idPost) {
        this.props.navigation.navigate('Notificaciones', { idPost });
      }
    }
  };

  openMenu = () => {
    this.props.navigation.navigate('DrawerOpen');
  }

  render() {
    if (this.props.slides.length === 0) {
      return <AppLoading />;
    }

    return (
      <View style={{ flex: 1 }}>
        <Header openMenu={this.openMenu} />
        <Slides
          data={this.props.slides}
        />
      </View>
    );
  }
}

function mapStateToProps({ home }) {
  const slides = _.map(home, (val) => {
    return { ...val };
  });

  return { slides };
}

export default connect(mapStateToProps, { slidesFetch })(HomeScreen);
