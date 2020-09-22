import React from 'react';
import { StyleSheet, Alert, SafeAreaView } from 'react-native';
import Constants from 'expo-constants';
import WeekView from 'react-native-week-view';

import { blueDays, goldDays } from '../schedule';

const generateDates = (year, month, day, hours, minutes) => {
  const date = new Date(year, (month - 1), day, hours, minutes, 0, 0)
  return date
}

const generateDays = () => {
  const tempEvents = []
  let id = 0

  goldDays.forEach(month => {
    for (let i = 0; i < month.dates.length; i++) {
      if (month.lateStart[0] == month.dates[i] || month.lateStart[1] == month.dates[i]) {
        console.log("lateStart")
        id += 1
        let tempG1 = {
          id,
          description: 'Gold 1',
          startDate: generateDates(2020, month.month, month.dates[i], 9, 25),
          endDate: generateDates(2020, month.month, month.dates[i], 10, 41),
          color: 'gold',
          todo: ["This is a todo"]
        }

        id += 1
        let tempG3 = {
          id,
          description: 'Gold 3',
          startDate: generateDates(2020, month.month, month.dates[i], 12, 18),
          endDate: generateDates(2020, month.month, month.dates[i], 14, 18),
          color: 'gold',
          todo: []
        }

        id += 1
        let tempG4 = {
          id,
          description: 'Gold 4',
          startDate: generateDates(2020, month.month, month.dates[i], 14, 28),
          endDate: generateDates(2020, month.month, month.dates[i], 15, 45),
          color: 'gold',
          todo: []
        }

        tempEvents.push(tempG1, tempG3, tempG4)
      } else {
        id += 1
        let tempG1 = {
          id,
          description: 'Gold 1',
          startDate: generateDates(2020, month.month, month.dates[i], 8, 45),
          endDate: generateDates(2020, month.month, month.dates[i], 10, 15),
          color: 'gold',
          todo: []
        }

        id += 1
        let tempG3 = {
          id,
          description: 'Gold 3',
          startDate: generateDates(2020, month.month, month.dates[i], 12, 5),
          endDate: generateDates(2020, month.month, month.dates[i], 14, 5),
          color: 'gold',
          todo: []
        }

        id += 1
        let tempG4 = {
          id,
          description: 'Gold 4',
          startDate: generateDates(2020, month.month, month.dates[i], 14, 15),
          endDate: generateDates(2020, month.month, month.dates[i], 15, 45),
          color: 'gold',
          todo: []
        }

        tempEvents.push(tempG1, tempG3, tempG4)
      }      
    }
  })

  blueDays.forEach(month => {
    for (let i = 0; i < month.dates.length; i++) {
      if (month.lateStart[0] == month.dates[i] || month.lateStart[1] == month.dates[i]) {
        id += 1
        let tempB1 = {
          id,
          description: 'Blue 1',
          startDate: generateDates(2020, month.month, month.dates[i], 9, 25),
          endDate: generateDates(2020, month.month, month.dates[i], 10, 41),
          color: 'blue',
          todo: []
        }

        id += 1
        let tempB2 = {
          id,
          description: 'Blue 2',
          startDate: generateDates(2020, month.month, month.dates[i], 10, 51),
          endDate: generateDates(2020, month.month, month.dates[i], 12, 8),
          color: 'blue',
          todo: []
        }

        id += 1
        let tempB3 = {
          id,
          description: 'Blue 3',
          startDate: generateDates(2020, month.month, month.dates[i], 12, 18),
          endDate: generateDates(2020, month.month, month.dates[i], 14, 18),
          color: 'blue',
          todo: []
        }

        id += 1
        let tempB4 = {
          id,
          description: 'Blue 4',
          startDate: generateDates(2020, month.month, month.dates[i], 14, 28),
          endDate: generateDates(2020, month.month, month.dates[i], 15, 45),
          color: 'blue',
          todo: []
        }

        tempEvents.push(tempB1, tempB2, tempB3, tempB4)
      } else {
        id += 1
        let tempB1 = {
          id,
          description: 'Blue 1',
          startDate: generateDates(2020, month.month, month.dates[i], 8, 45),
          endDate: generateDates(2020, month.month, month.dates[i], 10, 15),
          color: 'blue',
          todo: []
        }

        id += 1
        let tempB2 = {
          id,
          description: 'Blue 2',
          startDate: generateDates(2020, month.month, month.dates[i], 10, 25),
          endDate: generateDates(2020, month.month, month.dates[i], 11, 55),
          color: 'blue',
          todo: []
        }

        id += 1
        let tempB3 = {
          id,
          description: 'Blue 3',
          startDate: generateDates(2020, month.month, month.dates[i], 12, 5),
          endDate: generateDates(2020, month.month, month.dates[i], 14, 5),
          color: 'blue',
          todo: []
        }

        id += 1
        let tempB4 = {
          id,
          description: 'Blue 4',
          startDate: generateDates(2020, month.month, month.dates[i], 14, 15),
          endDate: generateDates(2020, month.month, month.dates[i], 15, 45),
          color: 'blue',
          todo: []
        }

        tempEvents.push(tempB1, tempB2, tempB3, tempB4)
      }
    }
  })

  return tempEvents
}

export default class CalendarScreen extends React.Component {
  state = {
    days: generateDays(),
    selectedDate: new Date(),
  }

  onEventPress = ({id, color, startDate, endDate}) => {
    Alert.alert(
      `event ${color} - ${id}`,
      `start: ${startDate}\nend: ${endDate}`,
    )
  }

  // TODO: implement user click on grid area and create event
  // Not t0o important, can do later
  onGridClick = (event, startHour) => {
    Alert.alert(`start hour: ${startHour}`);
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <WeekView
          events={this.state.days}
          selectedDate={this.state.selectedDate}
          numberOfDays={5}
          onEventPress={this.onEventPress}
          onGridClick={this.onGridClick}
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