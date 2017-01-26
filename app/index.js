import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Display from './display.js';
import Controls from './controls.js';

export default class CalculatorApp extends Component {

  constructor() {
    super();
    this.state = {
      operationData: {
        historyString: '',
        currentString: '0'
      }
    };
  }

  handleControlClick(touch, event) {
    let currentState = this.state.operationData;

    if(typeof touch === 'number') {
      this.setState({
        operationData: {
          historyString: '',
          currentString: currentState.currentString === '0' ? touch.toString() : currentState.currentString + touch.toString()
        }
      });
    }else if(typeof touch === 'string') {

      switch() {
        case '+':
                  break;
        case '-':
                  break;
        case '×':
                  break;
        case '÷':
                  break;
        case '+/-':
                    break;
        case 'AC':
                  break;
        case '.':
                  break;
        case '%':
                  break;
        case 'del':
                    break;
        case '=':
                  break;
        default: break;
      }
    }
  }

  render() {
    return (
      <View style={{
        flex: 1,
        backgroundColor: '#fafafa'
      }}>
        <Display data={this.state.operationData}/>
        <Controls handleTouch={this.handleControlClick.bind(this)}/>
      </View>
    );
  }
}
