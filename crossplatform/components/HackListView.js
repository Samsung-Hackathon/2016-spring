'use strict'

var React = require('react-native');
var {
  TouchableHighlight,
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
} = React;
var HackListView = React.createClass({
  ab2str(buf) {
    var
      binaryString = '',
      bytes = new Uint16Array(buf),
      length = bytes.length;
    for (var i = 0; i < length; i++) {
      binaryString += String.fromCharCode(bytes[i]);
    }
    return binaryString;
  },
  render() {
    let rows =[];
    var {height, width} = Dimensions.get('window');
    this.props.hack.forEach((object,index,collection)=>{
      let imgStr =this.ab2str(object["picture"]);
      console.log(imgStr);
      rows.push(<View key={index}><Text>{object["title"]}</Text><Image source={{uri:imgStr}}  style={{width:width,height: 200, marginTop:86}} /></View>);
    });
    return(
      <View>
        {rows}
      </View>
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
module.exports = HackListView;
