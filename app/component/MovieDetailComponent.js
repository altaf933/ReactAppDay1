import React, { Component } from 'react';
import { Text, View, StyleSheet, Image} from 'react-native';

var api = require('./api')

export class MovieDetailComponent extends Component {
    constructor() {
        super()
        this.state = {
            imageUrl: "",
            description: ""
        }
    }
    render() {
        return (
             <View style = {style.container}>
                 <Image style={style.canvas} source={{uri: this.state.imageUrl}}></Image>
                 <Text>{this.state.description}</Text>
            </View>
        );
    }

    componentDidMount() {
        var data = this.props.navigation.state.params;
        var id  = data.item.id
        var url = api.BASE_URL + id +'?' + api.API_KEY + '=' 
                + api.API_KEY_VALUE + '&' + api.LANGUAGE_KEY + '=' + api.LANGUAGE;
        console.log(url);
        fetch(url)
        .then((response)=>response.json())
        .then((responseJson) => {
           console.log("response");
           this.setState({
              imageUrl: 'https://image.tmdb.org/t/p/w200'+responseJson.poster_path,
              description: responseJson.overview
           })
        })
    }
}

var style = StyleSheet.create({
    canvas: {
        position: 'absolute',
        height: 250,
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
      },
      container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
        position: 'relative'
      }
})