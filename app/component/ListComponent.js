import React, { Component } from 'react';
import { FlatList, Text, View, Image, TouchableOpacity, StyleSheet } from 'react-native';
var api = require('./api')
var productArray = [];
export class ListComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: []
    };
  }

  componentDidMount() {
    console.log(api.TOP_RATEDMOVIE);
    fetch(api.TOP_RATEDMOVIE)
      .then((response) => response.json())
      .then((responseJson) => {
        productArray = responseJson.results;
        this.setState({
          dataSource: productArray,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }
  detailPage = (rowData) => {
    console.log(JSON.stringify(rowData));
    this.props.navigation.navigate('MoviesDetail',{...rowData});
  }

  render() {
    return (
      <View style={styles.flexRoot}>
        <FlatList
          data={this.state.dataSource}
          renderItem={(rowData) =>
            <TouchableOpacity onPress={() => this.detailPage(rowData)}>
              <View style={styles.flexRoot}>
                <Image
                  style={styles.image}
                  source={{ uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png' }} />
                <View style={styles.flexChild}>
                  <Text style={styles.textTitle}>{rowData.item.title}</Text>
                  <Text style={styles.textSubTitle} numberOfLines={3} ellipsizeMode={'clip'}>{rowData.item.overview}</Text>
                </View>
              </View>
            </TouchableOpacity>
          }
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  flexRoot: {
    flex: 1,
    flexDirection: 'row',
    marginLeft: 3,
    marginRight: 3
  },
  flexChild: {
    flexDirection: 'column',
    alignItems: 'flex-start'
  },
  image: {
    height: 60,
    width: 60,
    marginLeft: 5,
    marginTop: 5
  },
  textTitle: {
    fontSize: 20,
    padding: 3,
    color: 'black'
  },
  textSubTitle: {
    fontSize: 14,
    padding: 2,
    textAlign: 'left',
    color: 'black'
  }
})