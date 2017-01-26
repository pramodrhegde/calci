import React, { Component } from 'react';
import { Text, TouchableHighlight } from 'react-native';

export default class Control extends Component {
  render() {
    return(
      <TouchableHighlight style={{flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 0.5,
        backgroundColor: '#1e2326',
        borderColor: '#3e484e'}}
      onPress={this.props.handleControlClick}>

        <Text style={{
          fontSize: 24,
          fontWeight: 'bold',
          color: '#ffffff'
        }}>
          {this.props.value}
        </Text>
      </TouchableHighlight>
    )
  }
}
