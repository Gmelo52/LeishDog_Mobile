import React from "react";
import "./styles";
import { Container, Img, Text } from "./styles";

export default function HomeContent() {
  return (
    <Container>
      <Img source={require("../../assets/images/logo.png")} />
      <Text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eros
        massa, lacinia quis est vitae, ullamcorper congue purus.
      </Text>
    </Container>
  );
}
