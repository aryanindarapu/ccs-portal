import React from 'react';
import { AsyncStorage, StyleSheet, Alert, SafeAreaView } from 'react-native';
import Constants from 'expo-constants';
import WeekView from 'react-native-week-view';
import moment from 'moment';

import { generateDays, getMonday } from '../dataFiles/generateDays';

export function getTodoList(days) {
  this.setState({days})
}

export default class CalendarScreen extends React.Component {

  constructor() {
    super()
    this.state = {
      days: [],
      selectedDate: getMonday(new Date()),
    }

    getTodoList = getTodoList.bind(this)
  }

  componentDidMount() {
    this.readData()
  }

  storeData = async (data) => {
    // console.log("storing data")
    try {
      const jsonValue = JSON.stringify(data)
      await AsyncStorage.setItem('@test_key_planner', jsonValue)
    } catch (error) {
      alert(error.message)
    }
  }
  
  readData = async () => {
    try {
      console.log("reading data")
      const jsonValueData = await AsyncStorage.getItem('@test_key_planner')
      jsonValueData != null ? this.setState({ days: JSON.parse(jsonValueData)}) : this.setState({ days: generateDays() }, () => this.storeData(this.state.days))
    } catch (error) {
      alert('failed to fetch settings')
    }
  }

  formatDate = (date) => {
    let formattedDate = moment(date).format('dddd, MMMM D')
    return formattedDate
  }

  goToScreen = ({id, startDate, description, todos}) => {
    let formattedDate = this.formatDate(startDate)
    this.props.navigation.navigate('EventViewAddScreen', {id, date: formattedDate, description, todos, dayList: this.state.days})
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <WeekView
          events={this.state.days}
          selectedDate={this.state.selectedDate}
          numberOfDays={7}
          onEventPress={this.goToScreen}
          // onGridClick={this.onGridClick}
          headerStyle={styles.headerStyle}
          formatDateHeader="ddd, MMM D"
          hoursInDisplay={6}
          startHour={8}
        />
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Constants.statusBarHeight,
  },
  headerStyle: {
    backgroundColor: '#4286f4',
    color: '#fff',
    borderColor: '#fff',
  },
})