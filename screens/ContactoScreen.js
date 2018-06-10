import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  ScrollView,
  Platform,
  Linking
} from 'react-native';
import Communications from 'react-native-communications';
import { MapView } from 'expo';
import { connect } from 'react-redux';
import { contactoFetch } from '../actions/';

import Header from '../components/Header';

let initialRegion = {
  latitude: -33.4546194,
  longitude: -70.6585573,
  latitudeDelta: 0.004757,
  longitudeDelta: 0.006866
};
let marker = {
  latitude: initialRegion.latitude,
  longitude: initialRegion.longitude
};

class ContactoScreen extends Component {
  static navigationOptions = {
    drawerLabel: 'Contacto',
    drawerIcon: ({ tintColor }) => (
      <Image
        source={require('../assets/img/logo-cfc-contact.png')}
        style={[styles.icon, { tintColor }]}
      />
    ),
  };

  componentWillMount() {
    this.props.contactoFetch();
  }

  openMenu = () => {
    this.props.navigation.navigate('DrawerOpen');
  }

  render() {
    return (
      <View>
        <Header openMenu={this.openMenu} />
        <ScrollView style={{ marginBottom: 80 }}>
          <View style={styles.headingContainer}>
            <Text style={styles.heading}>Información de Contacto</Text>
          </View>
          <View>
            <MapView
              scrollEnabled={false}
              zoomEnabled={false}
              rotateEnabled={false}
              style={{ height: 200 }}
              cacheEnabled={Platform.OS === 'android'}
              initialRegion={initialRegion}
              onPress={() => {
                if (Platform.OS === 'android') {
                  Linking.openURL(`geo:${initialRegion.latitude},${initialRegion.longitude}?q=${initialRegion.latitude},${initialRegion.longitude}(IGLESIA CFC)`);
                } else if (Platform.OS === 'ios') {
                  Linking.openURL(`http://maps.apple.com/?daddr=${initialRegion.latitude},${initialRegion.longitude}`);
                }
              }}
            >
              <MapView.Marker
                coordinate={marker}
                title="IGLESIA CFC"
                description="Centro de Formación Cristiana"
              />
            </MapView>
            <View
              style={{
                padding: 20,
                height: '56%',
                flexDirection: 'column',
                justifyContent: 'center'
              }}
            >
              <View style={styles.row}>
                <Image
                  source={require('../assets/img/ubi.png')}
                  style={styles.icon}
                />
                <Text
                  style={styles.textContacto}
                  onPress={() => {
                    if (Platform.OS === 'android') {
                      Linking.openURL(`geo:${initialRegion.latitude},${initialRegion.longitude}?q=${initialRegion.latitude},${initialRegion.longitude}(IGLESIA CFC)`);
                    } else if (Platform.OS === 'ios') {
                      Linking.openURL(`http://maps.apple.com/?daddr=${initialRegion.latitude},${initialRegion.longitude}`);
                    }
                  }}
                >
                  {this.props.direccion}
                </Text>
              </View>
              <View style={styles.row}>
                <Image
                  source={require('../assets/img/correo.png')}
                  style={styles.icon}
                />
                <View>
                  <Text
                    style={styles.textContacto}
                    onPress={() => {
                      Communications.email(
                        [this.props.email],
                        null,
                        null,
                        'Contacto - App Móvil',
                        'Mensaje enviado desde modulo de Contacto de App Móvil.'
                      );
                    }}
                  >
                    {this.props.email}
                  </Text>
                </View>
              </View>
              <View style={styles.row}>
                <Image
                  source={require('../assets/img/web.png')}
                  style={styles.icon}
                />
                <View>
                  <Text
                    style={styles.textContacto}
                    onPress={() => Communications.web(this.props.web)}
                  >
                    {this.props.web}
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  headingContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  heading: {
    color: '#660091',
    fontSize: 22,
    fontWeight: 'bold',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginBottom: 10,
  },
  icon: {
    width: 40,
    height: 40
  },
  textContacto: {
    color: '#2171bd',
    textAlign: 'left',
    marginLeft: 5,
  }
});

const mapStateToProps = ({ contacto }) => {
  const {
    latitud,
    longitud,
    latitudDelta,
    longitudDelta,
    direccion,
    telefono,
    email,
    web
  } = contacto;

  return {
    latitud,
    longitud,
    latitudDelta,
    longitudDelta,
    direccion,
    telefono,
    email,
    web
  };
};

export default connect(mapStateToProps, { contactoFetch })(ContactoScreen);
