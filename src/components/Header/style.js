import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  margin-top: 30px;
  margin-left: 15px;
  margin-bottom: 15px;
  writing-mode: 100%;
  max-height: 60px;
  align-self: flex-start;
`;

export const Title = styled.Text`
  font-size: 22px;
  margin-left: 8px;
  color: #000;
`;

export const ButtonMenu = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
`;