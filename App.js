import React from 'react';
import { StyleSheet, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import HomeScreen from './HomeScreen';
import SettingsScreen from './SettingsScreen';

// const Tabs = createBottomTabNavigator()
const Stack = createStackNavigator()

function HomeStack() {
  return (
    <Stack.Navigator initialRouteName="HomeScreen" >
      <Stack.Screen 
        name="HomeScreen"
        component={HomeScreen}
        options = {({ navigation }) => ({ 
          title: 'CCS Parents',
          headerStyle: {
            backgroundColor: "#005cb0"
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold'
          },
          headerRight: () => (<Button title="Edit Schools" onPress={() => {navigation.navigate('SettingsScreen')}} />)
        })}
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

/* Moving away from tab idea 
function TabNav() {
  return (
    <Tabs.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName

          if (route.name === 'Home') {
            iconName = focused
              ? 'md-home'
              : 'md-home';
          } else if (route.name === 'Settings') {
            iconName = focused ? 'md-settings' : 'md-settings';
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: '#0f64fa',
        inactiveTintColor: 'gray',
      }}
    >
      <Tabs.Screen name="Home" component={HomeStack} />
      <Tabs.Screen name="Settings" component={SettingsScreen} />
    </Tabs.Navigator>
  )
} */

export default class App extends React.Component { 
  render() {
    return (
      <NavigationContainer>
        <HomeStack />
      </NavigationContainer>
    )
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
