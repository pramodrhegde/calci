import React, { Component } from 'react';
import { View, Text, TouchableNativeFeedback, Platform } from 'react-native';
import Styles from './style.js';

export default class Control extends Component {
  render() {
    let customStyle = {};
    let rippleColor = '#3E484E';
    if(this.props.value === '+' ||
      this.props.value === '-' ||
      this.props.value === '×' ||
      this.props.value === '÷') {
      customStyle = Styles.buttonTypeOperator;
      rippleColor = '#7E6DCC';
    }else if(this.props.value === '=') {
      customStyle = Styles.buttonTypeResult;
      rippleColor = '#FFD03D'
    }

    return(
      <TouchableNativeFeedback onPress={this.props.handleControlClick}
                                background={Platform.Version >= 21 ? TouchableNativeFeedback.Ripple(rippleColor, false)
                                                                    : TouchableNativeFeedback.SelectableBackground()}>
        <View style={[Styles.containerStyle, Styles.buttonStyles, customStyle]}>
          <Text style={[Styles.text, Styles.buttonTextStyles]}>
            {this.props.value}
          </Text>
        </View>
      </TouchableNativeFeedback>
    )
  }
}
