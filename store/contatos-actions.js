export const ADD_Contato = 'ADD_Contato';

export const addContato = (contatoNome, contatoTelefone) =>{
   return {
        type: ADD_Contato, dadosContato: {contatoNome: contatoNome, contatoTelefone: contatoTelefone }
    }
}