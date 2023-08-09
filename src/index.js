import cadastroNovoUsuario from './cadastro.js';
import inquirer from 'inquirer';
import { iniciarFirebase, leDadosUsuario, verificaEmail, verificaUsername } from '../firebaseServices/firebase.js';
import { logarUsuario } from './login.js';

iniciarFirebase();
inquirer.prompt(
    [{
        name: 'navegacao',
        message: 'Fazer Login ou Cadastrar-se?',
    }]
).then((resp) => {
    if (resp.navegacao != 1 && resp.navegacao != 2) {
        console.log("Digite apenas 1 ou 2");
        return;
    }
    switch (resp.navegacao) {
        case '1':
            logarUsuario();
            break;
        case '2':
            cadastroNovoUsuario();
            break;
    }
    //} 
}).catch((err) => console.log(err))
