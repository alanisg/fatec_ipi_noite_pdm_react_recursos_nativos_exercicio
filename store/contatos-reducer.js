import { ADD_Contato } from "./contatos-actions";
import Contato from "../model/Contato";

const estadoInicial = {
    contatos:[]
};

export default (estado = estadoInicial, action) =>{
   
    switch (action.type) {
        case ADD_Contato:
            const l = new Lugar (new Date().toString, action.dadosContato.contatoNome,
            action.dadosContato.contatoTelefone);
            return{
                contatos: estado.contatos.concat(l)
            }
            default:
                return estado;
    }
}