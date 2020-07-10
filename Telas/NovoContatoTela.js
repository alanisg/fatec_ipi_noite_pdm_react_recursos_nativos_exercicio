import React, { useState } from 'react';
import { View, Text,StyleSheet, Button } from 'react-native';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import Cores from '../Constantes/Cores';
import {useDispatch} from 'react-redux'

import * as contatosActions from '../store/contatos-actions' ;



const NovoLugarTela = (props) => {

const[contatoNome, setContatoNome] = useState ('');
const[contatoTelefone, setContatoTelefone] = useState ('');
const[contato, setContato] = useState ([]);
const[contatos, setContatos] = useState ([]);
const[contadorContatos, setContadorContatos] = useState(0);

const capturarContatoNome = (contatoNome) =>{
    setContatoNome (contatoNome);
    setContato ([contatoNome, contatoTelefone]);
}

const capturarContatoTelefone =(contatoTelefone) =>{
    setContatoTelefone(contatoTelefone);
    setContato ([contatoNome, contatoTelefone])
}


const adicionarContato = () =>{
    dispatch(contatosActions.addContato(contato[0], contato[1]));
    props.navigation.goBack();
    setContato([nome, telefone]);
    setContatos ((contatos) =>{
    setContadorContatos (contadorContatos + 1);
    return [{key: contadorContatos.toString(), value: contato}, ...contatos];}
    );
}

const dispatch = useDispatch();

  return (
      <ScrollView>
            <View style={estilos.form}>
                <Text>Novo Contato Tela</Text>
                <TextInput style={estilos.textInput} placeholder="Informe o nome" onChangeText={capturarContatoNome} values={nome}></TextInput> 
                <TextInput style={estilos.textInput} placeholder="Informe o telefone" onChangeText={capturarContatoTelefone} value={telefone}/>
                <Button title= 'Salvar Contato' color={Cores.primary}
                 onPress={adicionarContato}></Button>
            </View>
        </ScrollView>
      
  );
}

const estilos = StyleSheet.create({
        textInput:{
            borderBottomColor: '#DDD',
            borderBottomWidth:2,
            marginBottom: 15,
            paddingVertical: 4
        }
});

export default NovoLugarTela;