import cadastroNovoUsuario from './cadastro.js';
import inquirer from 'inquirer';
import { iniciarFirebase, leDadosUsuario, verificaEmail, verificaUsername } from '../firebaseServices/firebase.js';
import { logarUsuario } from './login.js';

iniciarFirebase();
inquirer.prompt(
    [{
        name: 'navegacao',
        message: '1- Login de Usuario \r\n  2- Cadastrar novo Usuario'
    }]
).then((answer) => {
    // while(answer.navegacao != 1 || answer.navegacao != 2){
    switch (answer.navegacao) {
        case '1':
            verificaUsername("teste");
            //leDadosUsuario("teste");
            //verificaEmail("issoeumteste");
            break;
        case '2':
            cadastroNovoUsuario();
            break;
    }
    //} 
}).catch((err) => console.log(err))
