import React from 'react';
import { View, StyleSheet, Text, Platform, FlatList } from 'react-native';
import { HeaderButtons, Item, HeaderButton } from 'react-navigation-header-buttons';
import BotaoCabecalho from '../components/BotaoCabecalho';

import {useSelector} from 'react-redux';
import ContatoItem from '../Componentes/ContatoItem'


const ListaDeContatosTela = (props) => {
    const contatos = useSelector(estado => estado.contatos.contatos);
    return (
        <View style={}>
        <FlatList
            data={contatos}
            keyExtractor={contato => contato.id}
            renderItem={contato =>
                <LugarItem
                    nomeContato={contato.item.titulo}
                    onSelect={
                        props.navigation.navigate('DetalheDoContato', { tituloContato: contato.item.titulo,
                            idContato: contato.id, telefoneContato: contato.item.telefone })}
                            
                        telefoneContato={contato.item.telefone}
                />

            } />
        </View>
    );
}

ListaDeContatosTela.navigationOptions = dadosNav => {
    return {
        headerTitle: 'Lista de Contatos',
        headerRight:
            <HeaderButtons
                HeaderButtonComponent={BotaoCabecalho}>
                <Item
                    title="Adicionar"
                    iconName={Platform.OS === 'android' ? 'md-add' : 'ios-add'}
                    onPress={() => { dadosNav.navigation.navigate('NovoContato') }} />
            </HeaderButtons>
    }
}






const estilos = StyleSheet.create({

});

export default ListaDeContatosTela;