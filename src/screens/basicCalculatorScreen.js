import React from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';


export class BasicCalculatorScreen extends React.Component {
  goToResultScreen = () => {
    this.props.navigation.navigate('resultScreen',{result: 'Ket qua phep nhan la 0'});
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.screenText}>{'Basic Calculator'}</Text>
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
