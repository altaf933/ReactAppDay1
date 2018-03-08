import React from 'react';
import { StackNavigator } from 'react-navigation';
import { MovieDetailComponent } from '../component/MovieDetailComponent';
import  { ListComponent } from '../component/ListComponent'


export const MovieStack = StackNavigator({
    Movies: {
        screen: ListComponent,
        navigationOptions: {
            title : 'Movies'
        },
    },
   MoviesDetail: {
       screen: MovieDetailComponent,
       navigationOptions:({navigation})=> ({
           title: `${navigation.state.params.item.title.toUpperCase()}`,
       }),
   },
});