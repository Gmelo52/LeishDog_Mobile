import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
    width: 90%;
    height: 100%;
    justify-content: flex-start;
    align-items: center;
    align-self: center;
    padding-top: 7%;
`;

export const Title = styled.Text`
    color: #3d348b;
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 5px;
`;
export const SubTitle = styled.Text`
    color: #3d348b;
    font-size: 12px;
    margin-bottom: 15px;
`;
export const FormBox = styled.KeyboardAvoidingView`
    width: 100%;
    height: 78%;
    padding-bottom: 2%;
`;
export const BtnBox = styled.View`
    width: 100%;
    flex: 1;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const BtnCancelar = styled.TouchableOpacity`
    width: 48%;
    height: 95%;
    background-color: red;
    border-radius: 10px;
    padding-right: 30px;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    box-shadow: 10px 5px 5px rgba(0, 0, 0, 0.3);
    margin-right: 10px;
`;
export const BtnVoltar = styled.TouchableOpacity`
    width: 48%;
    height: 95%;
    background-color: #979DAC;
    border-radius: 10px;
    padding-right: 30px;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    box-shadow: 10px 5px 5px rgba(0, 0, 0, 0.3);
    margin-right: 10px;
`;
export const BtnContinuar = styled.TouchableOpacity`
    width: 48%;
    height: 95%;
    background-color: #3d348b;
    border-radius: 10px;
    padding-left: 30px;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    box-shadow: 10px 5px 5px rgba(0, 0, 0, 0.3);
`;
export const BtnProximo = styled.TouchableOpacity`
    width: 100%;
    height: 95%;
    background-color: #3d348b;
    border-radius: 10px;
    padding-left: 30px;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    box-shadow: 10px 5px 5px rgba(0, 0, 0, 0.3);
`;
export const BtnExcel = styled.TouchableOpacity`
    width: 100%;
    height: 95%;
    background-color: green;
    border-radius: 10px;
    padding-left: 30px;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    box-shadow: 10px 5px 5px rgba(0, 0, 0, 0.3);
`;

export const TextBtn = styled.Text`
    color: #FFF;
    font-weight: bold;
    font-size: 18px;
`;