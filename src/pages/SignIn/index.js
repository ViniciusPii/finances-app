import React, {useState} from 'react';
import {Text, View} from 'react-native';
import {
  Background,
  Container,
  Logo,
  AreaInput,
  Input,
  SubmitButton,
  SubmitText,
  SignUpLink,
  SignUpText,
} from './styles';

export default function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <Background>
      <Container>
        <Logo source={require('../../assets/logo.png')} />

        <AreaInput>
          <Input
            placeholder="Email"
            autoCorrect={false}
            autoCapitalize="none"
            value={email}
            onChangeText={text => setEmail(text)}
          />
        </AreaInput>

        <AreaInput>
          <Input
            placeholder="Senha"
            autoCorrect={false}
            autoCapitalize="none"
            secureTextEntry={true}
            value={password}
            onChangeText={text => setPassword(text)}
          />
        </AreaInput>

        <SubmitButton onPress={() => {}}>
          <SubmitText>Acessar</SubmitText>
        </SubmitButton>

        <SignUpLink onPress={() => {}}>
          <SignUpText>Criar conta gratuita</SignUpText>
        </SignUpLink>
      </Container>
    </Background>
  );
}
