import React from 'react';
import { View , Text, Image , StyleSheet, TouchableOpacity} from 'react-native';
import Cores from '../Constantes/Cores';

// import { Container } from './styles';

const ContatoItem = (props) => {
  return (
      <TouchableOpacity style={estilos.contatoItem} onPress={props.onSelect}>
          <Image style={estilos.imagem} source={{uri: props.imagem}}></Image>
          <View style={estilos.infoContainer}>
              <Text style={estilos.nomecontato}>{props.nomecontato}</Text>
              <Text style={estilos.contatoTelefone}>{props.endereco}</Text>
          </View>
      </TouchableOpacity>
  );
}

const estilos =StyleSheet.create({
    contatoTelefone:{
        color:'#777',
        fontSize:16
    },
    nomecontato:{
        color:'black',
        fontSize:18,
        marginBottom:5
    },
    infoContainer:{
        marginLeft:25,
        width:250,
        justifyContent:'center',
        alignItems: 'flex-start'
    },
    imagem:{
        width:70,
        height: 70,
        borderRadius:35,
        backgroundColor: Cores.primary,
        borderWidth:1
    },
    contatoItem:{
        borderBottomColor:'#CCC',
        borderBottomWidth:1,
        paddingVertical:30,
        flexDirection:'row',
        alignItems: 'center'
    }
})

export default ContatoItem;