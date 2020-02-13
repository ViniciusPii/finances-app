import React, {useEffect} from 'react';
import firebase from '../../services/firebaseConnection';
import {View} from 'react-native';

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

  return <View />;
}
