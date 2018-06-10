import React, { Component } from 'react';
import {
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  Linking
} from 'react-native';
import { connect } from 'react-redux';
import { footerLinks } from '../actions/';

class Footer extends Component {
  componentWillMount() {
    this.props.footerLinks();
  }

  render() {
    const { facebook, instagram, twitter, youtube } = this.props;

    return (
      <View style={styles.banner}>
        <TouchableOpacity onPress={() => Linking.openURL(facebook)}>
          <Image source={require('../assets/img/facebook.png')} style={styles.footerIcon} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => Linking.openURL(twitter)}>
          <Image source={require('../assets/img/twitter.png')} style={styles.footerIcon} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => Linking.openURL(instagram)}>
          <Image source={require('../assets/img/instagram.png')} style={styles.footerIcon} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => Linking.openURL(youtube)}>
          <Image source={require('../assets/img/youtube.png')} style={styles.footerIcon} />
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  banner: {
    backgroundColor: '#370054',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 3,
  },
  footerIcon: {
    width: 40,
    height: 40,
  },
});

const mapStateToProps = ({ footer }) => {
  const { facebook, instagram, twitter, youtube } = footer;

  return { facebook, instagram, twitter, youtube };
};

export default connect(mapStateToProps, { footerLinks })(Footer);
