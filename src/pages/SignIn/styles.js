import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';

export const Background = styled(LinearGradient).attrs({
  colors: ['#262630', '#1b2d4e'],
})`
  flex: 1;
`;

export const Container = styled.KeyboardAvoidingView`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Logo = styled.Image`
  margin-bottom: 15px;
`;

export const AreaInput = styled.View`
  flex-direction: row;
`;

export const Input = styled.TextInput`
  background: #fff;
  color: #222;
  font-size: 17px;
  border-radius: 7px;
  width: 90%;
  margin-bottom: 15px;
  padding: 10px;
`;

export const SubmitButton = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  background: #35aaff;
  height: 45px;
  width: 90%;
  border-radius: 7px;
  margin-top: 10px;
`;

export const SubmitText = styled.Text`
  color: #fff;
  font-size: 18px;
`;

export const SignUpLink = styled.TouchableOpacity`
  margin-top: 10px;
`;

export const SignUpText = styled.Text`
  color: #fff;
  font-size: 15px;
  padding-bottom: 13px;
`;
