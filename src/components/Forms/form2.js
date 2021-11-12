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

export default function Form2() {
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
  const [checked15, setChecked15] = useState(false);

  const [checked16, setChecked16] = useState(false);
  const [checked17, setChecked17] = useState(false);
  const [checked18, setChecked18] = useState(false);
  const [checked19, setChecked19] = useState(false);
  const [checked20, setChecked20] = useState(false);

  const [checked21, setChecked21] = useState(false);
  const [checked22, setChecked22] = useState(false);
  const [checked23, setChecked23] = useState(false);

  const [checked24, setChecked24] = useState(false);
  const [checked25, setChecked25] = useState(false);
  const [checked26, setChecked26] = useState(false);


  return (
    <Container>
      <Scroll showsVerticalScrollIndicator={false}>
        <Label>Nome do animal:</Label>
        <Input />
        <Label>Bairro do animal:</Label>
        <Input />
        <Label>Espécie:</Label>
        <CheckboxView>
          <CheckboxItem>
            <CheckBox
              checkedColor="#3d348b"
              checked={checked}
              onPress={() => {
                setChecked(!checked);
              }}
            />
            <LabelCheckbox>Cão</LabelCheckbox>
          </CheckboxItem>
          <CheckboxItem>
            <CheckBox
              checkedColor="#3d348b"
              checked={checked2}
              onPress={() => {
                setChecked2(!checked2);
              }}
            />
            <LabelCheckbox>Outros</LabelCheckbox>
          </CheckboxItem>
        </CheckboxView>
        <Label>Sexo:</Label>
        <CheckboxView>
          <CheckboxItem>
            <CheckBox
              checkedColor="#3d348b"
              checked={checked3}
              onPress={() => {
                setChecked3(!checked3);
              }}
            />
            <LabelCheckbox>Macho</LabelCheckbox>
          </CheckboxItem>
          <CheckboxItem>
            <CheckBox
              checkedColor="#3d348b"
              checked={checked4}
              onPress={() => {
                setChecked4(!checked4);
              }}
            />
            <LabelCheckbox>Fêmea</LabelCheckbox>
          </CheckboxItem>
        </CheckboxView>
        <Label>Idade do animal:</Label>
        <CheckboxView>
          <CheckboxItem>
            <CheckBox
              checkedColor="#3d348b"
              checked={checked5}
              onPress={() => {
                setChecked5(!checked5);
              }}
            />
            <LabelCheckbox>Menor que 3 meses</LabelCheckbox>
          </CheckboxItem>
          <CheckboxItem>
            <CheckBox
              checkedColor="#3d348b"
              checked={checked6}
              onPress={() => {
                setChecked6(!checked6);
              }}
            />
            <LabelCheckbox>3 meses a 1 ano</LabelCheckbox>
          </CheckboxItem>
          <CheckboxItem>
            <CheckBox
              checkedColor="#3d348b"
              checked={checked7}
              onPress={() => {
                setChecked7(!checked7);
              }}
            />
            <LabelCheckbox>2 a 5 anos</LabelCheckbox>
          </CheckboxItem>
          <CheckboxItem>
            <CheckBox
              checkedColor="#3d348b"
              checked={checked8}
              onPress={() => {
                setChecked8(!checked8);
              }}
            />
            <LabelCheckbox>6 a 10 anos</LabelCheckbox>
          </CheckboxItem>
          <CheckboxItem>
            <CheckBox
              checkedColor="#3d348b"
              checked={checked9}
              onPress={() => {
                setChecked9(!checked9);
              }}
            />
            <LabelCheckbox>Maior que 11 anos</LabelCheckbox>
          </CheckboxItem>
          <CheckboxItem>
            <CheckBox
              checkedColor="#3d348b"
              checked={checked10}
              onPress={() => {
                setChecked10(!checked10);
              }}
            />
            <LabelCheckbox>Não sabe (filhote)</LabelCheckbox>
          </CheckboxItem>
          <CheckboxItem>
            <CheckBox
              checkedColor="#3d348b"
              checked={checked11}
              onPress={() => {
                setChecked11(!checked11);
              }}
            />
            <LabelCheckbox>Não sabe (adulto)</LabelCheckbox>
          </CheckboxItem>
        </CheckboxView>
        <Label>Procedencia do animal:</Label>
        <CheckboxView>
          <CheckboxItem>
            <CheckBox
              checkedColor="#3d348b"
              checked={checked12}
              onPress={() => {
                setChecked12(!checked12);
              }}
            />
            <LabelCheckbox>Domiciliado</LabelCheckbox>
          </CheckboxItem>
          <CheckboxItem>
            <CheckBox
              checkedColor="#3d348b"
              checked={checked13}
              onPress={() => {
                setChecked13(!checked13);
              }}
            />
            <LabelCheckbox>Comunitário</LabelCheckbox>
          </CheckboxItem>
          <CheckboxItem>
            <CheckBox
              checkedColor="#3d348b"
              checked={checked14}
              onPress={() => {
                setChecked14(!checked14);
              }}
            />
            <LabelCheckbox>Errante</LabelCheckbox>
          </CheckboxItem>
          <CheckboxItem>
            <CheckBox
              checkedColor="#3d348b"
              checked={checked15}
              onPress={() => {
                setChecked15(!checked15);
              }}
            />
            <LabelCheckbox>Não sabe</LabelCheckbox>
          </CheckboxItem>
        </CheckboxView>
        <Label>Ambiente do animal:</Label>
        <CheckboxView>
          <CheckboxItem>
            <CheckBox
              checkedColor="#3d348b"
              checked={checked16}
              onPress={() => {
                setChecked16(!checked16);
              }}
            />
            <LabelCheckbox>Unidade unifamiliar</LabelCheckbox>
          </CheckboxItem>
          <CheckboxItem>
            <CheckBox
              checkedColor="#3d348b"
              checked={checked17}
              onPress={() => {
                setChecked17(!checked17);
              }}
            />
            <LabelCheckbox>Logradouro público</LabelCheckbox>
          </CheckboxItem>
          <CheckboxItem>
            <CheckBox
              checkedColor="#3d348b"
              checked={checked18}
              onPress={() => {
                setChecked18(!checked18);
              }}
            />
            <LabelCheckbox>Instituição pública ou privada</LabelCheckbox>
          </CheckboxItem>
          <CheckboxItem>
            <CheckBox
              checkedColor="#3d348b"
              checked={checked19}
              onPress={() => {
                setChecked19(!checked19);
              }}
            />
            <LabelCheckbox>Abrigo animal</LabelCheckbox>
          </CheckboxItem>
          <CheckboxItem>
            <CheckBox
              checkedColor="#3d348b"
              checked={checked20}
              onPress={() => {
                setChecked20(!checked20);
              }}
            />
            <LabelCheckbox>Estabelecimento comercial</LabelCheckbox>
          </CheckboxItem>
        </CheckboxView>
        <Label>O animal é cadastrado?</Label>
        <CheckboxView>
          <CheckboxItem>
            <CheckBox
              checkedColor="#3d348b"
              checked={checked20}
              onPress={() => {
                setChecked20(!checked20);
              }}
            />
            <LabelCheckbox>Sim</LabelCheckbox>
          </CheckboxItem>
          <CheckboxItem>
            <CheckBox
              checkedColor="#3d348b"
              checked={checked21}
              onPress={() => {
                setChecked21(!checked21);
              }}
            />
            <LabelCheckbox>Não</LabelCheckbox>
          </CheckboxItem>
          <CheckboxItem>
            <CheckBox
              checkedColor="#3d348b"
              checked={checked22}
              onPress={() => {
                setChecked22(!checked22);
              }}
            />
            <LabelCheckbox>Não sabe</LabelCheckbox>
          </CheckboxItem>
        </CheckboxView>
        <Label>O animal tem acesso a rua?</Label>
        <CheckboxView>
          <CheckboxItem>
            <CheckBox
              checkedColor="#3d348b"
              checked={checked23}
              onPress={() => {
                setChecked23(!checked23);
              }}
            />
            <LabelCheckbox>Sim</LabelCheckbox>
          </CheckboxItem>
          <CheckboxItem>
            <CheckBox
              checkedColor="#3d348b"
              checked={checked24}
              onPress={() => {
                setChecked24(!checked24);
              }}
            />
            <LabelCheckbox>Não</LabelCheckbox>
          </CheckboxItem>
        </CheckboxView>
        <Label>Contato com animal suspeito de Leishmaniose?</Label>
        <CheckboxView>
          <CheckboxItem>
            <CheckBox
              checkedColor="#3d348b"
              checked={checked24}
              onPress={() => {
                setChecked24(!checked24);
              }}
            />
            <LabelCheckbox>Sim</LabelCheckbox>
          </CheckboxItem>
          <CheckboxItem>
            <CheckBox
              checkedColor="#3d348b"
              checked={checked25}
              onPress={() => {
                setChecked25(!checked25);
              }}
            />
            <LabelCheckbox>Não</LabelCheckbox>
          </CheckboxItem>
          <CheckboxItem>
            <CheckBox
              checkedColor="#3d348b"
              checked={checked26}
              onPress={() => {
                setChecked26(!checked26);
              }}
            />
            <LabelCheckbox>Não sabe</LabelCheckbox>
          </CheckboxItem>
        </CheckboxView>
      </Scroll>
    </Container>
  );
}
