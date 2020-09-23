import React, { useState, useEffect } from 'react';
import { AsyncStorage, StyleSheet, View, FlatList, Alert, TouchableWithoutFeedback, Keyboard, ScrollView } from 'react-native';

import Header from '../components/header';
import TodoItem from '../components/todoItem';
import AddTodo from '../components/addTodo';
import { getTodoList } from './PlannerScreen';

export default function EventViewAddScreen ({ route }) {
  const [todos, setTodos] = useState(route.params.todos);

  useEffect(() => {updateStoredTodo(todos)})

  const storeData = async (data) => {
    try {
      const jsonValue = JSON.stringify(data)
      await AsyncStorage.setItem('@test_key_planner', jsonValue)
    } catch (error) {
      alert(error.message)  
    }
  }

  const updateStoredTodo = (incomingTodos) => {
    try {
      let dayList = route.params.dayList

      let tempArr = dayList.map(day => {
        if (day.id == route.params.id) {
          // console.log(incomingTodos)
          return {
            id: day.id,
            description: day.description,
            startDate: day.startDate,
            endDate: day.endDate,
            color: day.color,
            todos: incomingTodos
          }
        } else return day
      })

      getTodoList(tempArr)
      storeData(tempArr)
    } catch (error) {
      alert(error)
    }
  }

  // Remove item from FlatList
  const pressHandler = (key) => {
    console.log(key)
    setTodos(prevTodos => {
      return prevTodos.filter(todo => todo.key != key);
    });
  };

  // Add item from FlatList
  const submitHandler = (text) => {
    if(text.length > 3) {
      setText('');
      // updateArray(text)
      setTodos(prevTodos => {
        return [
          { text, key: Math.random().toString() },
          ...prevTodos
        ];
      });
    } else {
      Alert.alert('OOPS', 'Todo must be over 3 characters long', [
        {text: 'Understood', onPress: () => console.log('alert closed') }
      ]);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <Header 
          date={route.params.date}
          title={route.params.description}
        />
        <View style={styles.content}>
          <AddTodo submitHandler={submitHandler} />
          <View style={styles.list}>
            <FlatList
              data={todos}
              renderItem={({ item }) => (
                <TodoItem item={item} pressHandler={pressHandler} />
              )}
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    // overflow: 'hidden'
  },
  content: {
    padding: 40,
  },
  list: {
    marginTop: 20,
    paddingBottom: 30
  },
})