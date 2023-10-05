import {View, Text, Image} from 'react-native';
import React, { useContext } from 'react';
import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from '@react-navigation/drawer';
import { AuthContext } from '../../contexts/auth';

const CustomDrawer = props => {
    const {user, signOut} = useContext(AuthContext)
  return (
    <DrawerContentScrollView {...props}>
      <View
        style={{alignItems: 'center', justifyContent: 'center', marginTop: 25}}>
        <Image
          source={require('../../images/Logo.png')}
          style={{width: 90, height: 90}}
          resizeMode="contain"
        />
        <Text style={{fontSize: 18, marginTop: 14, color: '#000'}}>
          Bem-vindo
        </Text>
        <Text
          style={{
            fontSize: 19,
            fontWeight: 'bold',
            marginBottom: 14,
            paddingHorizontal: 20,
            color: '#000'
          }}
          numberOfLines={1}
          >
          {user.name}
        </Text>
      </View>
      <DrawerItemList {...props} />
      <DrawerItem {...props} 
       label='Sair do app'
       onPress={() => signOut()}
      />
    </DrawerContentScrollView>
  );
};

export default CustomDrawer;
