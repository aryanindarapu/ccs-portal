import React from 'react';
import { StyleSheet, Text, View, Dimensions, Image, TouchableOpacity, Linking } from 'react-native';
import Constants from 'expo-constants';
import Carousel from 'react-native-snap-carousel';
import AppLink from 'react-native-app-link';

import { dataUp, dataDown, pullData } from './IconData';

const SLIDER_WIDTH = Dimensions.get('window').width;
const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.6);
const ITEM_HEIGHT = Math.round(ITEM_WIDTH * 3 / 4);

const activeOpacity = 0.5

// const openURL = () => {
//   AppLink.maybeOpenURL(url, {"Canvas Parent", })
// }

export default class HomeScreen extends React.Component {
  state = {
    index: 0,
    dataUp,
    dataDown
  }

  componentDidMount() {
    this._dataPull = this.props.navigation.addListener('state', () => {
      this.setState({dataUp: pullData()})
    })
  }

  componentWillUnmount() {
    this._dataPull()
  }

  iconClicked = data => {
    if (data.id == 'add') {
      return () => this.props.navigation.navigate('SettingsScreen')
      // can use maybeopenurl here (easier)
    } else if (data.id == 'app') {
      return data.func
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
    this.props.navigation.addListener('transitionStart', (e) => {
      console.log("testing")
      this.setState({dataUp: pullData()})
    })

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