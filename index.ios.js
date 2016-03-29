/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Component,
  Text,
  View,
  Navigator,
  TouchableOpacity,
} = React;

var FBLogin = require('react-native-facebook-login');
var LoginPage = require('./crossplatform/LoginPage');
var SplashPage = require('./crossplatform/SplashPage');
var HackathonListPage = require('./crossplatform/HackathonListPage');
var HackathonEditPage = require('./crossplatform/HackathonEditPage');

class spring2016 extends Component {
  render() {
   return (
     <Navigator
         initialRoute={{id: 'SplashPage', name: 'Index'}}
         renderScene={this.renderScene.bind(this)}
         configureScene={(route) => {
           if (route.sceneConfig) {
             return route.sceneConfig;
           }
           return Navigator.SceneConfigs.FloatFromRight;
         }} />
   );
 }
 renderScene(route, navigator) {
   var routeId = route.id;
   if (routeId === 'SplashPage') {
     return (
       <SplashPage
         navigator={navigator} />
     );
   }
   if (routeId === 'LoginPage') {
     return (
       <LoginPage
         navigator={navigator} />
     );
   }
   if (routeId === 'HackathonListPage') {
     return (
       <HackathonListPage
           navigator={navigator} />
     );
   }
   if (routeId === 'HackathonEditPage') {
     return (
       <HackathonEditPage
           navigator={navigator} />
     );
   }

   if (routeId === 'NoNavigatorPage') {
     return (
       <NoNavigatorPage
           navigator={navigator} />
     );
   }
   return this.noRoute(navigator);

 }
 noRoute(navigator) {
   return (
     <View style={{flex: 1, alignItems: 'stretch', justifyContent: 'center'}}>
       <TouchableOpacity style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}
           onPress={() => navigator.pop()}>
         <Text style={{color: 'red', fontWeight: 'bold'}}>---</Text>
       </TouchableOpacity>
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

AppRegistry.registerComponent('spring2016', () => spring2016);
