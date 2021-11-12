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
        <Label>Se estiver disponível, informe abaixo: histórico clínico do animal, tipo de ambiente que 
          o animal vive (Casa, apartamento, animal comunitário, animal errante, ambiente rural, entre outros)
          histórico de deslocamento para outros locais e/ou outras informações relevantes. {"\n"}{"\n"}Digite aqui as informações
          complementares:

        </Label>
        <Input />
      </Scroll>
    </Container>
  );
}
