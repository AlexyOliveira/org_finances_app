import styled from "styled-components/native";

export const Background = styled.SafeAreaView`
flex: 1;
background-color: #f0f4ff;
`;

export const Container = styled.KeyboardAvoidingView`
    flex: 1;
    justify-content: center;
    align-items: center;
`;

export const Logo = styled.Image`
    margin-bottom: 25px;
`;

export const InputArea = styled.View`
    flex-direction: row;
`;

export const Input = styled.TextInput`
    background-color: #fff;
    width: 90%;
    font-size: 17px;
    padding: 10px;
    border-radius: 8px;
    color: #121212;
    margin-bottom: 15px;
`;

export const SubmitButton = styled.TouchableOpacity`
    width: 90%;
    height: 45px;
    border-radius: 4px;
    background-color: #3b3dbf;
    margin-top: 10px;
    align-items: center;
    justify-content: center;
`;

export const SubmitText = styled.Text`
    font-size: 20px;
    color: #fff;
    font-weight: bold;
`;

export const Link = styled.TouchableOpacity`
    margin-top: 10px;
    margin-bottom: 10px;
`;

export const LinkText = styled.Text`
    color: #171717;
`;
export const ListBalance = styled.FlatList`
    max-height: 190px;
`;
export const Area = styled.View`
   margin-top: 20px;
   padding-top: 12px;
   background-color: #fff;
   border-top-left-radius: 15px;
   border-top-right-radius: 15px;
   flex-direction: row;
   padding-left: 14px;
   padding-right: 14px;
   align-items: baseline;
`;
export const Title = styled.Text`
  margin-left: 4px;
  color: #121212;
  margin-bottom: 14px;
  font-weight: bold;
  font-size: 18px;
`;

export const List = styled.FlatList`
    flex: 1;
    background-color: #fff;
`;