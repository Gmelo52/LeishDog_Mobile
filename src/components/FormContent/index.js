import React, { useState } from "react";
import { Icon } from "react-native-elements";
import Finish from "../Forms/finish";
import Form1 from "../Forms/form1";
import Form2 from "../Forms/form2";
import Form3 from "../Forms/form3";
import Form4 from "../Forms/form4";
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
  BtnProximo,
  BtnExcel,
} from "./styles";

export default function FormContent() {
  const [form, setForm] = useState(<Form1 />)
  const [count, setCount] = useState(1)

  function next() {
    let c = count + 1
    if (c <= 2) {
      setForm(<Form2 />)
    } else if (c == 3) {
      setForm(<Form3 />)
    } else if (c == 4) {
      setForm(<Form4 />)
    }else if (c == 5) {
      setForm(<Finish/>)
    } setCount(c);
  }

  function back() {
    let c = count - 1
    if (c == 1) {
      setForm(<Form1 />)
    } else if (c == 2) {
      setForm(<Form2 />)
    } else if (c == 3) {
      setForm(<Form3 />)
    }else if (c >= 4) {
      setForm(<Form4 />)
    } setCount(c);
  }

  return (
    <Container>
      <Title>Formulário</Title>
      <SubTitle>Preencha o formulário.</SubTitle>
      <FormBox behavior={Platform.OS === "ios" ? "position" : null} keyboardVerticalOffset={Platform.OS === 'ios' ? 40 : 0}>{form}</FormBox>
      <BtnBox>
        {count == 1 ?
          <BtnProximo onPress={() => next()}>
            <TextBtn>Continuar</TextBtn>
            <Icon
              name="chevron-right"
              type="material-community"
              color="#fff"
              size={30}
            />
          </BtnProximo>
          : <>
            {
              count > 1 && count < 5 ? <><BtnVoltar onPress={() => back()}>
                <Icon
                  name="chevron-left"
                  type="material-community"
                  color="#fff"
                  size={30}
                />
                <TextBtn>Voltar</TextBtn>
              </BtnVoltar>
                <BtnContinuar onPress={() => next()}>
                  <TextBtn>Continuar</TextBtn>
                  <Icon
                    name="chevron-right"
                    type="material-community"
                    color="#fff"
                    size={30}
                  />
                </BtnContinuar></> :
                <BtnExcel onPress={() => {}}>
                  <TextBtn>Download Excel  </TextBtn>
                  <Icon
                    name="microsoft-excel"
                    type="material-community"
                    color="#fff"
                    size={30}
                  />
                </BtnExcel>
            }
          </>}
      </BtnBox>
    </Container>
  );
}
