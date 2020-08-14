import React from 'react';
import { StyleSheet, Linking, TouchableOpacity, Text, Dimensions, View } from 'react-native';

export default function AppInfoScreen({ route }) {
  let textBlock1 = ""
  let textBlock2 = ""
  let username = ""
  let password = ""
  switch (route.params.item.name) {
    case "Canvas Parent":
      textBlock1 = "Canvas Parent is designed to provide visibility into your child’s education at a glance. Canvas Parent allows parents to:"
      textBlock2 = "View assignment descriptions and due dates\nSet reminders for assignments\nView assignment grades\nView course grades\nSet grade alerts\nView course announcements"
      username = "Username: Username created at time of signup"
      password = "Password: Password created at time of signup"
      break
    case "PowerSchool":
      textBlock1 = "Built for convenient access to real-time student information like grades, assignments, and attendance, the PowerSchool Mobile App provides enhanced functionality for parents, guardians, and students."
      username = "Username: Parent email used at time of signup"
      password = "Password: Password created at time of signup"
      break
    case "EZSchoolPay":
      textBlock1 = "Use EZSchoolPay app to link your students, view lunchroom purchase history and current meal account balances, set a low balance email payment reminder, add funds to your students’ meal accounts, and more."
      username = "Username: Parent email used at time of signup"
      password = "Password: Password created at time of signup"
      break
    case "STOPit":
      textBlock1 = "Use STOPit to anonymously alert your organization to inappropriate conduct or safety concerns such as harassment, bullying, ethics or compliance violations, weapons possession, hazing, safety hazards, threats, assault, or illegal activity, or to ask for help for yourself or another."
      username = "Code: chscares"
      break
    case "Remind":
      textBlock1 = "Remind is a communication platform that helps every student succeed. Whether you're in the classroom, at home, or anywhere in between, Remind makes it easy to stay connected to your school community."
      username = "Username: Username created at time of signup"
      password = "Password: Password created at time of signup"
      break
  }

  return (
    <View style={styles.container}>
        <Text style={styles.title}>{route.params.item.name}</Text>
        <Text style={styles.subtitle}>App Description: </Text>
        <Text style={styles.text1}>{textBlock1}</Text>
        <Text style={{fontSize: 15}}>{textBlock2}</Text>
        <Text style={styles.subtitle}>Login Info:</Text>
        <Text style={styles.text1}>{username}</Text>
        <Text style={styles.text1}>{password}</Text>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  title: {
    textAlign: 'center',
    fontSize: 25,
    fontWeight: '300',
    textDecorationLine: 'underline',
    paddingBottom: 10,
    paddingTop: 10 
  },
  subtitle: {
    fontSize: 18,
    padding: 8,
    fontWeight: 'bold'
  },
  text1: {
    fontSize: 18,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 8,
  },
  text2: {
    fontSize: 15,
    padding: 4
  }
})