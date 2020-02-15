import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';

export const Background = styled(LinearGradient).attrs({
  colors: ['#262630', '#1b2d4e'],
})`
  flex: 1;
`;

export const Container = styled.SafeAreaView`
  flex: 1;
`;

export const AreaSaldo = styled.View`
  align-items: center;
  margin: 30px 0;
`;

export const SaldoTitle = styled.Text`
  color: #fff;
  font-size: 18px;
  font-style: italic;
`;

export const Saldo = styled.Text`
  color: #fff;
  font-size: 28px;
  font-weight: bold;
`;

export const Registros = styled.View`
  flex-direction: row;
  align-items: center;
  margin-left: 15px;
`;

export const Title = styled.Text`
  color: #fff;
  font-size: 20px;
  font-weight: bold;
`;

export const IconRight = styled.TouchableOpacity``;

export const List = styled.FlatList`
  margin-top: 15px;
`;
