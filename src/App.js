import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Router from './router';
  
const YourApp = () => {
  return (
    <NavigationContainer>
    <Router/>
  </NavigationContainer>
  );
}

export default YourApp;