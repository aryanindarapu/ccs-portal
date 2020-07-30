import React from 'react';
import { StyleSheet, Text, ScrollView, View, TouchableOpacity } from 'react-native';
import { Switch } from 'react-native-gesture-handler';
import Constants from 'expo-constants';
import * as Animatable from 'react-native-animatable';
import Accordion from 'react-native-collapsible/Accordion';

import { dataUp, schools, pushData } from './IconData';
import { pullData } from './HomeScreen';

const SchoolSwitch = props => (
  <View style = {styles.switchContainer}>
    <Text style={styles.text}>{props.schools.name}</Text>
    <Switch 
      style={styles.switch}
      value={props.schools.checked}
      onValueChange = {props.onToggle}
      trackColor={{ false: "#fff", true: "#81b0ff" }}
      ios_backgroundColor="#3e3e3e"
    />
  </View>
)

export default class SettingsScreen extends React.Component {
  state = {
    dataUp,
    schools,
    activeSections: [],
  }

  getContent = () => {
    return([
      {
        title: 'High Schools',
        content: 
          this.state.schools.filter(data => data.schoolType == 'hs').map(data => (
            <SchoolSwitch 
              onToggle={() => this.toggleTodo(data)}
              schools={data}
            />)
          )          
      },
      {
        title: 'Middle Schools',
        content:
            this.state.schools.filter(data => data.schoolType == 'ms').map(data => (
              <SchoolSwitch 
                onToggle={() => this.toggleTodo(data)}
                schools={data}
              />)
            ),
      },
      {
        title: 'Elementary Schools',
        content:
            this.state.schools.filter(data => data.schoolType == 'es').map(data => (
              <SchoolSwitch 
                style={styles.container}
                onToggle={() => this.toggleTodo(data)}
                schools={data}
              />)
            ),
      },
    ])
  }

  // Functions for sending and pulling data
  componentWillUnmount() {
    pullData(this.state.dataUp) 
    pushData(this.state.dataUp, this.state.schools)
  }

  // Removes data from dataUp
  removeData(key) {
    this.setState({
      dataUp: this.state.dataUp.filter(data => data.key !== key)
    })
  }

  // Gets key in school and adds data to dataUp
  toggleTodo(school) {
    console.log(school)
    this.setState({
      schools: this.state.schools.map(data => {
        if (data.key !== school.key) return data
        return {
          key: data.key,
          schoolType: data.schoolType,
          name: data.name,
          checked: !data.checked
        }
      })
    }, () => this.updateData(school))
  }

