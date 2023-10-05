import React, {useContext, useState} from 'react';
import {
  Background,
  Container,
  Input,
  InputArea,
  SubmitButton,
  SubmitText,
} from '../SignIn/styles';
import {AuthContext} from '../../contexts/auth';
import { ActivityIndicator } from 'react-native';

const SignUp = () => {
  const {signUp, loading} = useContext(AuthContext);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = () => {
    if (name === '' || email === '' || password === '') {
       return;
    }
    signUp(name,email, password)
  }
  return (
    <Background>
      <Container behavior={Platform.OS === 'ios' ? 'padding' : ''} enabled>
        <InputArea>
          <Input
            value={name}
            onChangeText={text => setName(text)}
            placeholder="Nome"
          />
        </InputArea>
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

        <SubmitButton onPress={handleSignUp} activeOpacity={0.8}>
          {
            loading ? <ActivityIndicator size={30} color="#FFF" /> : (
              <SubmitText>Cadastrar</SubmitText>
            )
          }
        </SubmitButton>
      </Container>
    </Background>
  );
};

export default SignUp;
