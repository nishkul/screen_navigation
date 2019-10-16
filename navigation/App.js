import React, { Component } from 'react';

import SplashScreen from './src/views/SplashScreen';
import LoginScreen from './src/views/LoginScreen';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';


const AppNavigator = createStackNavigator(
  {
    splash: { 
                screen: SplashScreen, 
                navigationOptions: {
                  header: null,
                }
              },
              login: { 
                screen: LoginScreen, 
                navigationOptions: {
                  header: null,
                }
              }
  },
  {
    initialRouteName: 'splash',
  }
);

const AppContainer = createAppContainer(AppNavigator);


 export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}