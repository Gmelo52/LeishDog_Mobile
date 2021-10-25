import React, { useState } from "react";
import { Icon } from "react-native-elements";
import Form1 from "../Form1";
import {
  BtnBox,
  BtnCancelar,
  BtnContinuar,
  Container,
  FormBox,
  SubTitle,
  TextBtn,
  Title,
} from "./styles";

export default function FormContent() {
    const [form, setForm] = useState(<Form1/>)
  return (
    <Container>
      <Title>Formulário</Title>
      <SubTitle>Preencha o formulário.</SubTitle>
      <FormBox>{form}</FormBox>
      <BtnBox>
        <BtnCancelar>
        <Icon
          name="close"
          type="material-community"
          color="#fff"
          size={30}
        />
          <TextBtn>Cancelar</TextBtn>
        </BtnCancelar>
        <BtnContinuar>
          <TextBtn>Continuar</TextBtn>
          <Icon
          name="chevron-right"
          type="material-community"
          color="#fff"
          size={30}
        />
        </BtnContinuar>
      </BtnBox>
    </Container>
  );
}
