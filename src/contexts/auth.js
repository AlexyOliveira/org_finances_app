import React, {createContext, useEffect, useState} from 'react';
import api from '../services/api';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const AuthContext = createContext({});

const AuthProvider = ({children}) => {
  const [loading, setLoading] = useState(false);
  const [initialLoading, setInitialLoading] = useState(true);
  const [user, setUser] = useState(null);

  const navigation = useNavigation();

  useEffect(() => {
    const loadStorage = async () => {
      const storageUserToken = await AsyncStorage.getItem(
        '@org_finances_token',
      );
      if (storageUserToken) {
        const response = await api
          .get('/me', {
            headers: {Authorization: `Bearer ${storageUserToken}`},
          })
          .catch(() => {
            setUser(null);
          });

        api.defaults.headers['Authorization'] = `Bearer ${storageUserToken}`;
        setUser(response.data);
        setInitialLoading(false);
      }

      setInitialLoading(false);
    };
    loadStorage();
  }, []);

  const signUp = async (name, email, password) => {
    setLoading(true);
    try {
      const response = await api.post('/users', {
        name,
        password,
        email,
      });
      setLoading(false);
      navigation.goBack();
    } catch (error) {
      console.log('Erro ao cadastrar', error);
      setLoading(false);
    }
  };

  const signIn = async (email, password) => {
    setLoading(true);
    try {
      const response = await api.post('/login', {
        email,
        password,
      });
      const {id, name, token} = response.data;
      const data = {
        id,
        name,
        email,
      };

      api.defaults.headers['Authorization'] = `Bearer ${token}`;
      await AsyncStorage.setItem('@org_finances_token', token);

      setUser(data);
      setLoading(false);
    } catch (error) {
      console.log('ERRO AO LOGAR', error);
      setLoading(false);
    }
  };

  const signOut = async () => {
    await AsyncStorage.clear().then(() => {
      setUser(null);
    });
  };

  return (
    <AuthContext.Provider
      value={{
        signed: !!user,
        user,
        signUp,
        signIn,
        signOut,
        loading,
        initialLoading,
      }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
