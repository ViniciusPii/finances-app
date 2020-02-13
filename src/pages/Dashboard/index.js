import React from 'react';
import firebase from '../../services/firebaseConnection';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {SafeAreaView, Text, TouchableOpacity} from 'react-native';

export default function Dashboard({navigation}) {
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

Dashboard.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({tintColor}) => <Icon name="home" size={24} color={tintColor} />,
};
