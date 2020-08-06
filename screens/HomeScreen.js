import React from 'react';
import { StyleSheet, Text, View, Dimensions, Image, TouchableOpacity, Linking } from 'react-native';
import Constants from 'expo-constants';
import Carousel from 'react-native-snap-carousel';
import AppLink from 'react-native-app-link';

import { dataUp, dataDown } from '../IconData';

const SLIDER_WIDTH = Dimensions.get('window').width;
const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.5);

const activeOpacity = 0.5

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

  iconClicked = data => {
    if (data.key == 'add') {
      return () => this.props.navigation.navigate('SettingsScreen')
    } else if (data.key == 'app') {
      return () => AppLink.maybeOpenURL(data.url, { appName: data.appName, appStoreId: data.appStoreId, playStoreId: data.playStoreId}).then(() => {
        console.log("testing worked")
      }).catch((err) => {
        console.error(err)
      })
    } else {
      return () => this.props.navigation.navigate("SchoolInfoScreen", {data})
    }
  }

  _renderItem = ({ item }) => {
    return (
      <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
        <TouchableOpacity style={styles.container} activeOpacity={activeOpacity} onPress={this.iconClicked(item)}>
          <Image source={item.path} style={styles.images}/>
          <Text style={styles.text}>{item.name}</Text>
        </TouchableOpacity>
      </View>
    )
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Welcome Carmel Clay Schools Parents!</Text>
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
    width: SLIDER_WIDTH * 0.35,
    height: SLIDER_WIDTH * 0.35,
    borderRadius: 30
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
    fontFamily: 'System',
    paddingTop: 10
  },
  title: {
    textAlign: 'center',
    fontSize: 30,
    fontWeight: '300'
  }
});