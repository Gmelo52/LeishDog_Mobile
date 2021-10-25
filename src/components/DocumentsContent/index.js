import React from "react";
import { View, Text } from "react-native";
import { BtnDownload, Container, SubTitle, TextBtn, Title } from "./styles";
import { Icon } from "react-native-elements";

export default function DocumentsContent() {
  return (
    <Container>
        <Title>Documentos</Title>
        <SubTitle>Baixe aqui os informativos sobre leishmaniose.</SubTitle>
      <BtnDownload onPress={()=>{/* DownloadPdf */}}>
        <TextBtn>Download 1</TextBtn>
        <Icon
          name="file-download-outline"
          type="material-community"
          color="#fff"
          size={30}
        />
      </BtnDownload>
      <BtnDownload onPress={()=>{/* DownloadPdf */}}>
        <TextBtn>Download 2</TextBtn>
        <Icon
          name="file-download-outline"
          type="material-community"
          color="#fff"
          size={30}
        />
      </BtnDownload>
      <BtnDownload onPress={()=>{/* DownloadPdf */}}>
        <TextBtn>Download 3</TextBtn>
        <Icon
          name="file-download-outline"
          type="material-community"
          color="#fff"
          size={30}
        />
      </BtnDownload>
      <BtnDownload onPress={()=>{/* DownloadPdf */}}>
        <TextBtn>Download 4</TextBtn>
        <Icon
          name="file-download-outline"
          type="material-community"
          color="#fff"
          size={30}
        />
      </BtnDownload>
      <BtnDownload onPress={()=>{/* DownloadPdf */}}>
        <TextBtn>Download 5</TextBtn>
        <Icon
          name="file-download-outline"
          type="material-community"
          color="#fff"
          size={30}
        />
      </BtnDownload>
    </Container>
  );
}
