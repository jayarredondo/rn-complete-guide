import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {
  return (
    <View style={{padding: 50}}>
      <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
        <TextInput placeholder="Enter a Goal" style={{borderWidth: 1, padding: 5}}/>
          <Button title="ADD" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
