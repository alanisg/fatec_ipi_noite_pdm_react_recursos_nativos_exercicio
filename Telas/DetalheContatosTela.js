import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { useSelector } from 'react-redux'


const DetalhesDoContatoTela = (props) => {
   
    return (
        <View>
            <Text>Nome: {'Nome do Contato'}</Text>
            <Text>Telefone: {'Telefone do Contato'}</Text>
        </View>
  
      );
}
DetalhesDoContatoTela.navigationOptions = (dadosNav) => {
    
    return {
        headerTitle: dadosNav.navigation.getParam('tituloContato')
        
    }
};

export default DetalhesDoContatoTela;
