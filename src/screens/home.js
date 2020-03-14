import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

export class Home extends React.Component {
  gotoBasicCalculatorScreen = () => {
    this.props.navigation.navigate('basicCalculatorScreen');
  }

  gotoSuperlativeEquationScreen = () => {
    this.props.navigation.navigate('superlativeEquationScreen');
  }

  render() {
    return (
      <View style={styles.container}>
        <View></View>
        <Text style={styles.screenText}>
          {'Calculator'}
        </Text>
        <TouchableOpacity
          activeOpacity={0.5}
          onPress={this.gotoBasicCalculatorScreen}
          style={styles.gotoBtn}>
          <Text style={styles.gotoBtnText}>
            {'Basic Calculator'}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.5}
          onPress={this.gotoSuperlativeEquationScreen}
          style={styles.gotoBtn}>
          <Text style={styles.gotoBtnText}>
            {'Superlative Equation'}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.5}
          onPress={this.gotoScreenA2}
          style={styles.gotoBtn}>
          <Text style={styles.gotoBtnText}>
            {'Quadratic Equation'}
          </Text>
        </TouchableOpacity>
        <View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  screenText: {
    fontSize: 50
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
})