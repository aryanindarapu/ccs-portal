import React from 'react';
import { AsyncStorage, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import { Asset } from 'expo-asset';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import HomeScreen from './screens/HomeScreen';
import SchoolInfoScreen from './screens/SchoolInfoScreen';
import AppInfoScreen from './screens/AppInfoScreen';
import RenderScreen from './screens/RenderScreen';

import SettingsScreen from './screens/SettingsScreen';
import EditSchoolsScreen from './screens/EditSchoolsScreen';
import RoleScreen from './screens/RoleScreen';

import PlannerScreen from './screens/PlannerScreen';
import EventViewAddScreen from './screens/EventViewAddScreen';

const Stack = createStackNavigator()
const SetStack = createStackNavigator()
const PlanStack = createStackNavigator()
const Tabs = createBottomTabNavigator()

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
          }
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
        name="RenderScreen"
        component={RenderScreen}
        options = {{
          title: ""
        }}
      />
      <Stack.Screen 
        name="AppInfoScreen"
        component={AppInfoScreen}
        options = {{
          title: "More Information"
        }}
      />
    </Stack.Navigator>
  )
}

function PlannerStack() {
  return (
    <PlanStack.Navigator initialRouteName="PlannerScreen">
      <PlanStack.Screen
        name="PlannerScreen"
        component={PlannerScreen}
        options = {{
          title: 'Planner'
        }}
      />
      <PlanStack.Screen
        name="EventViewAddScreen"
        component={EventViewAddScreen}
        options = {{
          title: 'Add Homework'
        }}
      />
    </PlanStack.Navigator>
  )
}

function SettingsStack() {
  return (
    <SetStack.Navigator initialRouteName="SettingsScreen">
      <SetStack.Screen
        name="SettingsScreen"
        component={SettingsScreen}
        options = {{
          title: 'Settings'
        }}
      />
      <SetStack.Screen
        name="RoleScreen"
        component={RoleScreen}
        options = {{
          title: 'Change Role'
        }}
      />
      <SetStack.Screen
        name="EditSchoolsScreen"
        component={EditSchoolsScreen}
        options = {{
          title: 'Edit Schools'
        }}
      />
    </SetStack.Navigator>
  )
}

export function setCal(calEnabled) {
  this.setState({ calEnabled })
}

export default class App extends React.Component {
  constructor() {
    super()
    this.state = {
      isReady: false,
      calEnabled: false
    }

    setCal = setCal.bind(this)
  }

  componentDidMount() {
    this.readData()
  }

  readData = async () => {
    try {
      const encVal = await AsyncStorage.getItem('@role_key')
      console.log(encVal)
      encVal == 'p' ? this.setState({ calEnabled: false }) : this.setState({ calEnabled: true })
    } catch (error) {
      alert(error)
    }
  }

  render() {
    if (!this.state.isReady) {
      return (
        <AppLoading
          startAsync={this._cacheResourcesAsync}
          onFinish={() => this.setState({ isReady: true })}
          onError={console.warn}
        />
      )
    }

    return (
      <NavigationContainer>
        <Tabs.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
  
              if (route.name === 'Home') {
                iconName = focused
                  ? 'home'
                  : 'home-outline';
              } else if (route.name === 'Planner') {
                iconName = focused ? 'calendar' : 'calendar-outline';
              } else if (route.name === 'Settings') {
                iconName = focused ? 'settings' : 'settings-outline';
              }
  
              // You can return any component that you like here!
              return <MaterialCommunityIcons name={iconName} size={size} color={color} />;
            },
          })}
          tabBarOptions={{
            activeTintColor: 'tomato',
            inactiveTintColor: 'gray',
          }}
        >
          <Tabs.Screen name="Home" component={HomeStack} />
          { this.state.calEnabled && (<Tabs.Screen name="Planner" component={PlannerStack} />)}
          <Tabs.Screen name="Settings" component={SettingsStack} />
        </Tabs.Navigator>

        <StatusBar style="dark" />
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
