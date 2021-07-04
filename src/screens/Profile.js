import React,{ Component } from 'react';
import {
  SafeAreaView,
  ScrollView,
  Dimensions,
  StatusBar,
  StyleSheet,
  Text,
  ImageBackground,
  TouchableOpacity,
  View,
  Alert
} from 'react-native';

const height = Dimensions.get('window').height
const width = Dimensions.get('window').width


export default class Profile extends React.Component {

  _onProfilePress = () => {
    Alert.alert(
      "Hola",
      "Ya te encuentras en Profile",
      [
        { text: "OK", onPress: () => console.log("OK Pressed") }
      ]
    );
  }


  render(){
    return( 
    <Text> Profile </Text>
     
    )}
}
