'use strict';

var React = require('react-native');
import Toolbar from './components/Toolbar'
var {
  Component,
  View,
  Text,
  StatusBar,
} = React;
var FloatButton = require('./components/FloatButton');

class HackathonListPage extends Component {
  onIconPress () {

  }
  submitRequest(){

  }
  render() {
    return (
      <View style={{flex: 1, backgroundColor: '#246dd5', alignItems: 'center'}}>
        <Toolbar onIconPress={this.onIconPress}/>
        <FloatButton navigator={this.props.navigator} submitRequest={this.submitRequest}/>
      </View>
    );
  }
}

module.exports = HackathonListPage;
