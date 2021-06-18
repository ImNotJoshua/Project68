import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Facebook from './screens/fb'
import Instagram from './screens/in'
import {createAppContainer} from 'react-navigation'
import {createBotttomTabNavigator} from 'react-navigation-tabs'

export default class App extends React.Component{
  render() {
  return (
    <View style={styles.container}>
      <Text>Buzz App!</Text>
      <appContainer></appContainer>
    </View>
  )
  }  
}
const tabNavigator=createBotttomTabNavigator({
Facebook: {screen:Facebook},
Instagram: {screen:Instagram}
})
const appContainer =createAppContainer(tabNavigator)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
