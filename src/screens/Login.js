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
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input, Button } from 'react-native-elements';
//import { Button } from 'react-native-paper';

const height = Dimensions.get('window').height
const width = Dimensions.get('window').width


export default class Log extends React.Component {

  _onLogPress = () => {
    Alert.alert(
      "Hola",
      "Ya te encuentras en Login",
      [
        { text: "OK", onPress: () => console.log("OK Pressed") }
      ]
    );
  }


  render(){
    return( 
      <SafeAreaView style={{flex:1}}>
        <View style={styles.content}>
            <ImageBackground
                style={{width, height}} 
                source={require('../assets/images/sakurafondo.jpg')}
            >
            <Text style={styles.text}> Login </Text>
            <Input style={styles.input}
            placeholder='Ingrese Usuario'
            leftIcon={<Icon 
                name='user'
                size={24}
                color='#512E5F'/>}
            />

            <Input style={styles.input} 
            placeholder="Password" 
            secureTextEntry={true} 
            leftIcon={<Icon 
                name='lock'
                size={24}
                color='#512E5F'/>}
            />

            <TouchableOpacity style={[styles.button, { backgroundColor:'rgba(165, 105, 189, 0.5)' }]}>
              <Text style={styles.text}>
                Aceptar
              </Text>
            </TouchableOpacity>  
            <Text style={styles.text}>
                <Button title='Continuar con Google' />
              </Text> 
              
            </ImageBackground>
        </View>
      </SafeAreaView>
     
    )}
}

const styles = StyleSheet.create({
    content:{
      justifyContent: 'center',
      alignItems: 'center'
    },

    text: {
      fontSize:30, 
      fontWeight:'bold', 
      color:'#512E5F',
      textAlign:'center',
      marginTop: 10,
    },
    input: {
        fontSize:20, 
        fontWeight:'bold', 
        color:'#512E5F',
        textAlign:'center',
        backgroundColor:'#F4ECF7',
        margin: width/20,
    },

      button: {
        margin: width/10,
        borderRadius:35,
        justifyContent:'center',
        
      }
  })