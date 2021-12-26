import React, { useState } from 'react';

import { Button, View, TextInput, StyleSheet, Modal } from 'react-native';

const GoalInput = (props) => {
 const [enteredGoal, setEnteredGoal] = useState('');

 // Event handler for setting a goal when a user types in the input component.
 const goalInputHandler = (enteredText) => {
  setEnteredGoal(enteredText);
 };

 const addGoalHandler = () => {
  props.onAddGoal(enteredGoal);
  setEnteredGoal('');
 };

 return (
  <Modal visible={props.visible} animationType='slide'>
   <View style={styles.inputContainer}>
    <TextInput
     placeholder='Enter a Goal'
     style={styles.input}
     onChangeText={goalInputHandler}
     value={enteredGoal}
    />
    <View style={styles.buttonContainer}>
     <View>
      <Button
       style={styles.button}
       title='CANCEL'
       color='red'
       onPress={props.onCancel}
      />
      {/* Using AnonFunc so that the onAddGoal function is waiting to execute, */}
     </View>
     <View>
      <Button style={styles.button} title='ADD' onPress={addGoalHandler} />
     </View>
    </View>
   </View>
  </Modal>
 );
};

const styles = StyleSheet.create({
 inputContainer: {
  justifyContent: 'center',
  alignItems: 'center',
  flex: 1,
 },
 input: {
  borderWidth: 1,
  padding: 5,
  width: '80%',
  marginBottom: 10,
 },

 buttonContainer: {
  flexDirection: 'row',
  justifyContent: 'space-between',
  width: '60%',
 },

 button: {
  width: '40%',
 },
});

export default GoalInput;
