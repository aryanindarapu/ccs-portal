import React from 'react';
import { StyleSheet, Text, ScrollView, View } from 'react-native';
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

    if (newSchool[0].checked) {
      switch(newSchool[0].id) {
        case 'chs':
          this.setState({dataUp: [{
            id: 'chs',
            path: require('./assets/chs.png'),
            name: 'Carmel High School',
            url: 'https://www.ccs.k12.in.us/chs'
          }, ...this.state.dataUp]})
          break
        case 'crms':
          this.setState({dataUp: [{
            id: 'crms',
            path: require('./assets/creekside.png'),
            name: 'Creekside Middle \nSchool',
            url: 'https://www.ccs.k12.in.us/crm'
          }, ...this.state.dataUp]})
          break
        case 'cams':
          this.setState({dataUp: [{
            id: 'cams',
            path: require('./assets/carmel.png'),
            name: 'Carmel Middle \nSchool',
            url: 'https://www.ccs.k12.in.us/cam'
          }, ...this.state.dataUp]})
          break
        case 'clms':
          this.setState({dataUp: [{
            id: 'clms',
            path: require('./assets/clay.jpg'),
            name: 'Clay Middle School',
            url: 'https://www.ccs.k12.in.us/clm'
          }, ...this.state.dataUp]})
          break
        case 'ce':
          this.setState({dataUp: [{
            id: 'ce',
            path: require('./assets/ce.png'),
            name: 'Carmel Elementary \nSchool',
            url: 'https://www.ccs.k12.in.us/ces'
          }, ...this.state.dataUp]})
          break
        case 'cte':
          this.setState({dataUp: [{
            id: 'cte',
            path: require('./assets/cte.png'),
            name: 'Cherry Tree \nElementary School',
            url: 'https://www.ccs.k12.in.us/cte'
          }, ...this.state.dataUp]})
          break
        case 'cwe':
          this.setState({dataUp: [{
            id: 'cwe',
            path: require('./assets/cwe.png'),
            name: 'College Wood \nElementary School',
            url: 'https://www.ccs.k12.in.us/cwe'
          }, ...this.state.dataUp]})
          break
        case 'fde':
          this.setState({dataUp: [{
            id: 'fde',
            path: require('./assets/fde.png'),
            name: 'Forest Dale \nElementary School',
            url: 'https://www.ccs.k12.in.us/fde'
          }, ...this.state.dataUp]})
          break
        case 'mte':
          this.setState({dataUp: [{
            id: 'mte',
            path: require('./assets/mte.png'),
            name: 'Mohawk Trails \nElementary School',
            url: 'https://www.ccs.k12.in.us/mte'
          }, ...this.state.dataUp]})
          break
        case 'ope':
          this.setState({dataUp: [{
            id: 'ope',
            path: require('./assets/ope.png'),
            name: 'Orchard Park \nElementary School',
            url: 'https://www.ccs.k12.in.us/ope'
          }, ...this.state.dataUp]})
          break
        case 'pte':
          this.setState({dataUp: [{
            id: 'pte',
            path: require('./assets/pte.png'),
            name: 'Praire Trace \nElementary School',
            url: 'https://www.ccs.k12.in.us/pte'
          }, ...this.state.dataUp]})
          break
        case 'sre':
          this.setState({dataUp: [{
            id: 'sre',
            path: require('./assets/sre.png'),
            name: 'Smoky Row \nElementary School',
            url: 'https://www.ccs.k12.in.us/sre'
          }, ...this.state.dataUp]})
          break
        case 'tme':
          this.setState({dataUp: [{
            id: 'tme',
            path: require('./assets/tme.png'),
            name: 'Towne Meadow \nElementary School',
            url: 'https://www.ccs.k12.in.us/tme'
          }, ...this.state.dataUp]})
          break
        case 'wce':
          this.setState({dataUp: [{
            id: 'wce',
            path: require('./assets/wce.png'),
            name: 'West Clay \nElementary School',
            url: 'https://www.ccs.k12.in.us/wce'
          }, ...this.state.dataUp]})
          break
        case 'we':
          this.setState({dataUp: [{
            id: 'we',
            path: require('./assets/we.png'),
            name: 'Woodbrook Elementary \nSchool',
            url: 'https://www.ccs.k12.in.us/wbe'
          }, ...this.state.dataUp]})              
        default:
          break
      }
    } else {
      this.removeData(newSchool[0].id)
    }
  }

  render() {
    return (
      <ScrollView>
        {this.state.schools.map(data => (
          <SchoolSwitch 
            onToggle={() => this.toggleTodo(data)}
            schools={data}
          />
        ))}
      </ScrollView>
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