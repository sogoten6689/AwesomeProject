import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,TouchableOpacity
} from 'react-native';

export class SuperlativeEquationScreen extends Component {
  goToResultScreen = () => {
    this.props.navigation.navigate('resultScreen');
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.screenText}>{'Superlative Equation'}</Text>
        <TouchableOpacity
          activeOpacity={0.5}
          onPress={this.goToResultScreen}
          style={styles.gotoBtn}>
          <Text style={styles.gotoBtnText}>
            {'Result'}
          </Text>
        </TouchableOpacity>
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
  gotoBtn: {
    marginTop: 20,
    height: 60,
    width: 325,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#3366FF'
  },
  gotoBtnText: {
    color: '#ffffff',
    fontSize: 25,
  }
});