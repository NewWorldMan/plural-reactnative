import React, { Component } from 'react';
import { Text, View , Flatlist, Image, TouchableWithoutFeedback} from 'react-native';

export class Video extends React.Component {

    static navigationOptions = {
        header: null
      };
  

      constructor (props) {
        super(props);
        this.state = {listloaded: false  };
       }

       componentDidMount() {
           const {navigate} = this.props.navigation;
           return fetch( 'https://www.googleapis.com/youtube/v3/search?part=snippet&q=pluralsight&type=video&key=AIzaSyA4_Gj7MPju3uPpPTQMVG1VpRUpcMD3MIA')
           .then((response) => response.json())
           .then((responseJson) => {
               this.setState({
                listLoaded: true,
                videoList: Array.from(responseJson.items)
                 })
              })
               .catch((error) => {
                console.error(error);
               });

       }

       render(){
           return(
            <View>
                {this.state.listloaded && ( 
                 <View style={{paddingTop: 30 }}>
                            <Flatlist 
                            data={this.state.videoList }
                            renderItem={({item}) =>
                           <TubeItem 
                           navigate = {navigate}
                           id={item.id.videoId}
                            title={item.snippet.title}
                            imageSrc={item.snippet.thumbnails.high.url}
                           />
                        }
                            />
                 </View>
                )}
                { !this.state.listloaded && (
                        <View style={{ paddingTop:30 }} >
                            <Text>LOADING</Text>
                        </View>
                )}
            </View>
           );
       }
}
export class TubeItem extends React.Component {
    onPress= () => {
        console.log(this.props.id);
    };

    render() {
        return(
            <TouchableWithoutFeedback onPress={this.onPress}>   
            <View style={{ paddingTop:20, alignItems: 'center'}}> 
                <Image 
                style={{width:'100%', height: 200}}
                source={{url: this.props.imageSrc}}
                />
                <Text>
                    {this.props.title}
                </Text>
            </View>

            </TouchableWithoutFeedback>
        );
    }
}