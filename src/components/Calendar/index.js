import { View, Text, TouchableWithoutFeedback } from 'react-native'
import React, { useState } from 'react'
import { BtnFilterText, Container, ModalContent,  BtnFilter } from './styles'
import {Calendar, LocaleConfig} from 'react-native-calendars';
import ptBR from './localeCalendar';


LocaleConfig.locales['pt-BR'] = ptBR
LocaleConfig.defaultLocale = 'pt-BR'

const CalendarModal = ({setVisible, handleFilter}) => {
    const [dateNow, setDateNow] = useState(new Date())
    const [markedDates, setMarkedDates] = useState({})

    const handleOnDayPress = (date) => {
        setDateNow(new Date(date.dateString))

        let markedDay = {}
        markedDay[date.dateString] = {
            selected: true,
            selectedColor: '#3b3dbf',
            textColor: '#fff'
        }

        setMarkedDates(markedDay)
    }

    const handleFilterDate = () => {
        handleFilter(dateNow)
        setVisible()
    }
  return (
    <Container>
      <TouchableWithoutFeedback onPress={setVisible}>
        <View style={{flex: 1}}></View>
      </TouchableWithoutFeedback>

      <ModalContent>

        <Calendar 
         onDayPress={handleOnDayPress}
         markedDates={markedDates}
         enableSwipeMonths={true}
         theme={{
            todayTextColor:'#ff0000',
            selectedDayBackgroundColor: '#00adf5',
            selectedDayTextColor: '#FFF'
         }}
        />

        <BtnFilter onPress={handleFilterDate}>
             <BtnFilterText>
               Filtrar
             </BtnFilterText>
        </BtnFilter>
       
      </ModalContent>
    </Container>
  )
}

export default CalendarModal