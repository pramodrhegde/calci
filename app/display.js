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

  getLastIndexOf() {
    let str = this.state.historyString;
    let index = -1;

    for(let i=0; i < str.length; i++ ) {
      if(str[i].match(/(\+|\-|\×|\÷)/) && str[i-1] && !str[i-1].match(/(\+|\-|\×|\÷)/)) {
        index = i;
      }
    }
    return index;
  }

  render() {
    let operationRegex = /(\+|\-|\×|\÷)$/;
    let lastIndex = this.getLastIndexOf();

    return (
      <View style={{flex: 3, backgroundColor: '#fafafa'}}>
        <View style={{flex: 1, backgroundColor: '#fafafa'}}>
          <Text style={{textAlign: 'right', padding: 10}}>
            {
              this.state.historyString.search(operationRegex) !== -1 && this.state.historyString.length !== 1 ?
              this.state.historyString
              :
              this.state.historyString.substring(0, lastIndex + 1)
            }
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
