import React from 'react'
import MapView from 'react-native-maps';
import { Marker } from 'react-native-maps';
import { Container } from './styles'
import pinImg from '../../assets/images/pin_dog.png'

export default function MapContent() {


  return (
    <Container>
      <MapView style={{ width: '100%', height: '100%' }}
        initialRegion={{
          latitude: -9.65575162383793,
          longitude: -35.73784431620367,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01
        }}>
        <Marker
          coordinate={{ latitude : -9.65575162383793 , longitude : -35.73784431620367 }}
          title="Local definido"
          image={pinImg}
        />

      </MapView>
    </Container>
  )
}
