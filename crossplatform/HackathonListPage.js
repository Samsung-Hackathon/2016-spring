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
import { ListView } from 'realm/react-native';
import Realm from 'realm';
import {Hackathon} from '../model/hackathon'
let realm = new Realm({schema: [Hackathon]});
import HackListView from './components/HackListView';

class HackathonListPage extends Component {
  constructor(props){
    super(props);

  }
  onIconPress () {

  }
  submitRequest(){

  }
  render() {
    // realm.write(() => {
      let hackathon = realm.objects('Hackathon');
      // realm.delete(hackathon);
    // });
    return (
      <View style={{flex: 1, backgroundColor: '#246dd5', alignItems: 'center'}}>
        <Toolbar onIconPress={this.onIconPress}/>
        <HackListView hack = {hackathon}/>
        <FloatButton navigator={this.props.navigator} submitRequest={this.submitRequest}/>
      </View>
    );
  }
}

module.exports = HackathonListPage;
