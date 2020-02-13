import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {SafeAreaView, Text} from 'react-native';

export default function Profile() {
  return (
    <SafeAreaView>
      <Text>Pag Profile</Text>
    </SafeAreaView>
  );
}

Profile.navigationOptions = {
  tabBarLabel: 'Perfil',
  tabBarIcon: ({tintColor}) => (
    <Icon name="account-circle" size={24} color={tintColor} />
  ),
};
