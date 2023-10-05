import Icon from 'react-native-vector-icons/Feather'
import React from 'react'
import { Container, TipoText, Tipo, IconView, ValueText } from './style'
import { Alert, TouchableWithoutFeedback } from 'react-native'

const HistoricList = ({data, deleteItem}) => {
  const handleDeleteItem = () => {
    Alert.alert(
      'Atenção',
      'Você tem certeza que deseja deletar esse registro?',
      [
        {
          text: 'Cancelar',
          style: 'cancel',
        },
        {
          text: 'Continuar',
          onPress: () => deleteItem(data.id)
        }
      ]
    )
  }
  return (
    <TouchableWithoutFeedback onPress={() => Alert.alert(data.description)} onLongPress={handleDeleteItem}>
      <Container>
        <Tipo>
            <IconView type={data.type}>
              <Icon name={
                data.type === 'despesa' ? 'arrow-down' : 'arrow-up'
              } size={20} color="#FFF" />
              <TipoText>{data.type}</TipoText>
            </IconView>
        </Tipo>
        <ValueText>
            R$ {data.value}
        </ValueText>
    </Container>
    </TouchableWithoutFeedback>
    
  )
}

export default HistoricList