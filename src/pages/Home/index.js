import React, {useEffect, useState} from 'react';
import Header from '../../components/Header';
import {Area, Background, List, ListBalance, Title} from './style';
import api from '../../services/api';
import {format} from 'date-fns';
import {useIsFocused} from '@react-navigation/native';
import BalanceItem from '../../components/BalanceItem';
import {Modal, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import HistoricList from '../../components/HistoricList';
import CalendarModal from '../../components/Calendar';

const Home = () => {
  const [listBalance, setListBalance] = useState([]);
  const [movements, setMovements] = useState([]);
  const [dateMoviments, setDateMoviments] = useState(new Date());
  const [modalVisible, setModalVisible] = useState(false);
  const isFocused = useIsFocused();

  useEffect(() => {
    let isActive = true;

    const getMovements = async () => {
      let date = new Date(dateMoviments);
      let onlyDate = date.valueOf() + date.getTimezoneOffset() * 60 * 1000;
      let dateFormated = format(onlyDate, 'dd/MM/yyyy');

      const receives = await api.get('/receives', {
        params: {
          date: dateFormated,
        },
      });

      const balance = await api.get('/balance', {
        params: {
          date: dateFormated,
        },
      });

      {
        console.log(balance.data);
      }

      if (isActive) {
        setMovements(receives.data);
        setListBalance(balance.data);
      }
    };
    getMovements();
    return () => (isActive = false);
  }, [isFocused, dateMoviments]);

  const handleDeleteItem = async id => {
    try {
      await api.delete('/receives/delete', {
        params: {
          item_id: id,
        },
      });
      setDateMoviments(new Date());
    } catch (error) {
      console.log(error);
    }
  };

  const filterDateMoviments = dateSelected => {
    setDateMoviments(dateSelected);
  };
  return (
    <Background>
      <Header title={'Movimentaçoes'} />
      <ListBalance
        data={listBalance}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        keyExtractor={item => item.tag}
        renderItem={({item}) => <BalanceItem data={item} />}
      />

      <Area>
        <TouchableOpacity onPress={() => setModalVisible(true)}>
          <Icon name="calendar" color="#121212" size={30} />
        </TouchableOpacity>
        <Title>Últimas movimentações</Title>
      </Area>
      <List
        data={movements}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: 20}}
        renderItem={({item}) => (
          <HistoricList data={item} deleteItem={handleDeleteItem} />
        )}
      />
      <Modal visible={modalVisible} animationType="fade" transparent={true}>
        <CalendarModal
          setVisible={() => setModalVisible(false)}
          handleFilter={filterDateMoviments}
        />
      </Modal>
    </Background>
  );
};

export default Home;
