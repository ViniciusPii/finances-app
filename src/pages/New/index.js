import React, {useState} from 'react';
import {Keyboard, Picker, Alert} from 'react-native';
import firebase from '../../services/firebaseConnection';
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

export default function New({navigation}) {
  const [value, setValue] = useState('');
  const [type, setType] = useState('receita');

  function handleSubmit() {
    Keyboard.dismiss();
    if (isNaN(parseFloat(value))) {
      alert('Preencha corretamente os Campos');
      setValue('');
      return;
    }

    Alert.alert(
      'Confirmar Dados',
      `Tipo ${type} - Valor: ${parseFloat(value)}`,
      [
        {text: 'Cancelar', style: 'cancel'},
        {text: 'Continuar', onPress: () => handleAdd()},
      ],
    );
  }

  async function handleAdd() {
    let uid = firebase.auth().currentUser.uid;

    let key = firebase
      .database()
      .ref('historico')
      .child(uid)
      .push().key;

    await firebase
      .database()
      .ref('historico')
      .child(uid)
      .child(key)
      .set({
        type: type,
        value: parseFloat(value),
        date: new Date().toLocaleDateString(),
      });

    let user = firebase
      .database()
      .ref('users')
      .child(uid);

    await user.once('value').then(snapshot => {
      let balance = parseFloat(snapshot.val().balance);

      type === 'despesas'
        ? (balance -= parseFloat(value))
        : (balance += parseFloat(value));

      user.set({
        balance: balance,
      });
    });

    setValue('');
    Keyboard.dismiss();
    navigation.navigate('Dashboard');
  }

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

        <SubmitButton onPress={handleSubmit}>
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
