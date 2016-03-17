'use strict'

var React = require('react-native');
var {
  TouchableHighlight,
  View,
  Text,
  StyleSheet,
} = React;
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/Ionicons';
import {fButton} from "../Styles";

var FloatButton = React.createClass({

  render() {
    return(
      <ActionButton buttonColor="rgba(231,76,60,1)"  onPress={() => {
        var navigator = this.props.navigator;
        navigator.push({
          id: 'HackathonEditPage',
        });
      }}/>
    );
  },
});
const styles = StyleSheet.create({
  actionButtonIcon: {
    fontSize: 20,
    height: 22,
    color: 'white',
  },
});
module.exports = FloatButton;
