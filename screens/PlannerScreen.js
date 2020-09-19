import React from 'react';
import {StyleSheet, Alert, SafeAreaView} from 'react-native';
import Constants from 'expo-constants';
import WeekView from 'react-native-week-view';

const generateDates = (hours, minutes) => {
  const date = new Date();
  date.setHours(hours);
  if (minutes != null) {
    date.setMinutes(minutes);
  }
  return date;
};

const sampleEvents = [
  {
    id: 1,
    description: 'Event 1',
    startDate: generateDates(16, 15),
    endDate: generateDates(18),
    color: 'blue',
  },
  {
    id: 2,
    description: 'Event 2',
    startDate: generateDates(1),
    endDate: generateDates(4),
    color: 'red',
  },
  {
    id: 3,
    description: 'Event 3',
    startDate: generateDates(-5),
    endDate: generateDates(-3),
    color: 'green',
  },
]

export default class CalendarScreen extends React.Component {
  state = {
    events: sampleEvents,
    selectedDate: new Date(),
  }

  onEventPress = ({id, color, startDate, endDate}) => {
    Alert.alert(
      `event ${color} - ${id}`,
      `start: ${startDate}\nend: ${endDate}`,
    )
  }

  onGridClick = (event, startHour) => {
    Alert.alert(`start hour: ${startHour}`);
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <WeekView
          events={this.state.events}
          selectedDate={this.state.selectedDate}
          numberOfDays={3}
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