import React from 'react';
import { StyleSheet, Text, View, Dimensions, Image, TouchableOpacity, Button } from 'react-native';
import Constants from 'expo-constants';
import Carousel from 'react-native-snap-carousel';
import AppLink from 'react-native-app-link';
import { Octicons } from '@expo/vector-icons';
import FlipCard from 'react-native-flip-card'

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
      return () => this.props.navigation.navigate('EditSchoolsScreen')
    } else if (data.key == 'app') {
      return () => AppLink.maybeOpenURL(data.url, { appName: data.appName, appStoreId: data.appStoreId, playStoreId: data.playStoreId}).then(() => {
        console.log("testing worked")
      }).catch((err) => {
        console.error(err)
      })
    } else {
      return () => this.props.navigation.navigate('SchoolInfoScreen', {data})
    }
  }

  _renderItemUp = ({ item }) => {
    return (
      <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
        <TouchableOpacity style={styles.container} activeOpacity={activeOpacity} onPress={this.iconClicked(item)}>
          <Image source={item.path} style={styles.images} />
          <Text style={styles.text}>{item.name}</Text>
        </TouchableOpacity>
      </View>
    )
  }

  flipCard = ({ item }) => {
    this.setState({
      dataDown: this.state.dataDown.map(data => {
        if (data.name !== item.name) return data
        return { 
          key: data.key,
          path: data.path,
          name: data.name,
          url: data.url,
          appName: data.appName,
          appStoreId: data.appStoreId,
          playStoreId: data.playStoreId,
          flip: !data.flip
        }
      })
    })
  }

  getFlipState = ({ item }) => {
    let currentCard = this.state.dataDown.filter(data => data.name === item.name)
    return currentCard[0].flip
  }

  _renderItemDown = ({ item }) => {
    let url = ""
    let text = ""
    switch (item.name) {
      case "Canvas Parent":
        url = require('../assets/canvasBack.png')
        text = "Receive alerts for student activity."
        break
      case "PowerSchool":
        url = require('../assets/powerschoolBack.png')
        text = "Real-time student performance."
        break
      case "EZSchoolPay":
        url = require('../assets/ezBack.png')
        text = "Easy way to pay for school meals."
        break
      case "STOPit":
        url = require('../assets/stopitBack.png')
        text = "Anonymous reporting."
        break
      case "Remind":
        url = require('../assets/remindBack.png')
        text = "Notifications from teachers."
        break
    }
    
    return (
      <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
        <FlipCard
          style={styles.container}
          friction={6}
          perspective={1000}
          flipHorizontal={true}
          flipVertical={false}
          flip={this.getFlipState({item})}
          clickable={false}
        >
          <View>
            <TouchableOpacity activeOpacity={activeOpacity} onPress={this.iconClicked(item)}>
              <Image source={item.path} style={styles.images} />
              <Octicons name='info' size={32} style={styles.icon} onPress={() => this.flipCard({item})}/>
              <Text style={styles.text}>{item.name}</Text>
            </TouchableOpacity>
          </View>

          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <Image source={url} style={styles.images} />
            <Octicons name='info' size={32} style={styles.icon} onPress={() => this.flipCard({item})} />
            <Text style={styles.cardText}>{text}</Text>
            <TouchableOpacity 
              style={{ position: 'absolute', justifyContent: 'center', alignItems: 'center'}}
              onPress={() => {
                this.flipCard({item})
                this.props.navigation.navigate("AppInfoScreen", {item})
              }}
            >
              <Text style={{fontWeight: 'bold', color: 'white', fontSize: 20}}>Learn More</Text>
            </TouchableOpacity>
            <Text style={styles.text}>{item.name}</Text>
          </View>
        </FlipCard>
      </View>
    )
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Carmel Clay Schools Portal</Text>
        <Carousel
          data={this.state.dataUp}
          layout={'default'}
          renderItem={this._renderItemUp}
          sliderWidth={SLIDER_WIDTH}
          itemWidth={ITEM_WIDTH}
          inactiveSlideShift={0}
          onSnapToItem={(index) => this.setState({ index })}
          useScrollView={true} 
        />
        <Carousel
          data={this.state.dataDown}
          layout={'default'}
          renderItem={this._renderItemDown}
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
    width: SLIDER_WIDTH * 0.4,
    height: SLIDER_WIDTH * 0.4,
    borderRadius: 15,
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
  },
  icon: {
    position: 'absolute',
    top: 1,
    right: 3,
    color: 'white',
    zIndex: 4
  },
  cardText: {
    position: 'absolute',
    color: 'white',
    textAlign: 'center',
    fontSize: 16,
    top: 40
  },
});