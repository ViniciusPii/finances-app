import React, {useEffect} from 'react';
import firebase from '../../services/firebaseConnection';
import {ActivityIndicator} from 'react-native';
import {Background, Container} from './styles';

export default function Preload({navigation}) {
  useEffect(() => {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        navigation.navigate('Dashboard');
      } else {
        navigation.navigate({routeName: 'SignIn'});
      }
    });
  }, [navigation]);

  return (
    <Background>
      <Container>
        <ActivityIndicator color="#fff" size={'large'} />
      </Container>
    </Background>
  );
}
