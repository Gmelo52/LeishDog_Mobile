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

export default function Form3() {
  const [checked, setChecked] = useState(false);
  const [checked2, setChecked2] = useState(false);

  const [checked3, setChecked3] = useState(false);
  const [checked4, setChecked4] = useState(false);
  const [checked5, setChecked5] = useState(false);

  const [checked6, setChecked6] = useState(false);
  const [checked7, setChecked7] = useState(false);
  const [checked8, setChecked8] = useState(false);

  const [checked9, setChecked9] = useState(false);
  const [checked10, setChecked10] = useState(false);
  const [checked11, setChecked11] = useState(false);

  const [checked12, setChecked12] = useState(false);
  const [checked13, setChecked13] = useState(false);
  const [checked14, setChecked14] = useState(false);

  return (
    <Container>
      <Scroll showsVerticalScrollIndicator={false}>
        <Label>Tipo de caso:</Label>
        <CheckboxView>
          <CheckboxItem>
            <CheckBox
              checkedColor="#3d348b"
              checked={checked}
              onPress={() => {
                setChecked(!checked);
              }}
            />
            <LabelCheckbox>Suspeito</LabelCheckbox>
          </CheckboxItem>
          <CheckboxItem>
            <CheckBox
              checkedColor="#3d348b"
              checked={checked2}
              onPress={() => {
                setChecked2(!checked2);
              }}
            />
            <LabelCheckbox>Confirmado</LabelCheckbox>
          </CheckboxItem>
        </CheckboxView>
        <Label>Data dos primeiros sintomas:</Label>
        <Input />
        <Label>Realizado diagnóstico laboratorial específico?</Label>
        <CheckboxView>
          <CheckboxItem>
            <CheckBox
              checkedColor="#3d348b"
              checked={checked3}
              onPress={() => {
                setChecked3(!checked3);
              }}
            />
            <LabelCheckbox>Sim</LabelCheckbox>
          </CheckboxItem>
          <CheckboxItem>
            <CheckBox
              checkedColor="#3d348b"
              checked={checked4}
              onPress={() => {
                setChecked4(!checked4);
              }}
            />
            <LabelCheckbox>Não</LabelCheckbox>
          </CheckboxItem>
          <CheckboxItem>
            <CheckBox
              checkedColor="#3d348b"
              checked={checked5}
              onPress={() => {
                setChecked5(!checked5);
              }}
            />
            <LabelCheckbox>Não sabe</LabelCheckbox>
          </CheckboxItem>
        </CheckboxView>
        <Label>Se sim, qual o exame para diagnóstico?</Label>
        <Input />
        <Label>O animal está em tratamento?</Label>
        <CheckboxView>
          <CheckboxItem>
            <CheckBox
              checkedColor="#3d348b"
              checked={checked6}
              onPress={() => {
                setChecked6(!checked6);
              }}
            />
            <LabelCheckbox>Sim</LabelCheckbox>
          </CheckboxItem>
          <CheckboxItem>
            <CheckBox
              checkedColor="#3d348b"
              checked={checked7}
              onPress={() => {
                setChecked7(!checked7);
              }}
            />
            <LabelCheckbox>Não</LabelCheckbox>
          </CheckboxItem>
          <CheckboxItem>
            <CheckBox
              checkedColor="#3d348b"
              checked={checked8}
              onPress={() => {
                setChecked8(!checked8);
              }}
            />
            <LabelCheckbox>Não sabe</LabelCheckbox>
          </CheckboxItem>
        </CheckboxView>
        <Label>Se sim, qual a medicação utilizada?</Label>
        <Input />
        <Label>O animal foi a óbito?</Label>
        <CheckboxView>
          <CheckboxItem>
            <CheckBox
              checkedColor="#3d348b"
              checked={checked9}
              onPress={() => {
                setChecked9(!checked9);
              }}
            />
            <LabelCheckbox>Sim</LabelCheckbox>
          </CheckboxItem>
          <CheckboxItem>
            <CheckBox
              checkedColor="#3d348b"
              checked={checked10}
              onPress={() => {
                setChecked10(!checked10);
              }}
            />
            <LabelCheckbox>Não</LabelCheckbox>
          </CheckboxItem>
          <CheckboxItem>
            <CheckBox
              checkedColor="#3d348b"
              checked={checked11}
              onPress={() => {
                setChecked11(!checked11);
              }}
            />
            <LabelCheckbox>Não sabe</LabelCheckbox>
          </CheckboxItem>
        </CheckboxView>
        <Label>Já houve no local da residência do animal alguma ação da secretaria municipal de saúde?</Label>
        <CheckboxView>
          <CheckboxItem>
            <CheckBox
              checkedColor="#3d348b"
              checked={checked12}
              onPress={() => {
                setChecked12(!checked12);
              }}
            />
            <LabelCheckbox>Sim</LabelCheckbox>
          </CheckboxItem>
          <CheckboxItem>
            <CheckBox
              checkedColor="#3d348b"
              checked={checked13}
              onPress={() => {
                setChecked13(!checked13);
              }}
            />
            <LabelCheckbox>Não</LabelCheckbox>
          </CheckboxItem>
          <CheckboxItem>
            <CheckBox
              checkedColor="#3d348b"
              checked={checked14}
              onPress={() => {
                setChecked14(!checked14);
              }}
            />
            <LabelCheckbox>Não sabe</LabelCheckbox>
          </CheckboxItem>
        </CheckboxView>
        <Label>Se sim, informe sobre a ação realizada:</Label>
        <Input />
      </Scroll>
    </Container>
  );
}
