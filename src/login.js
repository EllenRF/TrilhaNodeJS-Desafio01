import inquirer from 'inquirer';
import { campoVazio } from './services.js'
import { leDadosUsuario } from '../firebaseServices/firebase.js';

function logarUsuario() {
    inquirer
        .prompt([{
            name: 'apelido',
            message: 'Digite seu apelido:',
        },
        {
            name: 'usuarioSenha',
            message: 'Digite sua senha:',
            type: 'password',
            mask: '*'
        }])
        .then((resp) => {
            if (campoVazio(resp.apelido) || campoVazio(resp.usuarioSenha)) {
                logarUsuario();
            }
            leDadosUsuario(resp.apelido, resp.usuarioSenha);
        })
        .catch((err) => { console.log(err) })
}

export { logarUsuario };