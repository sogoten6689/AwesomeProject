import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

export class SuperlativeEquationScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.screenText}>
          {'Basic Calculator Screen'}
        </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  screenText: {
    fontSize: 50
  }
})