import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
  width: 100%;
  height: 100%;
  justify-content: flex-start;
  align-items: baseline;
`;
export const Scroll = styled.ScrollView`
  width: 100%;
  height: 100%;
`;

export const Label = styled.Text`
  color: #3d348b;
  font-size: 12px;
  margin-bottom: 15px;
`;

export const Input = styled.TextInput`
  width: 100%;
  height: 40px;
  border-width: 1px;
  border-radius: 10px;
  padding-left: 10px;
  margin-bottom: 15px;
`;
export const CheckboxView = styled.View`
  width: 100%;
  height: auto;
  align-items: baseline;
  justify-content: space-between;
  border-radius: 10px;
  padding-right: 15px;
  margin-bottom: 15px;
  background-color: rgba(61,52,139,0.1);
`;
export const CheckboxItem = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const LabelCheckbox = styled.Text`
  color: #3d348b;
  font-size: 12px;
`;
