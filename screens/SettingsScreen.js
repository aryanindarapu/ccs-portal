import React from 'react';
import { StyleSheet, Image, View, Alert } from 'react-native';
import Constants from 'expo-constants';

import SettingsList from 'react-native-settings-list';

export default function SettingsScreen() {
  return (
    <View style={{flex:1}}>
      <SettingsList>
        {/* <SettingsList.Header headerText='First Grouping' headerStyle={{color:'white'}}/> */}
        <SettingsList.Item
          itemWidth={50}
          title='Change Roles'
          onPress={() => this.props.navigation.navigate('EditSchoolsScreen')}
        />
        <SettingsList.Item
          itemWidth={50}
          title='Edit Schools'
          onPress={() => this.props.navigation.navigate('EditSchoolsScreen')}
        />
        <SettingsList.Item
          // icon={
          //   <View style={{height:30,marginLeft:10,alignSelf:'center'}}>
          //     <Image style={{alignSelf:'center',height:40, width:40}} source={require('../assets/icon.png')}/>
          //   </View>
          // }
          itemWidth={50}
          title='About'
          onPress={() => Alert.alert('Icon Example Pressed')}
        />       
      </SettingsList>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingTop: Constants.statusBarHeight,
  },
});