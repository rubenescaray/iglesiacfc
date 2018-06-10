import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  Dimensions,
  Linking,
  TouchableHighlight,
} from 'react-native';
import { Button } from 'react-native-elements';

const SCREEN_WIDTH = Dimensions.get('window').width;

class Slides extends Component {
  formatSlide(slide, i) {
    if (slide.isColor) {
      return (
        <View key={i} style={[styles.slideStyle, { backgroundColor: slide.color }]}>
          <Text style={styles.textStyle}>{slide.text}</Text>
          {this.renderButton(slide)}
        </View>
      );
    }

    return (
      <TouchableHighlight
        key={i}
        onPress={() => {
          if (slide.imageURL !== '') {
            Linking.openURL(slide.imageURL);
          }
        }}
      >
        <Image
          style={styles.slideStyle}
          source={{ uri: slide.imageLink }}
        />
      </TouchableHighlight>
    );
  }

  renderButton(slide) {
    if (slide.hasButton) {
      return (
        <Button
          title={slide.buttonText}
          buttonStyle={{ backgroundColor: slide.buttonColor }}
          raised
          onPress={() => {
            Linking.openURL(slide.buttonLink);
          }}
        />
      );
    }
  }

  renderSlides() {
    return this.props.data.map((slide, i) => {
      return this.formatSlide(slide, i);
    });
  }

  render() {
    return (
      <ScrollView
        horizontal
        pagingEnabled
      >
        {this.renderSlides()}
      </ScrollView>
    );
  }
}

const styles = {
  slideStyle: {
    flex: 1,
    width: SCREEN_WIDTH,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textStyle: {
    fontSize: 30,
    color: 'white',
    textAlign: 'center',
    marginBottom: 20
  },
};

export default Slides;
