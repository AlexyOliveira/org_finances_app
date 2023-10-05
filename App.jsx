import 'react-native-gesture-handler';
import { StatusBar, StyleSheet } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/routes';
import AuthProvider from './src/contexts/auth';

const App = () => {
  return (
   <NavigationContainer>
    <AuthProvider>
       <StatusBar backgroundColor="#F0F4FF" barStyle="dark-content" />
     <Routes />
    </AuthProvider>
   </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default App