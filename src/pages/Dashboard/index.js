import React from 'react';
import firebase from '../../services/firebaseConnection';
import {SafeAreaView, Text, TouchableOpacity} from 'react-native';

export default function Dashboard() {
  return (
    <SafeAreaView>
      <Text>Painel</Text>
      <TouchableOpacity
        onPress={() => {
          firebase.auth().signOut();
        }}>
        <Text>Sair</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
