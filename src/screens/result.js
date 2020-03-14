import React from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

export class ResultScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      titleText: "Basic Calculator"
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.screenText}>
          {'Result Screen'}
        </Text>
        <Text style={styles.titleText}>
          {this.state.titleText}
        </Text>
        <Text style={styles.bodyText}>
          {this.props.navigation.state.params.result}
        </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },
  screenText: {
    marginTop: 20,
    fontSize: 30
  },
  titleText: {
    fontSize: 20,
    marginTop: 20,
    fontWeight: 'bold',
  },
  bodyText: {
    fontSize: 20,
    marginTop: 20,
    fontWeight: 'bold',

  }
})