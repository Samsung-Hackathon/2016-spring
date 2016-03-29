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
  TouchableHighlight,
  Picker
} from 'react-native';
import Toolbar from './components/Toolbar'
import FloatButton from './components/FloatButton';
import ListPopover from 'react-native-list-popover';
import {Button} from  'react-native-material-design';
var ImagePickerManager = require('NativeModules').ImagePickerManager;
import Realm from 'realm';
import {Hackathon} from '../model/hackathon'
let MK = require('react-native-material-kit');
let {
  MKTextField,MKColor,MKCardStyles, MKProgress,
  MKSpinner,mdl,
} = MK;
let styles = StyleSheet.create({
  label : {
    flex:1,height:28,marginTop:25,paddingLeft :20,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#532860',
  },
  button: {
    borderRadius: 4,
    padding: 10,
    marginLeft: 10,
    marginRight: 10,
    backgroundColor: "#B8C",
  },
});
var options = {
  title: 'HackathonImage', // specify null or empty string to remove the title
  cancelButtonTitle: 'Cancel',
  takePhotoButtonTitle: 'Take Photo...', // specify null or empty string to remove this button
  chooseFromLibraryButtonTitle: 'Choose from Library...', // specify null or empty string to remove this button
  customButtons: {
    'Choose Photo from Facebook': 'fb', // [Button Text] : [String returned upon selection]
  },
  cameraType: 'back', // 'front' or 'back'
  mediaType: 'photo', // 'photo' or 'video'
  aspectX: 2, // android only - aspectX:aspectY, the cropping image's ratio of width to height
  aspectY: 1, // android only - aspectX:aspectY, the cropping image's ratio of width to height
  quality: 1, // 0 to 1, photos only
  angle: 0, // android only, photos only
  allowsEditing: false, // Built in functionality to resize/reposition the image after selection
  noData: false, // photos only - disables the base64 `data` field from being generated (greatly improves performance on large photos)
  storageOptions: { // if this key is provided, the image will get saved in the documents directory on ios, and the pictures directory on android (rather than a temporary directory)
    skipBackup: true, // ios only - image will NOT be backed up to icloud
    path: 'images' // ios only - will save image at /Documents/images rather than the root
  }
};
let realm = new Realm({schema: [Hackathon]});

class HackathonEditPage extends Component {
  constructor(props){
    super(props);
    var initImage = require('../img/rocket-640.jpg');
    console.log(initImage);

    this.state = {
      title : "hackathon title",
      description : "hackathon desc",
      joinType : "email",
      joinmail : "@samsung.com",
      owner : "1303844536307413",
      hackathonImage : initImage,
    };
  }
  onIconPress () {

  }
  strToBuffer(str){
    var buf = new ArrayBuffer(str.length*2); // 2 bytes for each char
    var bufView = new Uint16Array(buf);
    for (var i=0, strLen=str.length; i<strLen; i++) {
      bufView[i] = str.charCodeAt(i);
    }
    return buf;
  }
  onSubmit (){
    realm.write(()=>{
      console.log(this,typeof this.state.hackathonImage);
      let hackathon = realm.create('Hackathon',{
        title : this.state.title,
        description : this.state.description,
        picture : this.strToBuffer(this.state.hackathonImage.uri),
        joinType : this.state.joinType,
        joinmail : this.state.joinmail,
        cratedAt : new Date(),
        updatedAt : new Date(),
        owner : this.state.owner,
      })
    });
    this.props.navigator.pop({id:'HackathonListPage'});
  }
  _onPressImage(){
    ImagePickerManager.showImagePicker(options, (response) => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled image picker');
      }
      else if (response.error) {
        console.log('ImagePickerManager Error: ', response.error);
      }
      else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      }
      else {
        // You can display the image using either data:
        let source = {uri: 'data:image/jpeg;base64,' + response.data, isStatic: true};
        //
        // // uri (on iOS)
        // const source = {uri: response.uri.replace('file://', ''), isStatic: true};
        // // uri (on android)
        // const source = {uri: response.uri, isStatic: true};

        this.setState({
          hackathonImage: source
        });
      }
    });
  }
  render() {
    var {height, width} = Dimensions.get('window');
    return (
      <View style={{flex:1, alignItems: 'center'}}>
        <Toolbar onIconPress={this.onIconPress}/>
        <TouchableHighlight onPress={()=>this._onPressImage()}>
          <Image source={this.state.hackathonImage} style={{width:width,height: 200, marginTop:86}} />
        </TouchableHighlight>
        <View style={{flexDirection:'row',width:width}}>
          <Text style={styles.label}>제목</Text>
          <MKTextField
            style={{
              height: 28,  // have to do it on iOS
              marginTop: 22,
              flex:4
            }}
            placeholder="제목"
            onChangeText={(text)=>{this.setState({title:text})}}
          />
        </View>
        <View style={{flexDirection:'row',width:width}}>
          <Text style={styles.label}>가입  : @</Text>
          <MKTextField
            style={{
              height: 28,  // have to do it on iOS
              marginTop: 22,
              flex:4
            }}
            placeholder="samsung.com"
            onChangeText={(joinmail)=>{this.setState({joinmail:joinmail})}}
          />
        </View>
        <View style={{flexDirection:'row',width:width}}>
          <TextInput
            style={{
              height: 200,  // have to do it on iOS
              marginTop: 22,
              flex:1
            }}
            placeholder="설명"
            multiline={true}
            onChangeText={(description)=>{this.setState({description:description})}}
          />
        </View>
        <View>
            <Button value="저장하기" text="" onPress={()=>this.onSubmit()} />
        </View>
      </View>
    );
  }
}

module.exports = HackathonEditPage;
