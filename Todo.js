import React, {Component} from 'react';
import {View, Text, StyleSheet, CheckBox} from 'react-native';

export default class Todo extends Component {
  render() {
    const {
      item: {complete, text},
      index,
      onPress,
      done,
    } = this.props;
    if (done === complete) {
      return (
        <View style={styles.item}>
          <Text style={styles.title}>{text}</Text>
          <CheckBox
            value={complete}
            onValueChange={value => {
              console.log('allllllll');
              onPress(index, value);
            }}
          />
        </View>
      );
    } else {
      return null;
    }
  }
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 32,
  },
});
