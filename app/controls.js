import React, { Component } from 'react';
import { View } from 'react-native';
import Control from './control.js';

const controls = [
  ['AC', '+/-', '%', '÷'],
  [7, 8, 9, '×'],
  [4, 5, 6, '-'],
  [1, 2, 3, '+'],
  [0, '.', 'del', '=']
];

export default class Controls extends Component {

  handleControlClick(text, event) {
    let touchType = '';
    touchType = text;
    this.props.handleTouch(text, event);
  }

  renderControls() {
    let rows = [];

    for(let i = 0; i < controls.length; i++) {
      let inputRow = [];
      for(let j=0; j < controls[i].length; j++) {
        inputRow.push(<Control key={j}
            value={controls[i][j]}
            handleControlClick={this.handleControlClick.bind(this, controls[i][j])}>
        </Control>)
      }
      rows.push(
        <View style={{flex:1, flexDirection: 'row'}} key={i}>
          {inputRow}
        </View>
      )
    }
    return rows;
  }

  render() {
    return (
      <View style={{flex: 7, backgroundColor: '#1e2326'}}>
        {this.renderControls()}
      </View>
    );
  }
}
