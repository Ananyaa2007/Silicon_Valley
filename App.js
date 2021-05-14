import React from 'react';
import { View, Text, Button, StyleSheet, Image } from 'react-native';
import AppHeader from './components/AppHeader';
import HomeScreen from './screens/HomeScreen';
import SummaryScreen from './screens/SummaryScreen';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import knowmore from './screens/knowmore';

export default class App extends React.Component {
  render() {
    return (
      <View>
        <AppHeader />
        <AppContainer />
      </View>
    );
  }
}
var AppNavigator = createSwitchNavigator({
  HomeScreen: HomeScreen,
  SummaryScreen: SummaryScreen,
  knowmore: knowmore,
});

const AppContainer = createAppContainer(AppNavigator);
