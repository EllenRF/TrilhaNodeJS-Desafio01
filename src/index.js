import iniciarCadastro from './cadastro.js';
import inquirer from 'inquirer';
import { logarUsuario } from './login.js';

//inicia Primeiro prompt de pergunta
inquirer.prompt(
    [{
        name: 'navegacao',
        message: '(1) Fazer Login ou (2) Cadastrar-se?',
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
            iniciarCadastro();
            break;
    }
}).catch((err) => console.log(err))
