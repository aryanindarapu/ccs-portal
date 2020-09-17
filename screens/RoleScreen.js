import React, { useState } from 'react';
import { StyleSheet, Text } from 'react-native';
import { Switch } from 'react-native-gesture-handler';
import { View } from 'react-native-animatable';
import AsyncStorage from '@react-native-community/async-storage';

import { getRole } from './HomeScreen';

export default class RoleScreen extends React.Component {
  state = {
    isEnabled: false
  }

  componentDidMount() {
    this.readData()
  }

  storeData = async (value) => {
    try {
      const encVal = value ? 's' : 'p'
      await AsyncStorage.setItem('@roleTest', encVal)
    } catch (error) {
      alert(error.message)
    }
  }

  readData = async () => {
    try {
      const encVal = await AsyncStorage.getItem('@roleTest')
      if (encVal == 'p') {
        this.setState({ isEnabled: false })
      } else {
        this.setState({ isEnabled: true })
      }
      if(value !== null) {
        // isEnabled = value
      }
    } catch(e) {
      // error reading value
    }
  }

  toggle = () => {
    this.setState(prevState => ({ isEnabled: !prevState.isEnabled }), () => { 
      getRole(this.state.isEnabled)
      this.storeData(this.state.isEnabled)
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Parent</Text>
        <Switch 
          style={{ transform: [{ scaleX: 1.3 }, { scaleY: 1.3 }] }}
          value={this.state.isEnabled}
          onValueChange = {this.toggle}
          trackColor={{ false: "#008ee2", true: "#c92c27" }}
          ios_backgroundColor="#008ee2"
        />
        <Text style={styles.text}>Student</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  },
  text: {
    padding: 40,
    fontSize: 35,
    fontWeight: '300'
  }
})