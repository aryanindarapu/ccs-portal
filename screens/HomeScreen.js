import React from 'react';
import { StyleSheet, Text, View, Dimensions, Image, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';
import Carousel from 'react-native-snap-carousel';
import AppLink from 'react-native-app-link';
import { Octicons } from '@expo/vector-icons';
import FlipCard from 'react-native-flip-card';
import AsyncStorage from '@react-native-community/async-storage';

import { dataUp, dataDownParents, dataDownStudents } from '../IconData';

const SLIDER_WIDTH = Dimensions.get('window').width;
const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.5);

const activeOpacity = 0.5

export function pullData(data) {
  this.setState({dataUp: data})
}

export function getRole(role) {
  if (role) {
    this.setState({dataDown: dataDownStudents})
  } else {
    this.setState({dataDown: dataDownParents})
  }
}

export default class HomeScreen extends React.Component {
  constructor() {
    super()
    this.state = {
      index: 0,
      dataUp,
      dataDown: dataDownParents
    }
    
    pullData = pullData.bind(this)
    getRole = getRole.bind(this)
  }

  componentDidMount() {
    this.readData()
  }

  readData = async () => {
    try {
      console.log("reading data on HS")
      const jsonValue = await AsyncStorage.getItem('@dataUp_key')
      this.setState({ dataUp: JSON.parse(jsonValue)})
      const encVal = await AsyncStorage.getItem('@role_key')
      if (encVal == 'p') {
        this.setState({ dataDown: dataDownParents })
      } else {
        this.setState({ dataDown: dataDownStudents })
      }
    } catch (error) {
      alert('failed to fetch settings')
    }
  }

  iconClicked = data => {
    if (data.key == 'add') {
      return () => this.props.navigation.navigate('Settings', { screen: 'EditSchoolsScreen' })
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
    let path = ''
    switch (item.key) {
      case 'ccs':
        path = require('../assets/schools/ccs.png')
        break
      case 'add':
        path = require('../assets/add.png')
        break
      case 'chs':
        path = require('../assets/schools/chs.png')
        break
      case 'cam':
        path = require('../assets/schools/cam.png')
        break
      case 'clm':
        path = require('../assets/schools/clm.jpg')
        break
      case 'crm':
        path = require('../assets/schools/crm.png')
        break
      case 'ces':
        path = require('../assets/schools/ces.png')
        break
      case 'cte':
        path = require('../assets/schools/cte.png')
        break
      case 'cwe':
        path = require('../assets/schools/cwe.png')
        break
      case 'fde':
        path = require('../assets/schools/fde.png')
        break
      case 'mte':
        path = require('../assets/schools/mte.png')
        break
      case 'ope':
        path = require('../assets/schools/ope.png')
        break
      case 'pte':
        path = require('../assets/schools/pte.png')
        break
      case 'sre':
        path = require('../assets/schools/sre.png')
        break
      case 'tme':
        path = require('../assets/schools/tme.jpg')
        break
      case 'wce':
        path = require('../assets/schools/wce.png')
        break
      case 'wbe':
        path = require('../assets/schools/wbe.png')
        break
      default:
        path = require('../assets/schools/notfound.png')
    }

    return (
      <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
        <TouchableOpacity style={styles.container} activeOpacity={activeOpacity} onPress={this.iconClicked(item)}>
          <Image source={path} style={styles.images} />
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
        url = require('../assets/canvasPBack.png')
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
            <Image src={url} style={styles.images} />
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