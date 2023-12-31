import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';

import Home from '../pages/Home';
import New from '../pages/New';
import Profile from '../pages/Profile';
import CustomDrawer from '../components/CustomDrawer';

const Drawer = createDrawerNavigator();

const AppRoutes = () => {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawer {...props} />}
      screenOptions={{
        headerShown: false,
        drawerStyle: {
          backgroundColor: '#fff',
          paddingTop: 20,
        },
        drawerActiveBackgroundColor: '#3B3DBF',
        drawerActiveTintColor: '#FFF',
        drawerInactiveBackgroundColor: '#F0F2FF',
        drawerInactiveTintColor: '#121212',
      }}>
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Registrar" component={New} />
      <Drawer.Screen name='Perfil' component={Profile} />
    </Drawer.Navigator>
  );
};

export default AppRoutes;
