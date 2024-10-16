// frontend/src/screens/HomeScreen.js
import React from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import LoginScreen from './LoginScreen';

const HomeScreen = ({navigation}) => {
  
  return (
    <View style={styles.container}>
      
      <Text style={styles.title}>Bienvenido a la Clínica Pediátrica</Text>
      


      <View style={styles.spacer} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E7DDFF',
  },
  title: {
    fontSize: 28,
    marginBottom: 20,
    color: '#333',
  },
  spacer: {
    height: 20,
  },
  button: {
    backgroundColor: '#B78DFF',
    padding: 10,
    borderRadius: 5,
    marginVertical: 10,
    alignItems: 'center',
    width: '80%',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});export default HomeScreen;
