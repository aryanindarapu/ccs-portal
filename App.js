import React from 'react';
import { StyleSheet, Button } from 'react-native';
import { AppLoading } from 'expo';
import { Asset } from 'expo-asset';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './screens/HomeScreen';
import SettingsScreen from './screens/SettingsScreen';
import SchoolInfoScreen from './screens/SchoolInfoScreen';
import AppInfoScreen from './screens/AppInfoScreen'

const Stack = createStackNavigator()

function HomeStack() {
  return (
    <Stack.Navigator initialRouteName="HomeScreen" >
      <Stack.Screen 
        name="HomeScreen"
        component={HomeScreen}
        options = {({ navigation }) => ({ 
          title: 'Home',
          headerStyle: {
            backgroundColor: "#fff"
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
            color: 'black'
          },
          headerRight: () => (<Button title="Edit Schools" onPress={() => {navigation.navigate('SettingsScreen')}} />)
        })}
      />
      <Stack.Screen 
        name="SchoolInfoScreen"
        component={SchoolInfoScreen}
        options = {({ route }) => ({
          title: route.params.data.nameFormat.slice(-17) == "Elementary School" ? route.params.data.nameFormat.slice(0, -18) : route.params.data.nameFormat
        })}
      />
      <Stack.Screen 
        name="AppInfoScreen"
        component={AppInfoScreen}
        options = {{
          title: "More Information"
        }}
      />
      <Stack.Screen
        name="SettingsScreen"
        component={SettingsScreen}
        options = {{
          title: 'Edit Schools'
        }}
      />
    </Stack.Navigator>
  )
}

export default class App extends React.Component {
  state = {
    isReady: false
  }

  render() {
    if (!this.state.isReady) {
      return (
        <AppLoading
          startAsync={this._cacheResourcesAsync}
          onFinish={() => this.setState({ isReady: true })}
          onError={console.warn}
        />
      ); 
    }

    return (
      <NavigationContainer>
        <HomeStack />
      </NavigationContainer>
    )
  }

  async _cacheResourcesAsync() {
    const images = [require('./assets/icon.png')];

    const cacheImages = images.map(image => {
      return Asset.fromModule(image).downloadAsync();
    }); 
    return Promise.all(cacheImages);
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
