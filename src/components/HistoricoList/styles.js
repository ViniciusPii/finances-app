import styled from 'styled-components/native';

export const Container = styled.View`
  background-color: #fff;
  margin-bottom: 12px;
  padding: 7px;
  border-radius: 7px;
  z-index: 3;
  box-shadow: 2px 2px rgba(0, 0, 0, 0.4);
`;

export const TipoText = styled.Text`
  color: ${props => (props.type === 'despesas' ? '#ef473a' : '#049301')};
  font-size: 15px;
  text-transform: capitalize;
`;

export const ValorText = styled.Text`
  color: #222;
  font-size: 20px;
  font-weight: bold;
`;
