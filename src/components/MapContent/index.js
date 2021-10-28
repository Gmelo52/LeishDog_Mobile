import React from 'react'
import { View, Text } from 'react-native'
import LottieView from 'lottie-react-native'
import { Container } from './styles'
import load from '../../assets/images/loader.json'

export default function MapContent() {
  return (
    <Container>
      <LottieView
        style={{ width: 200, height: 200 }}
        resizeMode="contain"
        source={load}
        autoPlay
        loop
      />
    </Container>
  )
}
