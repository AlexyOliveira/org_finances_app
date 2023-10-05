import {Platform} from 'react-native';
import React, { useState, useContext } from 'react';
import {
  Background,
  Container,
  Logo,
  InputArea,
  Input,
  SubmitButton,
  SubmitText,
  Link,
  LinkText,
} from './styles';
import { useNavigation } from '@react-navigation/native';
import { AuthContext } from '../../contexts/auth';
import { ActivityIndicator } from 'react-native';

const SignIn = () => {
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const navigation = useNavigation()

  const {signIn, loading} = useContext(AuthContext)

  const handleSignIn = () => {
    signIn(email, password)
  }

  return (
    <Background>
      <Container 
        behavior={Platform.OS === 'ios' ? 'padding' : ''}
        enabled
      >
        <Logo source={require('../../images/Logo.png')} />
        <InputArea>
          <Input 
             value={email}
             onChangeText={text => setEmail(text)}
             placeholder="Seu email"
          />
        </InputArea>
        <InputArea>
          <Input 
              secureTextEntry={true}
              value={password}
              onChangeText={text => setPassword(text)}
              placeholder="Sua senha"
          />
        </InputArea>

        <SubmitButton onPress={handleSignIn} activeOpacity={0.8}>
          <SubmitText>
            {loading ? <ActivityIndicator size={30} color="#FFF" /> : 'Acessar' }
          </SubmitText>
        </SubmitButton>

        <Link onPress={() => navigation.navigate('SignUp')}>
         <LinkText>Criar uma conta!</LinkText>
        </Link>

      </Container>
    </Background>
  );
};

export default SignIn;
