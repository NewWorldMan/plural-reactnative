import React, { Component } from 'react';
import { Text, View, WebView} from 'react-native';

export class Video extends React.Component {

    static navigationOptions = {
        header: null
      };
  
      render() {
          let tubeid = this.props.navigation.getParam('yTubeId', 'NO VIDEO');
          let tubeUrl = `https://www.youtube.com/embed/${tubeid}`;
          return(
              /* <View style={{paddingTop: 40 }}>
                  <Text>{tubeid} </Text>
              </View> */
              <WebView
              style={{ marginTop: 20}}
              javaScriptEnabled={true}
              source={{uri: tubeUrl}}
              />    
          );
      }

}