import React from 'react';
import { Switch } from 'react-native-gesture-handler';
import { StyleSheet, Text, View } from 'react-native';

export const SchoolSwitch = props => (
  <View style = {styles.switchContainer}>
    <Text style={styles.text}>{props.schools.name}</Text>
    <Switch 
      style={styles.switch}
      value={props.schools.checked}
      onValueChange = {props.onToggle}
      trackColor={{ false: "#fff", true: "#81b0ff" }}
      ios_backgroundColor="#3e3e3e"
    />
  </View>
)

const styles = StyleSheet.create({
  switchContainer: {
    flex: 1,
    alignItems: "center",
    flexDirection:"row",
    padding: 10
  },
  text: {
    fontSize: 16,
    color: 'black',
  },
  switch: {
    marginLeft: 'auto'
  }
})