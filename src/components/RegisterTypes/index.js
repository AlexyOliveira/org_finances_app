import React, {useState} from 'react';
import {RegisterContainer, RegisterTypeButton, RegisterLabel} from './style';
import Icon from 'react-native-vector-icons/Feather';

const RegisterTypes = ({type, sendTypeChanged}) => {
  const [isTypeCHecked, setIsTypeChecked] = useState(type);
  const changeType = name => {
    if (name === 'receita') {
        setIsTypeChecked('receita')
        sendTypeChanged('receita')
    }else{
        setIsTypeChecked('despesa')
        sendTypeChanged('despesa')
    }
  };
  return (
    <RegisterContainer>
      <RegisterTypeButton
        checked={isTypeCHecked === 'receita' ? true : false}
        onPress={() => changeType('receita')}>
        <Icon name="arrow-up" size={25} color="#121212" />
        <RegisterLabel>Receita</RegisterLabel>
      </RegisterTypeButton>
      <RegisterTypeButton
        checked={isTypeCHecked === 'despesa' ? true : false}
        onPress={() => changeType('despesa')}>
        <Icon name="arrow-down" size={25} color="#121212" />
        <RegisterLabel>Despesa</RegisterLabel>
      </RegisterTypeButton>
    </RegisterContainer>
  );
};

export default RegisterTypes;
