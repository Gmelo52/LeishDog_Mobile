import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  height: 100%;
  justify-content: flex-start;
  align-items: baseline;
`;

export const Label = styled.Text`
  color: #3d348b;
  font-size: 12px;
  margin-bottom: 15px;
`;

export const Input = styled.TextInput`
  width: 100%;
  height: 10%;
  border-width: 1px;
  border-radius: 10px;
  padding-left: 10px;
  margin-bottom: 15px;
`;
export const CheckboxView = styled.View`
  width: 100%;
  height: 10%;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  border-radius: 10px;
  padding-right: 15px;
  margin-bottom: 15px;
`;
export const CheckboxItem = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const LabelCheckbox = styled.Text`
  color: #3d348b;
  font-size: 12px;
`;
