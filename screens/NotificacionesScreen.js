import _ from 'lodash';
import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, ScrollView } from 'react-native';
import { Card, Button } from 'react-native-elements';

import { connect } from 'react-redux';
import { notificacionesFetch } from '../actions';

import Header from '../components/Header';
import Deck from '../components/Deck';

class NotificacionesScreen extends Component {
  static navigationOptions = {
    drawerLabel: 'Notificaciones',
    drawerIcon: ({ tintColor }) => (
      <Image
        source={require('../assets/img/logo-cfc-notification.png')}
        style={[styles.icon, { tintColor }]}
      />
    ),
  };

  state = { scrollHeight: 0 };


  componentWillMount() {
    this.props.notificacionesFetch();
  }

  componentDidMount() {
    // const { navigation } = this.props;
    // const { params } = navigation.state;
    // if (params) {
    //   const { idPost } = params;
    //   this.refs.scrollView.scrollTo({ x: 0, y: this.state.scrollHeight, animated: true });
    // }
  }

  openMenu = () => {
    this.props.navigation.navigate('DrawerOpen');
  }

  renderCard(item) {
    return (
      <Card
        title={item.titulo}
        image={{ uri: item.imagen }}
        imageStyle={{ height: 330 }}
      >
        <Text>
          {item.texto}
        </Text>
      </Card>
    );
  }

  renderNoMoreCards() {
    return (
      <Card title={'¿Te has entretenido?'}>
        <Text style={{ marginBottom: 10 }}>
          No hay más contenido por ahora.
        </Text>
        <Button
          icon={{ name: 'explore' }}
          backgroundColor="#03A9F4"
          title="¡Visita Nuestra Web!"
        />
      </Card>
    );
  }

  render() {
    return (
      <View>
        <Header openMenu={this.openMenu} />
        <ScrollView
          onContentSizeChange={(w, h) => this.setState({ scrollHeight: h })}
          style={{ marginBottom: 80 }}
        >
          <Deck
            data={this.props.notificacion}
            renderCard={this.renderCard}
            renderNoMoreCards={this.renderNoMoreCards}
          />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  icon: {
    width: 40,
    height: 40
  },
});

function mapStateToProps({ notificaciones }) {
  const notificacion = _.map(notificaciones, (val) => {
    return { ...val };
  });

  return { notificacion };
}

export default connect(mapStateToProps, { notificacionesFetch })(NotificacionesScreen);
