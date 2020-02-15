import React from 'react';
import {Container, TipoText, ValorText} from './styles';

export default function HistoricoList({data}) {
  return (
    <Container>
      <TipoText type={data.type}>{data.type}</TipoText>
      <ValorText>R$ {data.balance}</ValorText>
    </Container>
  );
}
