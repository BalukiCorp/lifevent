import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createDrawerNavigator} from 'react-navigation';
import {HomeScreen} from './src/screens/HomeScreen';
import {Button} from 'native-base';



const AppNavigator = createDrawerNavigator({
  HomeScreen : {screen: HomeScreen},

},
    {
      contentComponent: props => <Button{...props}/>
    },
    );



export default class App extends React.Component {


  render() {
    return (
      <AppNavigator/>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
