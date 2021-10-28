import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { Btn, Container, Tabs, ViewCont } from "./styles";
import HomeContent from "../components/HomeContent";
import { Icon } from "react-native-elements";
import DocumentsContent from "../components/DocumentsContent";
import FormContent from "../components/FormContent";
import MapContent from "../components/MapContent";

export default function Home() {
  const [content, setContent] = useState(<HomeContent />);
  return (
    <Container>
      <StatusBar style="auto" />
      <ViewCont>{content}</ViewCont>
      <Tabs>
        <Btn onPress={()=>{setContent(<HomeContent/>)}}>
          <Icon
            name="home"
            type="material-community"
            color="#fff"
            size={35}
          />
        </Btn>
        <Btn onPress={()=>{setContent(<DocumentsContent/>)}}>
          <Icon
            name="text-box-multiple-outline"
            type="material-community"
            color="#fff"
            size={30}
          />
        </Btn>
        <Btn onPress={()=>{setContent(<FormContent/>)}}>
          <Icon
            name="plus-box"
            type="material-community"
            color="#fff"
            size={35}
          />
        </Btn>
        <Btn onPress={()=>setContent(<MapContent/>)}>
          <Icon
            name="map-marker-multiple"
            type="material-community"
            color="#fff"
            size={30}
          />
        </Btn>
      </Tabs>
    </Container>
  );
}
