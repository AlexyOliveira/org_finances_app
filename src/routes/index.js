import {Text, View} from 'react-native';
import React, { useContext } from 'react';
import AuthRoutes from './authRoutes';
import AppRoutes from './appRoutes';
import { AuthContext } from '../contexts/auth';
import { ActivityIndicator } from 'react-native';

const Routes = () => {
  const {signed, initialLoading} = useContext(AuthContext)

  if (initialLoading) {
    return(
      <View
       style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F0F4FF'
       }}
      >
        <ActivityIndicator size={50} color="#131313"/>
      </View>
    )
  }
  return(
    signed ? <AppRoutes /> : <AuthRoutes />
  )
};

export default Routes;
