import React from 'react';
import {
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

const Header = ({ openMenu }) => (
  <View style={styles.banner}>
    <Image source={require('../assets/img/logo-cfc-left.png')} style={styles.imageLeft} />
    <Image source={require('../assets/img/logo-cfc-left.png')} style={styles.imageCenter} />
    <TouchableOpacity onPress={openMenu}>
      <Image
        source={require('../assets/img/menu-button.png')}
        style={styles.menuIcon}
      />
    </TouchableOpacity>
  </View>
);

export default Header;

const styles = StyleSheet.create({
  banner: {
    backgroundColor: '#660091',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
  imageLeft: {
    width: 60,
    height: 60,
  },
  imageCenter: {
    width: 112,
    height: 60,
  },
  menuIcon: {
    width: 25,
    height: 25,
    marginLeft: 35,
  }
});
