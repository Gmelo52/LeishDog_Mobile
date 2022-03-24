import React from "react";
import "./styles";
import { Container, Img, Text } from "./styles";

export default function HomeContent() {
  return (
    <Container>
      <Img source={require("../../assets/images/logo.png")} />
      <Text>
      Leishdog é um aplicativo de uso profissional para notificação da Leishmaniose Visceral Canina que segue, mas não substitui a Portaria Ministerial/MS nº 204/16 e a Instrução Normativa do MAPA nº 50/2013.
      </Text>
    </Container>
  );
}
