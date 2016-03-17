/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
import React, {
  Component,
  StyleSheet,
  Text,
  View
} from 'react-native';
var FBLogin = require('react-native-facebook-login');
var FBLoginManager = require('NativeModules').FBLoginManager;

class LoginPage extends Component {
  componentWillMount() {
    var navigator = this.props.navigator;
    FBLoginManager.getCredentials((error, data)=>{
      if (!error) {
        this.setState({ user : data})
        console.log(data);
        navigator.replace({
          id: 'HackathonListPage',
        });
      }
    });
  }
  render() {
    var navigator = this.props.navigator;
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Hackathon
        </Text>
        <FBLogin
          onLogin={(data)=>{
            console.log("Logged in!");
            console.log(data);
            this.setState({ user : data.credentials });
            console.log(navigator,this);
            navigator.push({
              id: 'HackathonListPage',
            });
          }}
          onLoginFound={(data)=>function(){
            console.log("Existing login found.");
            console.log(data);
            this.setState({ user : data.credentials });
            navigator.push({
              id: 'HackathonListPage',
            });
          }}
        />
        <Text style={styles.instructions}>
          To get started, edit index.ios.js
        </Text>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
module.exports = LoginPage;
