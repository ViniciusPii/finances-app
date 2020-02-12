import React, {useState} from 'react';
import {Platform} from 'react-native';
import firebase from '../../services/firebaseConnection';
import {
  Background,
  Container,
  AreaInput,
  Input,
  SubmitButton,
  SubmitText,
  SignUpText,
  SignInButton,
  SignInText,
} from './styles';

export default function SignUp({navigation}) {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  firebase.auth().signOut();

  async function handleSubmit() {
    if (name !== '' && email !== '' && password !== '') {
      await firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then(async () => {
          let uid = firebase.auth().currentUser.uid;
          await firebase
            .database()
            .ref('users')
            .child(uid)
            .set({
              saldo: 0,
            });
        })
        .catch(error => {
          alert(error.code);
        });
    }
  }

  return (
    <Background>
      <Container behavior={Platform.OS === 'ios' ? 'padding' : ''} enabled>
        <SignUpText>Quase tudo pronto ;)</SignUpText>
        <AreaInput>
          <Input
            placeholder="Nome"
            autoCorrect={false}
            autoCapitalize="none"
            value={name}
            onChangeText={text => setName(text)}
          />
        </AreaInput>

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

        <SubmitButton onPress={handleSubmit}>
          <SubmitText>Cadastrar</SubmitText>
        </SubmitButton>

        <SignInButton onPress={() => navigation.navigate('SignIn')}>
          <SignInText>Já tenho uma conta</SignInText>
        </SignInButton>
      </Container>
    </Background>
  );
}
