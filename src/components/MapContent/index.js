import React from 'react'
import MapView from 'react-native-maps';
import { Container } from './styles'

export default function MapContent() {
  return (
    <Container>
      <MapView style={{width:'100%', height:'100%'}}/>
    </Container>
  )
}
