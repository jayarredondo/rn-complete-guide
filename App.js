import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, View, Button, FlatList } from 'react-native';

import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
 // Varibales to manage state.
 const [courseGoals, setCourseGoals] = useState([]);
 const [isAddMode, setIsAddMode] = useState(false);

 // Event Handler for when user submits a goal.
 const addGoalHandler = (goalTitle) => {
  if (goalTitle.length === 0) {
   return;
  }
  setCourseGoals((currentGoals) => [
   ...currentGoals,
   { id: Math.random().toString(), value: goalTitle },
  ]);
  setIsAddMode(false);
 };

 const deleteGoal = (goalId) => {
  setCourseGoals((currentGoals) => {
   return currentGoals.filter((goal) => goal.id !== goalId);
  });
 };

 const cancelAddGoal = () => setIsAddMode(false);

 return (
  <View style={styles.screen}>
   <Button title='Add New Goal' onPress={() => setIsAddMode(true)} />
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
   <GoalInput
    visible={isAddMode}
    onAddGoal={addGoalHandler}
    onCancel={cancelAddGoal}
   />
   <FlatList
    keyExtractor={(item, index) => item.id}
    data={courseGoals}
    renderItem={(itemData) => (
     <GoalItem
      id={itemData.item.id}
      onDelete={deleteGoal}
      title={itemData.item.value}
     />
    )}
   />
  </View>
 );
}

const styles = StyleSheet.create({
 screen: {
  padding: 50,
 },
});
