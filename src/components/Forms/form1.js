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

export default function Form1() {
  const [checked, setChecked] = useState(false);
  const [checked2, setChecked2] = useState(false);
  const [checked3, setChecked3] = useState(false);
  const [checked4, setChecked4] = useState(false);
  const [checked5, setChecked5] = useState(false);
  const [checked6, setChecked6] = useState(false);
  const [checked7, setChecked7] = useState(false);
  const [checked8, setChecked8] = useState(false);
  return (
    <Container>
      <Scroll showsVerticalScrollIndicator={false}>
        <Label>Origem da notificação</Label>
        <CheckboxView>
          <CheckboxItem>
            <CheckBox
              checked={checked}
              onPress={() => {
                setChecked(!checked);
              }}
            />
            <LabelCheckbox>Consultório Veterinário</LabelCheckbox>
          </CheckboxItem>
          <CheckboxItem>
            <CheckBox
              checkedColor="#3d348b"
              checked={checked2}
              onPress={() => {
                setChecked2(!checked2);
              }}
            />
            <LabelCheckbox>Clínica Veterinária</LabelCheckbox>
          </CheckboxItem>
          <CheckboxItem>
            <CheckBox
              checkedColor="#3d348b"
              checked={checked3}
              onPress={() => {
                setChecked3(!checked3);
              }}
            />
            <LabelCheckbox>Hospital Veterinário</LabelCheckbox>
          </CheckboxItem>
          <CheckboxItem>
            <CheckBox
              checkedColor="#3d348b"
              checked={checked4}
              onPress={() => {
                setChecked4(!checked4);
              }}
            />
            <LabelCheckbox>Tutor do animal</LabelCheckbox>
          </CheckboxItem>
          <CheckboxItem>
            <CheckBox
              checkedColor="#3d348b"
              checked={checked5}
              onPress={() => {
                setChecked5(!checked5);
              }}
            />
            <LabelCheckbox>Agente público</LabelCheckbox>
          </CheckboxItem>
        </CheckboxView>
        <Label>Outra origem:</Label>
        <Input />
        <Label>CRM-AL:</Label>
        <Input />
        <Label>Matricula Agente:</Label>
        <Input />
        <Label>Nome completo do notificador:</Label>
        <Input />
        <Label>Endereço do notificador:</Label>
        <Input />
        <Label>Email do notificador:</Label>
        <Input />
        <Label>Nome do responsável pelo animal:</Label>
        <Input />
        <Label>Telefone do tutor:</Label>
        <Input />
        <Label>Endereço da residencia do tutor:</Label>
        <Input />
        <Label>Municipio:</Label>
        <Input />
        <Label>Municipio:</Label>
        <Input />
        <Label>Existem pessoa(s) com leishmaniose na residencia?:</Label>
        <CheckboxView>
          <CheckboxItem>
            <CheckBox
              checked={checked6}
              onPress={() => {
                setChecked6(!checked6);
              }}
            />
            <LabelCheckbox>Sim</LabelCheckbox>
          </CheckboxItem>
          <CheckboxItem>
            <CheckBox
              checked={checked7}
              onPress={() => {
                setChecked7(!checked7);
              }}
            />
            <LabelCheckbox>Não</LabelCheckbox>
          </CheckboxItem>
          <CheckboxItem>
            <CheckBox
              checked={checked8}
              onPress={() => {
                setChecked8(!checked8);
              }}
            />
            <LabelCheckbox>Não sabe</LabelCheckbox>
          </CheckboxItem>
        </CheckboxView>
      </Scroll>
    </Container>
  );
}
