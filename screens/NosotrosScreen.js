import React, { Component } from 'react';
import { StyleSheet, View, Image, ScrollView, Dimensions } from 'react-native';
import { Text } from 'react-native-elements';

import { connect } from 'react-redux';
import { nosotrosFetch } from '../actions';

import Header from '../components/Header';

const SCREEN_WIDTH = Dimensions.get('window').width;

class NosotrosScreen extends Component {
  static navigationOptions = {
    drawerLabel: 'Nosotros',
    drawerIcon: ({ tintColor }) => (
      <Image
        source={require('../assets/img/logo-cfc-home.png')}
        style={[styles.icon, { tintColor }]}
      />
    ),
  };

  componentWillMount() {
    this.props.nosotrosFetch();
  }

  openMenu = () => {
    this.props.navigation.navigate('DrawerOpen');
  }

  render() {
    const { mision, vision, imgHeader } = this.props;
    const { titleNosotros, textNosotros, slideStyle } = styles;

    return (
      <View>
        <Header openMenu={this.openMenu} />
        <ScrollView style={{ marginBottom: 80 }}>
          <Image
            style={slideStyle}
            source={{ uri: imgHeader }}
          />
          <View style={{ padding: 20 }}>
            <Text style={titleNosotros}>Misión</Text>
            <Text style={textNosotros}>{mision}</Text>
            <Text style={[titleNosotros, { paddingTop: 20 }]}>Visión</Text>
            <Text style={textNosotros}>{vision}</Text>
          </View>
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
  titleNosotros: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  textNosotros: {
    textAlign: 'justify',
  },
  slideStyle: {
    width: SCREEN_WIDTH,
    height: 120,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

function mapStateToProps({ nosotros }) {
  const { mision, vision, imgHeader } = nosotros;

  return { mision, vision, imgHeader };
}

export default connect(mapStateToProps, { nosotrosFetch })(NosotrosScreen);
