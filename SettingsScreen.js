import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Switch } from 'react-native-gesture-handler';

import { dataUp, schools, pushData } from './IconData'

const SchoolSwitch = props => (
  <View style = {styles.container}>
    <Switch 
      value={props.schools.checked}
      onValueChange = {props.onToggle}
      trackColor={{ false: "#fff", true: "#81b0ff" }}
      ios_backgroundColor="#3e3e3e"
    />
    <Text>{props.schools.name}</Text>
  </View>
)

const dataPushed = []

export default class SettingsScreen extends React.Component {
  state = {
    dataUp,
    schools
  }

  componentWillUnmount() {
    // console.log("unmounted settings screen")
    console.log(this.state.dataUp)
    pushData(this.state.dataUp, this.state.schools)
  }

  // Removes data from dataUp
  removeData(id) {
    this.setState({
      dataUp: this.state.dataUp.filter(data => data.id !== id)
    })
  }

  // Gets id in school and adds data to dataUp
  toggleTodo(school) {
    this.setState({
      schools: this.state.schools.map(data => {
        if (data.id !== school.id) return data
        return {
          id: data.id,
          name: data.name,
          checked: !data.checked
        }
      })
    }, () => this.updateData(school))
  }
    
  updateData(school) {
    let newSchool = this.state.schools.filter(obj => {
      return obj.id === school.id
    })

    console.log(newSchool[0].id)

    if (newSchool[0].checked) {
      switch(newSchool[0].id) {
        case 'chs':
          this.setState({dataUp: [...this.state.dataUp, {
            id: 'chs',
            path: require('./assets/chs.png'),
            name: 'Carmel High School',
            func: () => alert('Pressed 1:4!')
          }]})
          break
        case 'crms':
          this.setState({dataUp: [...this.state.dataUp, {
            id: 'crms',
            path: require('./assets/creekside.png'),
            name: 'Creekside Middle \nSchool',
            func: () => alert('Pressed 1:4!')
          }]})
          break
        case 'cams':
          this.setState({dataUp: [...this.state.dataUp, {
            id: 'cams',
            path: require('./assets/carmel.png'),
            name: 'Carmel Middle \nSchool',
            func: () => alert('Pressed 1:4!')
          }]})
          break
        case 'clms':
          this.setState({dataUp: [...this.state.dataUp, {
            id: 'clms',
            path: require('./assets/clay.jpg'),
            name: 'Clay Middle School',
            func: () => alert('Pressed 1:4!')
          }]})
          break
        default:
          break
      }
    } else {
      this.removeData(newSchool[0].id)
    }
  }

  render() {
    return (
      <View style={styles.container}>
        {this.state.schools.map(data => (
          <SchoolSwitch 
            onToggle={() => this.toggleTodo(data)}
            schools={data}
          />
        ))}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});