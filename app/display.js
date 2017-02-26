import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Styles from './style.js';

export default class Display extends Component {

  constructor(props) {
    super(props);
  }

  getLastIndexOf() {
    let str = this.props.data.historyString;
    let index = -1;

    for(let i=0; i < str.length; i++ ) {
      if(str[i].match(/(\+|\-|\×|\÷)/) && str[i-1] && !str[i-1].match(/(\+|\-|\×|\÷)/) &&
        str[i-1] !== 'e') {
        index = i;
      }
    }
    return index;
  }

  numberWithCommas(number) {
    var parts = number.toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return parts.join(".");
  }

  render() {
    let operationRegex = /(\+|\-|\×|\÷)$/;
    let lastIndex = this.getLastIndexOf();
    return (
      <View style={[Styles.displayLayout, Styles.primaryBackground]}>
        <View style={[Styles.containerStyle, Styles.primaryBackground]}>
          {
            this.props.data.currentString !== '0' ?
            <Text style={[Styles.displayHistoryText, Styles.textAlignRight]}>
              {
                this.props.data.historyString.search(operationRegex) !== -1 && this.props.data.historyString.length !== 1 ?
                this.numberWithCommas(this.props.data.historyString)
                :
                this.numberWithCommas(this.props.data.historyString.substring(0, lastIndex + 1))
              }
            </Text>
            :
            null
          }
        </View>

        <View style={[Styles.containerStyle, Styles.primaryBackground]}>
          <Text style={[Styles.displayCurrentText, {textAlign: 'right'}]}>
            {
              this.numberWithCommas(this.props.data.currentString)
            }
          </Text>
        </View>
      </View>
    );
  }
}
