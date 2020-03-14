import React from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';


const [value, onChangeText] = React.useState('Useless Placeholder');

export class BasicCalculatorScreen extends React.Component {
  
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.screenText}>{'Basic Calculator Screen'}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    alignItems: 'center',
  },
  screenText: {
    fontSize: 30,
  },
});
