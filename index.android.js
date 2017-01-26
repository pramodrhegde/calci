/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import CalculatorApp from './app/index.js';

export default class calci extends Component {
  render() {
    return (
      <CalculatorApp />
    );
  }
}

AppRegistry.registerComponent('calci', () => calci);
