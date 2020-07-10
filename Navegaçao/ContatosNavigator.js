import {createStackNavigator} from 'react-navigation-stack';
import DetalhesDoContatoTela from '.../Telas/DetalhesDoContatoTela';
import ListaDeContatosTela from '.../Telas/ListaDeContatosTela';
import NovoContatoTela from '.../Telas/NovoContatoTela';
import { createAppContainer } from 'react-navigation'


const ContatosNavigator = createStackNavigator({
    ListaDeContatos: ListaDeContatosTela,
    DetalhesDoContato: DetalhesDoContatoTela,
    NovoContato: NovoContatoTela

});

export default createStackNavigator