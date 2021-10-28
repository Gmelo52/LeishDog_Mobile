import React from 'react'
import { Icon } from 'react-native-elements/'
import { BoxFinish, Container, Label, TextFinish } from './styles'

export default function Finish() {
  return (
    <Container>
      <BoxFinish>
      <Icon
        name="checkbox-multiple-marked-outline"
        type="material-community"
        color="#3d348b"
        size={150}
      />
      <TextFinish>Formulário Concluído!</TextFinish>
      <Label>Baixe aqui sua planilha.</Label>
      </BoxFinish>
    </Container>
  )
}
