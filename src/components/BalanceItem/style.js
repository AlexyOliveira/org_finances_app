import styled from "styled-components/native";

export const Container = styled.View`
 background-color: #${props => props.bg};
 margin-left: 14px;
 margin-right: 14px;
 border-radius: 4px;
 justify-content: center;
 align-items: flex-start;
 width: 300px;
 padding-left: 14px;
`;
export const Lable = styled.Text`
    color: #fff;
    font-size: 19PX;
    font-weight: bold;
`;
export const Balance = styled.Text`
    margin-top: 5px;
    font-size: 30px;
    color: #FFF;
`;