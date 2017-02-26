import React, { Component } from 'react';
import { View } from 'react-native';
import Control from './control.js';
import Styles from './style.js';
// Import the react-native-sound module
import Sound from 'react-native-sound';

let touchSound = new Sound('click.mp3', Sound.MAIN_BUNDLE, (error) => {
  if (error) {
    console.log('failed to load the sound', error);
    return;
  }
  // loaded successfully
  console.log('duration in seconds: ' + touchSound.getDuration() + 'number of channels: ' + touchSound.getNumberOfChannels());
});

const controls = [
  ['AC', '+/-', '%', '÷'],
  [7, 8, 9, '×'],
  [4, 5, 6, '-'],
  [1, 2, 3, '+'],
  [0, '.', 'del', '=']
];

export default class Controls extends Component {

  static propTypes = {
    handleTouch: React.PropTypes.func,
    isOperating: React.PropTypes.bool
  }

  static defaultProps = {
    handleTouch: () => {},
    isOperating: false
  }

  handleControlClick(text, event) {
    // Play the sound with an onEnd callback
    touchSound.setVolume(1);
    touchSound.play();

    let touchType = '';
    touchType = text;
    this.props.handleTouch(text, event);
  }

  renderControls() {
    let rows = [];

    for(let i = 0; i < controls.length; i++) {
      let inputRow = [];
      for(let j=0; j < controls[i].length; j++) {
        if(!i && !j && this.props.isOperating) {
          inputRow.push(<Control key={j}
              value={'C'}
              handleControlClick={this.handleControlClick.bind(this, 'C')}>
          </Control>);
        }else {
          inputRow.push(<Control key={j}
              value={controls[i][j]}
              handleControlClick={this.handleControlClick.bind(this, controls[i][j])}>
          </Control>);
        }
      }
      rows.push(
        <View style={[Styles.controlsLayout, {flexDirection: 'row'}]} key={i}>
          {inputRow}
        </View>
      )
    }
    return rows;
  }

  render() {
    return (
      <View style={[Styles.controlsLayout, Styles.secondaryBackground]}>
        {this.renderControls()}
      </View>
    );
  }
}
