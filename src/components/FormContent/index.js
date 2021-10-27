import React, { useState } from "react";
import { Icon } from "react-native-elements";
import Form1 from "../Form1";
import {
  BtnBox,
  BtnCancelar,
  BtnVoltar,
  BtnContinuar,
  Container,
  FormBox,
  SubTitle,
  TextBtn,
  Title,
} from "./styles";

export default function FormContent() {
  const [form, setForm] = useState(<Form1 />)
  const [count, setCount] = useState(1)
  const [BtnCancel, setBtnCancel] = useState(<BtnCancelar>
    <Icon
      name="close"
      type="material-community"
      color="#fff"
      size={30}
    />
    <TextBtn>Cancelar</TextBtn>
  </BtnCancelar>)
  const [BtnCont, setBtnCont] = useState(<BtnContinuar onPress={() => setCount(2)}>
    <TextBtn>Continuar</TextBtn>
    <Icon
      name="chevron-right"
      type="material-community"
      color="#fff"
      size={30}
    />
  </BtnContinuar>)
  
  function next() {
/*     if (count == 1) {
      setBtnCancel(<BtnVoltar>
        <Icon
          name="chevron-left"
          type="material-community"
          color="#fff"
          size={30}
        />
        <TextBtn>Voltar</TextBtn>
      </BtnVoltar>)
      console.log('Form 2')
    } else if (count == 2) {
      console.log('Form 3')
    } else if (count == 3) {
      setBtnCont(<BtnContinuar onPress={() => setForm()}>
        <TextBtn>Finalizar</TextBtn>
        <Icon
          name="chevron-right"
          type="material-community"
          color="#fff"
          size={30}
        />
      </BtnContinuar>)
      console.log('Form 4')
    }
    setCount(count + 1);
    console.log ('Passou' + count) */
    setCount(2)
    console.log(count)
  }
  return (
    <Container>
      <Title>Formulário</Title>
      <SubTitle>Preencha o formulário.</SubTitle>
      <FormBox behavior=''>{form}</FormBox>
      <BtnBox>
        {BtnCancel}
        {BtnCont}
      </BtnBox>
    </Container>
  );
}
