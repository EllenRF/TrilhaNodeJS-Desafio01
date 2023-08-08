import inquirer from 'inquirer';
import { validarCampo, usuario } from './services.js'
import fs from 'fs';
import usuarios from '../usuarios.json' assert { type: 'json' };
import { leUmUsuario } from '../firebaseServices/firebase.js';

function logarUsuario() {
    inquirer
        .prompt([{
            name: 'username',
            message: 'Digite seu username:'
        }])
        .then((resp) => {
            if (validarCampo(resp.username)) {
                leUmUsuario(resp.username);
            }
        })
        .catch((err) => { console.log(err) })
}
function logarSenha() {
    inquirer
        .prompt([{
            name: 'usuarioSenha',
            message: 'Digite sua senha:'
        }])
        .then((resp) => {
            if (validarCampo(resp.usuarioSenha)) { }
        })
        .catch((err) => { console.log(err) })
}

export {logarUsuario};