  updateData(school) {
    let newSchool = this.state.schools.filter(obj => {
      return obj.key === school.key
    })

    if (newSchool[0].checked) {
      switch(newSchool[0].key) {
        case 'chs':
          this.setState({dataUp: [{
            key: 'chs',
            path: require('./assets/chs.png'),
            name: 'Carmel High School',
            url: 'https://www.ccs.k12.in.us/chs'
          }, ...this.state.dataUp]})
          break
        case 'crms':
          this.setState({dataUp: [{
            key: 'crms',
            path: require('./assets/creekside.png'),
            name: 'Creekside Middle \nSchool',
            url: 'https://www.ccs.k12.in.us/crm'
          }, ...this.state.dataUp]})
          break
        case 'cams':
          this.setState({dataUp: [{
            key: 'cams',
            path: require('./assets/carmel.png'),
            name: 'Carmel Middle \nSchool',
            url: 'https://www.ccs.k12.in.us/cam'
          }, ...this.state.dataUp]})
          break
        case 'clms':
          this.setState({dataUp: [{
            key: 'clms',
            path: require('./assets/clay.jpg'),
            name: 'Clay Middle School',
            url: 'https://www.ccs.k12.in.us/clm'
          }, ...this.state.dataUp]})
          break
        case 'ce':
          this.setState({dataUp: [{
            key: 'ce',
            path: require('./assets/ce.png'),
            name: 'Carmel Elementary \nSchool',
            url: 'https://www.ccs.k12.in.us/ces'
          }, ...this.state.dataUp]})
          break
        case 'cte':
          this.setState({dataUp: [{
            key: 'cte',
            path: require('./assets/cte.png'),
            name: 'Cherry Tree \nElementary School',
            url: 'https://www.ccs.k12.in.us/cte'
          }, ...this.state.dataUp]})
          break
        case 'cwe':
          this.setState({dataUp: [{
            key: 'cwe',
            path: require('./assets/cwe.png'),
            name: 'College Wood \nElementary School',
            url: 'https://www.ccs.k12.in.us/cwe'
          }, ...this.state.dataUp]})
          break
        case 'fde':
          this.setState({dataUp: [{
            key: 'fde',
            path: require('./assets/fde.png'),
            name: 'Forest Dale \nElementary School',
            url: 'https://www.ccs.k12.in.us/fde'
          }, ...this.state.dataUp]})
          break
        case 'mte':
          this.setState({dataUp: [{
            key: 'mte',
            path: require('./assets/mte.png'),
            name: 'Mohawk Trails \nElementary School',
            url: 'https://www.ccs.k12.in.us/mte'
          }, ...this.state.dataUp]})
          break
        case 'ope':
          this.setState({dataUp: [{
            key: 'ope',
            path: require('./assets/ope.png'),
            name: 'Orchard Park \nElementary School',
            url: 'https://www.ccs.k12.in.us/ope'
          }, ...this.state.dataUp]})
          break
        case 'pte':
          this.setState({dataUp: [{
            key: 'pte',
            path: require('./assets/pte.png'),
            name: 'Praire Trace \nElementary School',
            url: 'https://www.ccs.k12.in.us/pte'
          }, ...this.state.dataUp]})
          break
        case 'sre':
          this.setState({dataUp: [{
            key: 'sre',
            path: require('./assets/sre.png'),
            name: 'Smoky Row \nElementary School',
            url: 'https://www.ccs.k12.in.us/sre'
          }, ...this.state.dataUp]})
          break
        case 'tme':
          this.setState({dataUp: [{
            key: 'tme',
            path: require('./assets/tme.png'),
            name: 'Towne Meadow \nElementary School',
            url: 'https://www.ccs.k12.in.us/tme'
          }, ...this.state.dataUp]})
          break
        case 'wce':
          this.setState({dataUp: [{
            key: 'wce',
            path: require('./assets/wce.png'),
            name: 'West Clay \nElementary School',
            url: 'https://www.ccs.k12.in.us/wce'
          }, ...this.state.dataUp]})
          break
        case 'we':
          this.setState({dataUp: [{
            key: 'we',
            path: require('./assets/we.png'),
            name: 'Woodbrook Elementary \nSchool',
            url: 'https://www.ccs.k12.in.us/wbe'
          }, ...this.state.dataUp]})              
        default:
          break
      }
    } else {
      this.removeData(newSchool[0].key)
    }
  }

  // Functions for collapsible
  toggleExpanded = () => {
    this.setState({ collapsed: !this.state.collapsed });
  };

  setSections = sections => {
    this.setState({
      activeSections: sections.includes(undefined) ? [] : sections,
    });
  };

  renderHeader = (section, _, isActive) => {
    return (
      <Animatable.View
        duration={400}
        style={[styles.header, isActive ? styles.active : styles.inactive]}
        transition="backgroundColor"
      >
        <Text style={styles.headerText}>{section.title}</Text>
      </Animatable.View>
    );
  };

  renderContent(section, _, isActive) {
    return (
      <Animatable.View
        duration={400}
        style={[styles.content, isActive ? styles.active : styles.inactive]}
        transition="backgroundColor"
      >
        {/* <Animatable.Text animation={isActive ? 'bounceIn' : undefined}> */}
          {section.content}
        {/* </Animatable.Text> */}
      </Animatable.View>
    );
  }

  render() {
    const { activeSections } = this.state;

    return (
      <ScrollView>
        <Text style={styles.title}>Accordion Example</Text>
        <Accordion
          activeSections={activeSections}
          sections={this.getContent()}
          touchableComponent={TouchableOpacity}
          renderHeader={this.renderHeader}
          renderContent={this.renderContent}
          duration={400}
          onChange={this.setSections}
        />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingTop: Constants.statusBarHeight,
  },
  switchContainer: {
    alignItems: "center",
    flexDirection:"row"
  },
  switch: {
    alignItems: "baseline"
  },
  title: {
    textAlign: 'center',
    fontSize: 24,
    fontWeight: '300',
    marginBottom: 20,
  },
  header: {
    backgroundColor: '#F5FCFF',
    padding: 15,
  },
  headerText: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '500',
  },
  content: {
    padding: 20,
    backgroundColor: '#fff',
  },
  active: {
    backgroundColor: 'rgba(255,255,255,1)',
  },
  inactive: {
    backgroundColor: 'rgba(245,252,255,1)',
  },
  text: {
    fontSize: 16,
    color: 'black',
    // textAlign: 'left'
  }
});