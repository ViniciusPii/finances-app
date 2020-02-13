import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';

export const Background = styled(LinearGradient).attrs({
  colors: ['#262630', '#1b2d4e'],
})`
  flex: 1;
`;

export const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
`;

export const Input = styled.TextInput.attrs({
  placeholderTextColor: '#222',
})`
  height: 50px;
  width: 90%;
  background-color: rgba(255, 255, 255, 0.8);
  margin-top: 30px;
  font-size: 16px;
  border-radius: 7px;
  padding-left: 10px;
`;

export const PickerView = styled.View`
  height: 50px;
  width: 90%;
  background-color: rgba(255, 255, 255, 0.8);
  margin-top: 20px;
  font-size: 16px;
  border-radius: 7px;
`;

export const PickerItem = styled.Picker``;

export const SubmitButton = styled.TouchableOpacity`
  height: 50px;
  width: 90%;
  margin-top: 20px;
  align-items: center;
  justify-content: center;
  border-radius: 7px;
  background-color: #35aaff;
`;

export const SubmitText = styled.Text`
  color: #fff;
  font-size: 20px;
`;
