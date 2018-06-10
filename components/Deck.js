import React, { Component } from 'react';
import {
  View,
  Dimensions,
} from 'react-native';

const SCREEN_WIDTH = Dimensions.get('window').width;

class Deck extends Component {
  renderCards() {
    return this.props.data.map((item, i) => {
      // if (i === this.props.data.length) {
      //   return (
      //     this.props.renderNoMoreCards()
      //   );
      // }
      return (
        <View
          key={i}
          style={styles.cardStyle}
        >
          {this.props.renderCard(item)}
        </View>
      );
    }).reverse();
  }

  render() {
    return (
      <View>
        {this.renderCards()}
      </View>
    );
  }
}

const styles = {
  cardStyle: {
    width: SCREEN_WIDTH,
  }
};

export default Deck;
