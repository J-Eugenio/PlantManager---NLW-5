import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { ButtonTest, Container } from './styles';

export default function App() {

  function msg(){
    console.log('TESTE MDG');
    
  }
  return (
    <Container >

        <ButtonTest onPress={() => msg()} >
          <Text>Button</Text>
        </ButtonTest>

    </Container>
  );
}