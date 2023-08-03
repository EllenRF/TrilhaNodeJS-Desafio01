import user from './Usuario.js';
import cadastroNovoUsuario from './cadastro.js';
import inquirer from 'inquirer';
import usuarios from './usuarios.json' assert { type: 'json' };

inquirer.prompt(
    [{
       name: 'navegacao',
       message: '1- Login de Usuario \r\n 2- Cadastrar novo Usuario'
    }]
).then((answer) =>{
   // while(answer.navegacao != 1 || answer.navegacao != 2){
        switch(answer.navegacao){
            case '1':
                //CRIAÇÃO DE LOGIN
            break;
            case'2':
            cadastroNovoUsuario();
            break;
        }
    //} 
}).catch((err) => console.log(err))
