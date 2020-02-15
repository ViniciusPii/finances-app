import React, {useState} from 'react';
import firebase from '../../services/firebaseConnection';
import Icon from 'react-native-vector-icons/MaterialIcons';
import HistoricoList from '../../components/HistoricoList';
import {
  Background,
  Container,
  AreaSaldo,
  SaldoTitle,
  Saldo,
  Registros,
  Title,
  IconRight,
  List,
} from './styles';

export default function Dashboard({navigation}) {
  const [balance, setBalance] = useState(0);
  const [history, setHistory] = useState([
    {key: 1, balance: 100, type: 'despesas'},
    {key: 2, balance: 1000, type: 'despesas'},
    {key: 3, balance: 1500, type: 'receita'},
  ]);

  return (
    <Background>
      <Container>
        <AreaSaldo>
          <SaldoTitle>Saldo Atual</SaldoTitle>
          <Saldo>R$ 123,00</Saldo>
        </AreaSaldo>

        <Registros>
          <Title>Registros do Dia</Title>
          <IconRight>
            <Icon name="chevron-right" size={30} color="#fff" />
          </IconRight>
        </Registros>

        <List
          keyExtractor={item => item.key}
          data={history}
          renderItem={({item}) => <HistoricoList data={item} />}
        />
      </Container>
    </Background>
  );
}

Dashboard.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({tintColor}) => <Icon name="home" size={24} color={tintColor} />,
};
