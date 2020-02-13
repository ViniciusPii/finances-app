import React, {useState} from 'react';
import {Keyboard, Picker} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {
  Background,
  Container,
  Input,
  PickerItem,
  SubmitButton,
  SubmitText,
  PickerView,
} from './styles';

export default function New() {
  const [value, setValue] = useState('');
  const [type, setType] = useState('receita');

  return (
    <Background>
      <Container>
        <Input
          placeholder="Valor desejado"
          keyboardType="numeric"
          value={value}
          onChangeText={text => setValue(text)}
          returnKeyType="next"
          onSubmitEditing={() => Keyboard.dismiss()}
        />

        <PickerView>
          <PickerItem
            selectedValue={type}
            onValueChange={(itemValue, itemIndex) => setType(itemValue)}>
            <Picker.Item label="Receitas" value="receita" />
            <Picker.Item label="Despesas" value="despesas" />
          </PickerItem>
        </PickerView>

        <SubmitButton onPress={() => {}}>
          <SubmitText>Registrar</SubmitText>
        </SubmitButton>
      </Container>
    </Background>
  );
}

New.navigationOptions = {
  tabBarLabel: 'Novo',
  tabBarIcon: ({tintColor}) => (
    <Icon name="add-circle" size={24} color={tintColor} />
  ),
};
