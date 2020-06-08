//import React from 'react';
import React, { Component } from 'react';
import { StyleSheet, Text, View , TextInput, TouchableHighlight, Alert} from 'react-native';
import {Header} from '../sections/Header.js';
import {StackNavigator} from 'react-navigation';
import { exp } from 'react-native-reanimated';

export class Contact extends React.Component {
static navigationOptions = {
        header: null 
   };
   constructor (props) {
    super(props);
    this.state = {
        msg: 'Enter your message',
        name: 'Enter your name',
        email: 'Enter your address'
    }
   }

   clearFields=()=> this.setState({name:'', msg:'',email:'', });

   sendMessage=()=> {
    Alert.alert(this.state.msg,this.state.name);
    this.props.navigation.goBack();
   };

render() {
    return (
        <View>
         <Header message ='Press to login' />
         <Text style={styles.heading}>Contact Us</Text>
         <TextInput 
         style={styles.inputs}
         onChangeText={(text) => this.setState({name: text})}
         value={this.state.name}
         /> 
        <TextInput 
         style={styles.multiInpus}
         onChangeText={(text) => this.setState({msg: text})}
         value={this.state.msg}
         multiline={true}
         numberOfLines={4}
         /> 
          <TextInput 
         style={styles.inputs}
         onChangeText={(text) => this.setState({email: text})}
         value={this.state.email} 
         /> 
<TouchableHighlight onPress={this.sendMessage} underlayColor='#31e981'>
    <Text style={styles.buttons}>
            Send Message
    </Text>
</TouchableHighlight>

<TouchableHighlight onPress={this.clearFields} underlayColor='#31e981'>
    <Text style={styles.buttons}>
            Reset Form
    </Text>
</TouchableHighlight>

         <Hero />
         <Menu />


       </View>
     );
   }
};

const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems:'center',
        paddingBottom: '45%'
     },
     heading: {
         fontSize:18,
        flex:1
     },
     inputs: {
        flex:1,
        width: '80%',
        paddingBottom: 10
     },
     multiInput: {
        flex:2,
        width: '90%',
        paddingBottom: 20
     },
     buttons: {
         marginTop: 15,
         fontSize: 16
     }

     });
     //API key - KEEP     AIzaSyA4_Gj7MPju3uPpPTQMVG1VpRUpcMD3MIA