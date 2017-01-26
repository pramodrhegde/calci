import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class Display extends Component {

  constructor(props) {
    super(props);

    this.state = {
      historyString: props.data.historyString,
      currentString: props.data.currentString
    }
  }

  componentWillReceiveProps(nextProps) {
    this.state = {
      historyString: nextProps.data.historyString,
      currentString: nextProps.data.currentString
    }
  }

  render() {
    return (
      <View style={{flex: 3, backgroundColor: '#fafafa'}}>
        <View style={{flex: 1, backgroundColor: '#fafafa'}}>
          <Text style={{textAlign: 'right', padding: 10}}>
            {this.state.historyString}
          </Text>
        </View>

        <View style={{flex: 1, backgroundColor: '#fafafa'}}>
          <Text style={{textAlign: 'right', padding: 10}}>
            {this.state.currentString}
          </Text>
        </View>
      </View>
    );
  }
}
