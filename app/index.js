import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Display from './display.js';
import Controls from './controls.js';

export default class CalculatorApp extends Component {

  constructor(props) {
    super(props);
    this.state = {
      operationData: {
        historyString: '',
        currentString: '0'
      },
      equation: '0'
    };
  }

  handleControlClick(touch, event) {
    let operationData = this.state.operationData;
    let currentEquation = this.state.equation;
    let operationRegex = /(\+|\-|\*|\/)$/;

    if(typeof touch === 'number') {
      if(currentEquation.search(operationRegex) === currentEquation.length - 1 || currentEquation === '0') {
        operationData.currentString = touch.toString();
        if(currentEquation === '0') {
          currentEquation = '';
        }
      }else {
        operationData.currentString += touch;
      }

      currentEquation += touch;
      operationData.historyString += touch;

      this.setState({
        operationData: operationData,
        equation: currentEquation
      });
    }else if(typeof touch === 'string') {

      switch(touch) {
        case '+':
        case '-':
        case '×':
        case '÷': let operator = '';
                  if(touch === '×') {
                    operator = '*';
                  }else if(touch === '÷') {
                    operator = '/';
                  }else {
                    operator = touch;
                  }
                  // if already operator exists
                  if(currentEquation.match(/(\+|\-|\*|\/)/)) {

                    if(currentEquation.search(operationRegex) === currentEquation.length - 1) {
                      operationData.historyString = currentEquation.replace(operationData.historyString[operationData.historyString.length - 1], touch);
                    }else {
                      operationData.historyString += touch;
                    }

                    //  If no second operand
                    if(currentEquation.search(operationRegex) === currentEquation.length - 1) {
                      currentEquation = currentEquation.replace(currentEquation[currentEquation.length - 1], operator);
                      this.setState({
                        equation: currentEquation
                      });
                    }else {
                      //  evaluate
                      let result = this.evaluateEquation().toString();
                      currentEquation = result + operator;
                      operationData.currentString = result;
                      this.setState({
                        equation: currentEquation,
                        operationData: operationData
                      });
                    }

                  }else {
                    currentEquation += operator;
                    operationData.historyString += touch;
                    this.setState({
                      equation: currentEquation,
                      operationData: operationData
                    });
                  }

                  break;
        case '+/-': if(Number(operationData.currentString) > 0) {
                      currentEquation = currentEquation.replace(operationData.currentString, '-' + operationData.currentString);
                      operationData.historyString =  operationData.historyString.replace(operationData.currentString, '-' + operationData.currentString);
                      operationData.currentString = '-' + operationData.currentString;

                    }else {
                      currentEquation = currentEquation.replace(operationData.currentString, Math.abs(Number(operationData.currentString)));
                      operationData.historyString =  operationData.historyString.replace(operationData.currentString, Math.abs(Number(operationData.currentString)).toString());
                      operationData.currentString = Math.abs(Number(operationData.currentString)).toString();
                    }

                  this.setState({
                    equation: currentEquation,
                    operationData: operationData
                  });
                  break;

                    break;
        case 'AC': currentEquation = '0';
                    operationData.currentString = '0';
                    operationData.historyString = '';
                    this.setState({
                      equation: currentEquation,
                      operationData: operationData
                    });

                  break;
        case '.': if(currentEquation.search(operationRegex) === currentEquation.length - 1) {
                    currentEquation = currentEquation.replace(currentEquation, currentEquation + '0.');
                    operationData.historyString = operationData.historyString.replace(operationData.historyString, operationData.historyString + '0.');
                    operationData.currentString = '0.';

                    this.setState({
                      equation: currentEquation,
                      operationData: operationData
                    });
                  }else {
                    if(operationData.currentString.indexOf('.') === -1) {
                      currentEquation = currentEquation.replace(operationData.currentString, operationData.currentString + '.');
                      if(operationData.historyString === '') {
                        operationData.historyString =  operationData.historyString.replace('',  operationData.currentString);
                      }
                      operationData.historyString =  operationData.historyString.replace(operationData.currentString, operationData.currentString + '.');
                      operationData.currentString += '.';

                      this.setState({
                        equation: currentEquation,
                        operationData: operationData
                      });
                    }
                  }

                  break;
        case '%': let result = Number(operationData.currentString) / 100;
                  currentEquation = currentEquation.replace(operationData.currentString, result);
                  operationData.historyString =  operationData.historyString.replace(operationData.currentString, result);
                  operationData.currentString = result;
                  this.setState({
                    equation: currentEquation,
                    operationData: operationData
                  });
                  break;
        case 'del': if(currentEquation.search(operationRegex) !== currentEquation.length - 1) {
                      currentEquation = currentEquation.substring(0, currentEquation.length - 1);
                      operationData.currentString = operationData.currentString.substring(0, operationData.currentString.length - 1);

                      if(operationData.currentString === '' || operationData.currentString === '-') {
                        operationData.currentString = '0';
                      }
                      this.setState({
                        operationData: operationData,
                        equation: currentEquation
                      });
                    }else {
                      return false;
                    }
                    break;
        case '=': operator = currentEquation[currentEquation.search(/(\+|\-|\*|\/)/)];
                  if(currentEquation.search(operationRegex) === currentEquation.length - 1) {
                    this.setState({
                      equation: currentEquation + this.state.operationData.currentString
                    }, () => {
                      //  evaluate
                      let result = this.evaluateEquation().toString();
                      operationData.currentString = result;
                      this.setState({
                        equation: result + operator,
                        operationData: operationData
                      });
                    });
                  }else if(operator){
                    let result = this.evaluateEquation().toString();
                    operationData.currentString = result;
                    this.setState({
                      equation: result + operator,
                      operationData: operationData
                    });
                  }
                  operationData.historyString = '';
                  this.setState({
                    operationData: operationData
                  });
        default: break;
      }
    }
  }

  evaluateEquation() {
    let equation = this.state.equation;
    return eval(equation);
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
