//  All styles go here
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  containerStyle: {
    flex: 1
  },
  primaryBackground: {
    backgroundColor: '#ffffff'
  },
  secondaryBackground: {
    backgroundColor: '#1e2326'
  },
  textAlignRight: {
    textAlign: 'right'
  },
  controlsLayout: {
    flex: 7
  },
  buttonStyles: {
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 0.5,
    backgroundColor: '#1e2326',
    borderColor: '#3e484e'
  },
  buttonTypeOperator: {
    backgroundColor: '#5f4bb6',
    borderColor: '#7e6dcc'
  },
  buttonTypeResult: {
    backgroundColor: '#fec208',
    borderColor: '#FFDA67'
  },
  buttonTextStyles: {
    fontFamily: 'Quicksand-Medium',
    fontSize: 30,
    color: '#ffffff'
  },
  displayLayout: {
    flex: 3,
    paddingTop: 10,
    paddingRight: 20,
    paddingBottom: 10,
    paddingLeft: 20
  },
  displayHistoryText: {
    fontFamily: 'Quicksand-Regular',
    fontSize: 24,
    color: '#1e2326',
    opacity: 0.75
  },
  displayCurrentText: {
    fontFamily: 'Quicksand-Regular',
    fontSize: 38,
    color: '#1e2326'
  }
});;
