import React from 'react';
import { StyleSheet, Text, View, Dimensions, Image, TouchableOpacity, Linking } from 'react-native';
import Constants from 'expo-constants';
import Carousel from 'react-native-snap-carousel';
import AppLink from 'react-native-app-link';
import AsyncStorage from '@react-native-community/async-storage';

import { dataUp, dataDown } from './IconData';

// Saving Data
const STORAGE_KEY = '@save-dataUp'

const SLIDER_WIDTH = Dimensions.get('window').width;
const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.6);
const ITEM_HEIGHT = Math.round(ITEM_WIDTH * 3 / 4);

const activeOpacity = 0.5

// const openURL = () => {
//   AppLink.maybeOpenURL(url, {"Canvas Parent", })
// }

export function pullData(data) {
  this.setState({dataUp: data})
}

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      index: 0,
      dataUp,
      dataDown
    }
    pullData = pullData.bind(this)
  }

  componentDidMount() {
    this.readData()
  }

  saveData = async (data) => {
    try {
      await AsyncStorage.setItem(STORAGE_KEY, data)
      console.log("saving data")
    } catch (error) {
      alert(error.message)
    }
  }
  
  readData = async () => {
    try {
      const data = await AsyncStorage.getItem(STORAGE_KEY)

      if (data !== null) {
        alert('prev stored')
      }
      console.log("reading data")
    } catch (error) {
      alert('failed to fetch settings')
    }
  }
  
  onPullData = () => {
    this.saveData()
  }

  iconClicked = data => {
    if (data.key == 'add') {
      return () => this.props.navigation.navigate('SettingsScreen')
    } else if (data.key == 'app') {
      return () => AppLink.maybeOpenURL(data.url, { appName: "Canvas Parent", appStoreId: "com.powerschool.portal", playStoreId: "com.instructure.parentapp"}).then(() => {

      }).catch((err) => {
        console.error(err)
      })
    } else {
      return () => Linking.openURL(data.url)
    }
  }

  _renderItem = ({ item }) => {
    return (
      <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
        <TouchableOpacity activeOpacity={activeOpacity} onPress={this.iconClicked(item)}>
          <Image source={item.path} style={styles.images}/>
          <Text style={styles.text}>{item.name}</Text>
        </TouchableOpacity>
      </View>
    )
  }

  render() {
    return (
      <View style={styles.container}>
        <Carousel
          data={this.state.dataUp}
          layout={'default'}
          renderItem={this._renderItem}
          sliderWidth={SLIDER_WIDTH}
          itemWidth={ITEM_WIDTH}
          inactiveSlideShift={0}
          onSnapToItem={(index) => this.setState({ index })}
          useScrollView={true} 
        />
        <Carousel
          data={this.state.dataDown}
          layout={'default'}
          renderItem={this._renderItem}
          sliderWidth={SLIDER_WIDTH}
          itemWidth={ITEM_WIDTH}
          inactiveSlideShift={0}
          onSnapToItem={(index) => this.setState({ index })}
          useScrollView={true} 
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    paddingTop: Constants.statusBarHeight,
  },
  images: {
    width: SLIDER_WIDTH * 0.5,
    height: SLIDER_WIDTH * 0.5,
    borderRadius: 50
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    fontFamily: 'System'
  }
});