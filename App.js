/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import 'react-native-gesture-handler';
import React, { Component } from 'react';

import { Router } from './src/navigation/routes';

class App extends Component {
  render() {
    return (
      <Router/>
    );
  }
};

export default App;
