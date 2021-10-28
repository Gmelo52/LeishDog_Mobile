import React, { useState } from "react";
import {
  CheckboxItem,
  CheckboxView,
  Container,
  Input,
  Label,
  LabelCheckbox,
  Scroll,
} from "./styles";
import { CheckBox } from "react-native-elements/";

export default function Form4() {
  const [checked, setChecked] = useState(false);
  const [checked2, setChecked2] = useState(false);
  const [checked3, setChecked3] = useState(false);
  return (
    <Container>
      <Scroll showsVerticalScrollIndicator={false}>
     <Label>Dado</Label>
      <Input />
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
      </Scroll>
    </Container>
  );
}
