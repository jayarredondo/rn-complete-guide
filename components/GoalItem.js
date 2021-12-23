import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const GoalItem = (props) => {
 return (
  //   activeOpacity changes the intensity of the opacity change
  <TouchableOpacity
   onPress={() => props.onDelete(props.id)}
   activeOpacity={0.6}
  >
   <View style={styles.listItem}>
    <Text>{props.title}</Text>
   </View>
  </TouchableOpacity>
 );
};
const styles = StyleSheet.create({
 listItem: {
  padding: 10,
  marginVertical: 10,
  backgroundColor: '#ccc',
  borderColor: 'black',
  borderWidth: 1,
 },
});

export default GoalItem;
