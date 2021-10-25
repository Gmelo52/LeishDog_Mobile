import React, { useState } from "react";
import {
  CheckboxItem,
  CheckboxView,
  Container,
  Input,
  Label,
  LabelCheckbox,
} from "./styles";
import { CheckBox } from "react-native-elements/";
import { ScrollView } from "react-native";

export default function Form1() {
  const [checked, setChecked] = useState(false);
  const [checked2, setChecked2] = useState(false);
  const [checked3, setChecked3] = useState(false);
  return (
    <Container behavior={Platform.OS === "ios" ? "position" : "height"}>
      <Label>Dado</Label>
      <Input />
      <Label>Dado</Label>
      <CheckboxView>
        <CheckboxItem>
          <CheckBox
            checkedColor="#3d348b"
            checked={checked}
            onPress={() => {
              setChecked(!checked);
            }}
          />
          <LabelCheckbox>Opção</LabelCheckbox>
        </CheckboxItem>
        <CheckboxItem>
          <CheckBox
            checkedColor="#3d348b"
            checked={checked2}
            onPress={() => {
              setChecked2(!checked2);
            }}
          />
          <LabelCheckbox>Opção</LabelCheckbox>
        </CheckboxItem>
        <CheckboxItem>
          <CheckBox
            checkedColor="#3d348b"
            checked={checked3}
            onPress={() => {
              setChecked3(!checked3);
            }}
          />
          <LabelCheckbox>Opção</LabelCheckbox>
        </CheckboxItem>
      </CheckboxView>
      <Label>Dado</Label>
      <Input />
      <Label>Dado</Label>
      <Input />
    </Container>
  );
}
