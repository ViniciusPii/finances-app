import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {SafeAreaView, Text} from 'react-native';

export default function New() {
  return (
    <SafeAreaView>
      <Text>Pag New</Text>
    </SafeAreaView>
  );
}

New.navigationOptions = {
  tabBarLabel: 'Novo',
  tabBarIcon: ({tintColor}) => (
    <Icon name="add-circle" size={24} color={tintColor} />
  ),
};
