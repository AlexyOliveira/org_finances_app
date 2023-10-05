import Header from '../../components/Header'
import React, { useState } from 'react'
import { Background, Input, SubmitButton, SubmitText } from './styles'
import { Alert, Keyboard, SafeAreaView, TouchableWithoutFeedback } from 'react-native'
import RegisterTypes from '../../components/RegisterTypes'
import api from '../../services/api'
import { format } from 'date-fns'
import { useNavigation } from '@react-navigation/native'

const New = () => {
    const [labelInput, setLabelInput] = useState('')
    const [valueInput, setValueInput] = useState('')
    const [type, setType] = useState('receita')

    const navigation = useNavigation()

    const handleSubmit = () => {
      Keyboard.dismiss()
      if (isNaN(parseFloat(valueInput)) || type === null || labelInput === '') {
        alert('Preencha todos os campos')
        return;
      }

      Alert.alert(
        'Comfirmando dados',
        `Tipo: ${type} - Valor: ${parseFloat(valueInput)}`,
        [
          {
            text: 'cancelar',
            style: 'cancel'
          },
          {
            text: 'Continuar',
            onPress: handleAdd
          }
        ]
      )
    }

    const handleAdd = async () => {
      Keyboard.dismiss()
      await api.post('/receive', {
        description: labelInput,
        value: Number(valueInput),
        type: type,
        date: format(new Date(), 'dd/MM/yyyy')
      })
      setLabelInput('');
      setValueInput('');
      navigation.navigate('Home')
    }
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
         <Background>
      <Header title="Registrando" />
      <SafeAreaView style={{marginTop: 14, alignItems: 'center'}}>
        <Input 
          placeholder='Descrição desse registro'
          value={labelInput}
          onChangeText={(text) => setLabelInput(text)}
        />
        <Input 
          placeholder='Valor desejado'
          keyboardType='numeric'
          value={valueInput}
          onChangeText={(text) => setValueInput(text)}
        />
        <RegisterTypes type={type} sendTypeChanged={(item) => setType(item)} />
        <SubmitButton onPress={handleSubmit}>
            <SubmitText>
                Registrar
            </SubmitText>
        </SubmitButton>
      </SafeAreaView>
    </Background>
    </TouchableWithoutFeedback>
   
  )
}

export default New