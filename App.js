import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import {
 StyleSheet,
 Text,
 View,
 Button,
 TextInput,
 ScrollView,
 FlatList,
} from 'react-native';

export default function App() {
 // Varibales to manage state.
 const [enteredGoal, setEnteredGoal] = useState('');
 const [courseGoals, setCourseGoals] = useState([]);

 // Event handler for setting a goal when a user types in the input component.
 const goalInputHandler = (enteredText) => {
  setEnteredGoal(enteredText);
 };

 // Event Handler for when user submits a goal.
 const addGoalHandler = () => {
  setCourseGoals((currentGoals) => [
   ...currentGoals,
   { id: Math.random().toString(), value: enteredGoal },
  ]);
 };

 return (
  <View style={styles.screen}>
   <View style={styles.inputContainer}>
    <TextInput
     placeholder='Enter a Goal'
     style={styles.input}
     onChangeText={goalInputHandler}
     value={enteredGoal}
    />
    <Button title='ADD' onPress={addGoalHandler} />
   </View>
   <View>
    {/* FlatLists are used for larger collections of elements. The ScrollView Component renders all elements, whereas, 
     FlatLists only render what is visible on the device. The data prop must point to an array. renderItem is a function that returns the view.
     The keyExtractor prop takes in a function which takes in two arugments, the item and index, then return the identifier.
     
     Additionally, if we want to render multiple elements, we can use JSX and the map method to render a views and other components.

      {courseGoals.map((goal) =>
        <View>
          <Text>{goal}</Text>
        </View>
        )}

     */}
    <FlatList
     keyExtractor={(item, index) => item.id}
     data={courseGoals}
     renderItem={(itemData) => (
      <View style={styles.listItem}>
       <Text>{itemData.item.value}</Text>
      </View>
     )}
    />
   </View>
  </View>
 );
}

const styles = StyleSheet.create({
 screen: {
  padding: 50,
 },
 inputContainer: {
  flexDirection: 'row',
  justifyContent: 'space-around',
  alignItems: 'center',
 },
 input: {
  borderWidth: 1,
  padding: 5,
  width: '80%',
 },
 listItem: {
  padding: 10,
  marginVertical: 10,
  backgroundColor: '#ccc',
  borderColor: 'black',
  borderWidth: 1,
 },
});
