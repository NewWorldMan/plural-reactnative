import React, { Component } from 'react';
import {  StyleSheet, Text, View , Image} from 'react-native';


export class Header extends React.Component {
  constructor(props) {
      super(props);
      this.state = {isLoggedIn: false};
  }

  toggleUser = () => {
      this.setState(previousState => {
            return {isLoggedIn: !previousState.isLoggedIn}
      });
    }

    render() {
        let display = this.state.isLoggedIn ? 'Sample User' : this.props.message;
        return (
            <View style={styles.headStyle}> 
            <Image 
            style={this.styles.logoStyle}
            source={require('.img/Globo_logo_REV.png')}
            />
             {style=this.styles.headText}
                <Text onPress={this.toggleUser}>{display} </Text>
             </View>
        );
    }

    const styles = StyleSheet.create({
          headText: {
            textAlign: 'right',
            color: 'white',
            fontSize: 20,
            flex:1
        },
        headStyle: {
            paddingTop: 30,
            paddingBottom: 10,
            paddingRight: 10,            
            backgroundColor:  '#35605a',
            flex:1,
            flexDirection: 'row',
            borderBottomWidth: 2,
            borderBottomColor: '#00000'
        },
        logoStyle: {
            flex:1,
            width: undefined,
            height: undefined
        }
    });

}