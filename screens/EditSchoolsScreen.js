import React from 'react';
import { StyleSheet, Text, ScrollView, View, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';
import * as Animatable from 'react-native-animatable';
import Accordion from 'react-native-collapsible/Accordion';
import { Ionicons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-community/async-storage';

import { dataUp, schools } from '../IconData';
import { pullData } from './HomeScreen';
import { dataUpdate } from '../DataUpdateFuncs';
import { SchoolSwitch } from '../SchoolSwitch';

export default class EditSchoolsScreen extends React.Component {
  state = {
    dataUp,
    schools,
    activeSections: [],
  }

  componentDidMount() {
    this.readData()
  }

  storeData = async (data, school) => {
    try {
      const jsonValueData = JSON.stringify(data)
      const jsonValueSchool = JSON.stringify(school)
      await AsyncStorage.setItem('@test3', jsonValueData)
      await AsyncStorage.setItem('@test11', jsonValueSchool)

      console.log("saving data")
    } catch (error) {
      alert(error.message)
    }
  }
  
  readData = async () => {
    try {
      console.log("reading data")
      const jsonValueData = await AsyncStorage.getItem('@test3')
      const jsonValueSchool = await AsyncStorage.getItem('@test11')
      jsonValueData != null ? this.setState({ dataUp: JSON.parse(jsonValueData)}) : this.state.dataUp
      jsonValueSchool != null ? this.setState({ schools: JSON.parse(jsonValueSchool)}) : this.state.schools
    } catch (error) {
      alert('failed to fetch settings')
    }
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

  // Gets key in school and adds data to dataUp
  toggleTodo(school) {
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
      // adds data and updates carousel
      this.setState({
        dataUp: [dataUpdate(newSchool), ...this.state.dataUp]
      }, () => {
          this.storeData(this.state.dataUp, this.state.schools)
          pullData(this.state.dataUp)
        }  
      )
    } else {
      // removes data and updates carousel
      this.setState({
        dataUp: this.state.dataUp.filter(data => data.key !== newSchool[0].key)
      }, () => {
          this.storeData(this.state.dataUp, this.state.schools)
          pullData(this.state.dataUp)
        }
      )
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
        <Text style={[styles.headerText, isActive ? styles.activeHeader : styles.inactiveHeader]}>{section.title}</Text>
        {isActive ?
          <Ionicons name="ios-arrow-up" size={24} color='white' style={[styles.icon, styles.activeHeader]} />
          :
          <Ionicons name="ios-arrow-down" size={24} color='white' style={[styles.icon, styles.inactiveHeader]} />
        }
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
        {section.content}
      </Animatable.View>
    );
  }

  render() {
    const { activeSections } = this.state;

    return (
      <ScrollView>
        <Accordion
          activeSections={activeSections}
          sections={this.getContent()}
          touchableComponent={TouchableOpacity}
          renderHeader={this.renderHeader}
          renderContent={this.renderContent}
          duration={400}
          onChange={this.setSections}
        />
        <Text>{this.state.testWord}</Text>
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
  switch: {
    alignItems: "baseline"
  },
  header: {
    backgroundColor: '#005cb0',
    padding: 15,
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  headerText: {
    textAlign: 'left',
    fontSize: 20,
    fontWeight: '500',
  },
  icon: {
    marginLeft: "auto"
  },
  content: {
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 10,
    backgroundColor: '#fff',
    flex: 1,
  },
  active: {
    backgroundColor: '#fff',
  },
  inactive: {
    backgroundColor: '#005cb0',
  },
  activeHeader: {
    color: 'black',
  },
  inactiveHeader: {
    color: 'white',
  },
});