import inquirer from 'inquirer';
import { validarCampo, usuario } from './services.js'
import { leDadosUsuario } from '../firebaseServices/firebase.js';


function logarUsuario() {
    inquirer
        .prompt([{
            name: 'username',
            message: 'Digite seu username:'
        },
        {
            name: 'usuarioSenha',
            message: 'Digite sua senha:',
            type: 'password',
            mask: '*'
        }])
        .then((resp) => {
            if (validarCampo(resp.username) || validarCampo(resp.usuarioSenha)) {
                logarUsuario();
            }
            leDadosUsuario(resp.username, resp.usuarioSenha);
        })
        .catch((err) => { console.log(err) })
}

export { logarUsuario };