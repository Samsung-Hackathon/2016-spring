'use strict';

import React, {
  Component,
  View,
  Text,
  StatusBar,
  Image,
  Dimensions,
  StyleSheet,
  TextInput,
  Picker
} from 'react-native';
import Toolbar from './components/Toolbar'
import FloatButton from './components/FloatButton';
let MK = require('react-native-material-kit');
let {
  MKTextField,MKColor,MKCardStyles, MKProgress,
  MKSpinner,mdl,
} = MK;
let styles = StyleSheet.create({
  label : {
    flex:1,height:28,marginTop:25,paddingLeft :20,
  }
});
let ListPopover = require('./components/ListPopover');
var items = ["email", "free email","free"];
class HackathonEditPage extends Component {
  constructor(props){
    super(props);
    this.state = {
      title : "hackathon title",
      description : "hackathon desc",
      joinType : "email",
      joinmail : "@samsung.com",
      owner : "1303844536307413",
    };
  }
  onIconPress () {

  }
  submitRequest(){

  }
  render() {
    var {height, width} = Dimensions.get('window');
    return (
      <View style={{flex:1, alignItems: 'center'}}>
        <Toolbar onIconPress={this.onIconPress}/>
        <Image source={require('../img/rocket-640.jpg')} style={{width:width,height: 200, marginTop:86}}/>
        <View style={{flexDirection:'row',width:width}}>
          <Text style={styles.label}>제목</Text>
          <MKTextField
            style={{
              height: 28,  // have to do it on iOS
              marginTop: 22,
              flex:4
            }}
            placeholder="제목"
            onChangeText={(text) => this.setState({title:text})}
          />
          </View>
        <View style={{flexDirection:'row',width:width}}>
          <Text style={styles.label}>가입</Text>
          <ListPopover
            list={items}
            isVisible={this.state.isVisible}
            onClick={this.setItem}
            onClose={this.closePopover}/>
        </View>
      </View>
    );
  }
}

module.exports = HackathonEditPage;
