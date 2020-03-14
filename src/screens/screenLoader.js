import React from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

export class ScreenLoader extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.screenText}>
          {'Screen Loader'}
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
  },
})