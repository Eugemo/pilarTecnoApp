import React, {Component} from 'react';
import {
  SafeAreaView,
  Dimensions,
  StyleSheet,
  Text,
  ImageBackground,
  TouchableOpacity,
  View,
  FlatList,
  ActivityIndicator,
  Image,
} from 'react-native';
import {Divider} from 'react-native-elements/dist/divider/Divider';
import {actions} from '../store';
import {connect} from 'react-redux';
import {fetchComments} from '../api';
import { ScrollView } from 'react-native';

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;
//const BASE_URL = 'https://jsonplaceholder.typicode.com/'

class PostDetail extends React.Component {
  constructor(props) {
    super(props);
    const {item} = this.props.route.params;
    this.state = {
      id: item._id,
      name: item.name,
      address: item.address,
      latitude: item.latitude,
      longitude: item.longitude,
      // comments: [],
    };
  }

  // componentDidMount = () => {
  //   fetchComments({id: this.state.id}).then(res => {
  //     console.log('comentarios: ' + JSON.stringify(res[1]));
  //     this.setState({
  //       comments: res[1],
  //     });     
  //   });    
  // };

  keyExtractor = (item, index) => index.toString();
  renderItem = ({item}) => (    
    <View
      style={{
        margin: 20,
        backgroundColor: 'rgba(0,0,0,0.2)',
        borderRadius: 8,
        padding: 5,
      }}>
      <View style={styles.titlecontainer}>
        <Text style={styles.title}>
          {item.name}
        </Text>
        <Divider />
      </View>      
        <View style={styles.bodycontainer}>
          <Text style={styles.text}>
            {item.address}
          </Text>
          <Divider />
        </View>        
        <View style={styles.bodycontainer}>
          <Text style={styles.text}>
            {item.latitude}
          </Text>
        </View> 
        <View style={styles.bodycontainer}>
          <Text style={styles.text}>
            {item.longitude}
          </Text>
        </View>  
        
    </View>
  );

  _delPost = () => {
    const {item} = this.props.route.params;
    const {_id} = item;
    ///VALIDACIONES
    this.props.delPost({_id}).then(() => {
      this.props.navigation.goBack();
    });
  };

  render() {
    const {item} = this.props.route.params;
    // const {comments} = this.state;
    
    return (
      <SafeAreaView
        style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ImageBackground
          style={{height, width}}
          source={require('../assets/images/sakurafondo.jpg')}>
          
          <View
            style={{
              margin: 20,
              padding: 5,
              marginTop: 10,
            }}>
              </View>
              {/* <ScrollView > */}
            <View
              style={{
                marginTop: 40,
                backgroundColor: 'rgba(0,0,0,0.5)',
                borderRadius: 8,
                padding: 5,
                margin: 20
              }}>
               <Image
                 style={{marginLeft: 50, width: 220, height: 200}}
                 source={{uri: item.url}}
               />
              <View style={styles.titlecontainer}>
                <Text style={styles.title}>{item.name}</Text>
              </View>
              <Divider />
              <View style={styles.bodycontainer}>
                <Text style={styles.text}>Direccion: {item.address}</Text>
              </View>
              <View style={styles.bodycontainer}>
                <Text style={styles.text}>Latitud: {item.latitude}</Text>
              </View>
              <View style={styles.bodycontainer}>
                <Text style={styles.text}>Longitud: {item.longitude}</Text>
              </View>
            </View>
          
            <View style={{flexDirection: 'row', justifyContent: 'center', }}>
              <TouchableOpacity
              onPress={() => this.props.navigation.navigate('PostEdit', {item})}
              style={[styles.button]}>
              <Text>Editar Lugar</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this._delPost()}
              style={[styles.button]}>
              <Text>Borrar Lugar</Text>
            </TouchableOpacity>
            </View>
            
{/*          
          {!comments ? (
            <ActivityIndicator />
          ) : (            
            <View
              style={{
                marginTop: 5,
                backgroundColor: 'rgba(0,0,0,0.5)',
                borderRadius: 8,
                margin: 20,
                padding: 5,
             
              }}>  
              <Text
                style={{fontSize: 18, color: 'white', fontWeight: 'bold'}}>
                Comentarios
              </Text>
              <Divider />            
               
              <FlatList
                style={{marginBottom: 80}}
                keyExtractor={this.keyExtractor}
                data={comments}                
                renderItem={this.renderItem}
              />
                                
            </View>        
          )} */}
          
          {/* </ScrollView> */}
        </ImageBackground>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    fontSize: 14,
    color: '#fff',
    textAlign: 'center',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
  },
  titlecontainer: {
    padding: 10,
  },
  bodycontainer: {
    padding: 10,
  },
  content: {
    margin: width / 20,
    height: width / 2.5,
    width: width / 2.5,
    borderRadius: 15,
    justifyContent: 'center',
  },
  button: {
    backgroundColor: 'rgba(165, 105, 189, 0.5)',
    margin: width / 30,        
    borderRadius: 35,    
    alignItems: 'center',
    padding: 7,
    
  },
});
const mapDispatchToProps = dispatch => ({
  delPost: data => dispatch(actions.posts.delPost(data)),
});
const mapStateToProps = state => ({});
export default connect(mapStateToProps, mapDispatchToProps)(PostDetail);
