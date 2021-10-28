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

export const BtnDownload = styled.TouchableOpacity`
    width: 100%;
    height: 10%;
    background-color: #3d348b;
    border-radius: 10px;
    padding-left: 30px;
    padding-right: 30px;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    box-shadow: 10px 5px 5px rgba(0, 0, 0, 0.3);
    margin-bottom: 15px;
`;

export const TextBtn = styled.Text`
    color: #FFF;
    font-weight: bold;
    font-size: 16px;
`;