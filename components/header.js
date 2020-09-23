import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Header({ date, title }) {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.date}>{date}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    padding: 20,
    backgroundColor: 'coral',
  },
  title: {
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#fff',
    fontSize: 25,
    fontWeight: 'bold',
  },
  date: {
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#fff',
    fontSize: 15,
  }
});