import React, { Component } from 'react';
import {  StyleSheet, Image} from 'react-native';

export class Hero extends React.Component {

    render() {
        
        return (
            <Image 
            style={this.styles.logoStyle}
            source={require('.img/laptop2.jpg')}
            />
        );
    }

    const styles = StyleSheet.create({
        heroImage: {
            width: undefined,
            height: undefined,
            flex:8,
         },
    });

}
