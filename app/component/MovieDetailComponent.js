import React, { Component } from 'react'
import { Text } from 'react-native'

export class MovieDetailComponent extends Component {
    render() {
        var data = this.props.navigation.state.params;
        console.log(data);
        return(
            <Text>Hello World</Text>
        );
    }
}